-- Allow a customer to confirm receipt of their own delivery using the private order code.
create or replace function public.confirm_delivery_by_code(p_code text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_order public.orders%rowtype;
begin
  select * into v_order
  from public.orders
  where upper(code) = upper(trim(p_code))
  for update;

  if not found then
    raise exception 'الطلب غير موجود';
  end if;
  if v_order.order_type is distinct from 'توصيل' then
    raise exception 'تأكيد الاستلام متاح لطلبات التوصيل فقط';
  end if;
  if v_order.status = 'مكتمل' then
    return jsonb_build_object('code',v_order.code,'status',v_order.status);
  end if;
  if v_order.status <> 'خرج للتوصيل' then
    raise exception 'لم يتم إرسال الطلب للتوصيل بعد';
  end if;

  update public.orders
  set status = 'مكتمل'
  where id = v_order.id
  returning * into v_order;

  return jsonb_build_object('code',v_order.code,'status',v_order.status);
end;
$$;

revoke all on function public.confirm_delivery_by_code(text) from public;
grant execute on function public.confirm_delivery_by_code(text) to anon, authenticated;