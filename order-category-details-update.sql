-- Save each menu category with the order's item details and summary.
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
  v_category text;
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
    v_category := coalesce(nullif(trim(v_product.category),''),'قسم غير محدد');
    if v_summary <> '' then v_summary := v_summary || '، '; end if;
    v_summary := v_summary || v_category || ': ' || v_product.name || ' (' || v_label || ') × ' || v_qty::text;
    v_saved_items := v_saved_items || jsonb_build_array(jsonb_build_object(
      'product_id',v_product.id,'category',v_category,'name',v_product.name,'option',v_label,
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