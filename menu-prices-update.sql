-- BAZEZ menu price and missing item update
-- Run once in the Supabase SQL Editor after the base menu_items table is installed.

-- Give every currently unpriced option the requested default price.
update public.menu_items m
set options = coalesce((
  select jsonb_agg(
    case when opt->>'price' is null or opt->'price' = 'null'::jsonb
      then jsonb_set(opt, '{price}', '100'::jsonb, true)
      else opt end
    order by ordinality
  )
  from jsonb_array_elements(coalesce(m.options, '[]'::jsonb)) with ordinality as e(opt, ordinality)
), '[]'::jsonb),
start_price = coalesce(m.start_price, 100)
where m.start_price is null
   or exists (select 1 from jsonb_array_elements(coalesce(m.options, '[]'::jsonb)) opt
              where opt->>'price' is null or opt->'price' = 'null'::jsonb);

-- Add menu entries that are missing from the database. IDs use the table's normal sequence.
do $$
declare
  v_item record;
begin
  for v_item in
    select * from (values
      ('كريبات', 'كفتة', 'كفتة + خضروات وموتزاريلا.', '[{"label":"عادي","price":100}]'::jsonb),
      ('السندوتشات', 'شاورما فراخ', 'شاورما فراخ. اختر نوع العيش: فينو أو فرنساوي أو سوري.', '[{"label":"سوري","price":100},{"label":"فرنساوي","price":100},{"label":"فينو","price":100}]'::jsonb),
      ('بيتزا إيطالي', 'فراخ', 'فراخ.', '[{"label":"عادي","price":100}]'::jsonb),
      ('بيتزا شرقي', 'فراخ', 'فراخ.', '[{"label":"عادي","price":100}]'::jsonb),
      ('فطير حادق', 'فطيرة كيري سجق', 'سجق مع جبنة كيري.', '[{"label":"عادي","price":100}]'::jsonb),
      ('الطاسات', 'برجر طاسة', 'برجر + ميكس جبن.', '[{"label":"عادي","price":100}]'::jsonb)
    ) as additions(category, name, ingredients, options)
  loop
    if not exists (select 1 from public.menu_items m where m.category=v_item.category and m.name=v_item.name) then
      insert into public.menu_items(category, name, start_price, ingredients, stock, visible, options)
      values(v_item.category, v_item.name, 100, v_item.ingredients, 10, true, v_item.options);
    end if;
  end loop;
end $$;

