-- BAZEZ restaurant order workflow migration
-- Run once in Supabase SQL Editor after the base schema is installed.

alter table public.menu_items add column if not exists stock integer not null default 20 check (stock >= 0);

alter table public.orders add column if not exists items jsonb not null default '[]'::jsonb;
alter table public.orders add column if not exists stock_restored_at timestamptz;
drop policy if exists "customers create orders" on public.orders;
drop policy if exists "admins update orders" on public.orders;
revoke insert, update on public.orders from anon, authenticated;

create or replace function public.place_order(p_order jsonb, p_items jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_line jsonb;
  v_product public.menu_items%rowtype;
  v_qty integer;
  v_label text;
  v_price numeric;
  v_total numeric := 0;
  v_summary text := '';
  v_saved_items jsonb := '[]'::jsonb;
  v_order public.orders%rowtype;
begin
  if jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) = 0 then
    raise exception 'السلة فارغة';
  end if;
  if coalesce(length(trim(p_order->>'customer')),0) < 2 or coalesce(length(trim(p_order->>'phone')),0) < 8 then
    raise exception 'أدخل الاسم ورقم هاتف صحيح';
  end if;
  if coalesce(p_order->>'code','') !~ '^BZ[0-9A-HJKMNP-TV-Z]{8}$' then
    raise exception 'رقم الطلب غير صالح';
  end if;

  for v_line in select value from jsonb_array_elements(p_items)
  loop
    v_qty := (v_line->>'qty')::integer;
    v_label := v_line->>'label';
    if v_qty < 1 or v_qty > 50 then raise exception 'كمية الصنف غير صالحة'; end if;
    select * into v_product from public.menu_items where id=(v_line->>'id')::bigint for update;
    if not found or not v_product.visible then raise exception 'أحد الأصناف غير متاح'; end if;
    if v_product.stock < v_qty then raise exception 'المخزون لا يكفي للصنف: %', v_product.name; end if;
    select (opt->>'price')::numeric into v_price
      from jsonb_array_elements(v_product.options) opt
      where opt->>'label'=v_label and coalesce(opt->>'price','') <> ''
      limit 1;
    if v_price is null or v_price < 0 then raise exception 'اختيار السعر غير متاح للصنف: %', v_product.name; end if;
    v_total := v_total + (v_price * v_qty);
    if v_summary <> '' then v_summary := v_summary || '، '; end if;
    v_summary := v_summary || v_product.name || ' (' || v_label || ') × ' || v_qty::text;
    v_saved_items := v_saved_items || jsonb_build_array(jsonb_build_object(
      'product_id',v_product.id,'name',v_product.name,'option',v_label,
      'qty',v_qty,'unit_price',v_price,'line_total',v_price*v_qty
    ));
    update public.menu_items set stock=stock-v_qty, updated_at=now() where id=v_product.id;
  end loop;

  insert into public.orders(code,customer,phone,branch,order_type,payment,address,summary,total,status,items)
  values(p_order->>'code',trim(p_order->>'customer'),trim(p_order->>'phone'),
    p_order->>'branch',p_order->>'order_type',p_order->>'payment',
    coalesce(p_order->>'address',''),v_summary,v_total,'جديد',v_saved_items)
  returning * into v_order;
  return jsonb_build_object('id',v_order.id,'code',v_order.code,'customer',v_order.customer,
    'phone',v_order.phone,'branch',v_order.branch,'order_type',v_order.order_type,
    'payment',v_order.payment,'address',v_order.address,'summary',v_order.summary,
    'total',v_order.total,'status',v_order.status,'created_at',v_order.created_at);
end;
$$;
revoke all on function public.place_order(jsonb,jsonb) from public;
grant execute on function public.place_order(jsonb,jsonb) to anon, authenticated;

create or replace function public.set_order_status(p_order_id uuid, p_status text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_order public.orders%rowtype;
  v_line jsonb;
  v_allowed boolean := false;
begin
  if not public.is_bazez_admin() then raise exception 'غير مصرح بتغيير الطلب'; end if;
  if p_status not in ('مقبول','قيد التحضير','جاهز','خرج للتوصيل','مكتمل','مرفوض') then
    raise exception 'حالة الطلب غير صالحة';
  end if;
  select * into v_order from public.orders where id=p_order_id for update;
  if not found then raise exception 'الطلب غير موجود'; end if;
  v_allowed := (v_order.status='جديد' and p_status in ('مقبول','مرفوض'))
    or (v_order.status='مقبول' and p_status in ('قيد التحضير','مرفوض'))
    or (v_order.status='قيد التحضير' and p_status in ('جاهز','خرج للتوصيل'))
    or (v_order.status='جاهز' and p_status='مكتمل')
    or (v_order.status='خرج للتوصيل' and p_status='مكتمل');
  if not v_allowed then raise exception 'لا يمكن نقل الطلب من % إلى %',v_order.status,p_status; end if;

  if p_status='مرفوض' and v_order.stock_restored_at is null then
    for v_line in select value from jsonb_array_elements(coalesce(v_order.items,'[]'::jsonb)) loop
      update public.menu_items set stock=stock+(v_line->>'qty')::integer, updated_at=now()
        where id=(v_line->>'product_id')::bigint;
    end loop;
    update public.orders set status=p_status,stock_restored_at=now() where id=p_order_id returning * into v_order;
  else
    update public.orders set status=p_status where id=p_order_id returning * into v_order;
  end if;
  return jsonb_build_object('id',v_order.id,'code',v_order.code,'status',v_order.status);
end;
$$;
revoke all on function public.set_order_status(uuid,text) from public;
grant execute on function public.set_order_status(uuid,text) to authenticated;

create or replace function public.track_order_by_code(p_code text)
returns table(code text, branch text, order_type text, summary text, total numeric, status text, created_at timestamptz)
language sql
security definer
set search_path = public
as $$
  select o.code,o.branch,o.order_type,o.summary,o.total,o.status,o.created_at
  from public.orders o where upper(o.code)=upper(trim(p_code)) limit 1;
$$;
revoke all on function public.track_order_by_code(text) from public;
grant execute on function public.track_order_by_code(text) to anon, authenticated;

-- Keep the orders table in Supabase Realtime for live admin and kitchen updates.
do $$ begin
  if exists(select 1 from pg_publication where pubname='supabase_realtime')
     and not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='orders') then
    alter publication supabase_realtime add table public.orders;
  end if;
end $$;

-- Required once per admin account. Replace the email with the address used to sign in:
-- insert into public.admin_users(user_id)
-- select id from auth.users where email='ADMIN_EMAIL_HERE'
-- on conflict(user_id) do nothing;


