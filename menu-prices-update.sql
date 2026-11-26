begin;

-- Set every missing item or option price to 100 EGP.
update public.menu_items m
set start_price = coalesce(m.start_price, 100),
    options = case
      when m.category = 'السندوتشات' and m.name = 'شاورما فراخ' then
        jsonb_build_array(
          jsonb_build_object('label', 'سوري', 'price', 100),
          jsonb_build_object('label', 'فرنساوي', 'price', 100),
          jsonb_build_object('label', 'فينو', 'price', 100)
        )
      else coalesce((
        select jsonb_agg(
          case
            when o->>'price' is null or o->'price' = 'null'::jsonb
              then jsonb_set(o, '{price}', '100'::jsonb, true)
            else o
          end order by ordinality
        )
        from jsonb_array_elements(coalesce(m.options, '[]'::jsonb))
          with ordinality as option_rows(o, ordinality)
      ), '[]'::jsonb)
    end
where m.start_price is null
   or (m.category = 'السندوتشات' and m.name = 'شاورما فراخ')
   or exists (
     select 1
     from jsonb_array_elements(coalesce(m.options, '[]'::jsonb)) o
     where o->>'price' is null or o->'price' = 'null'::jsonb
   );

-- Add menu entries missing from the database with the next IDs used by the menu.
with additions(sort_order, category, name, ingredients, options) as (
  values
    (3, 'بيتزا إيطالي', 'فراخ', 'فراخ.',
      '[{"label":"عادي","price":100}]'::jsonb),
    (4, 'بيتزا شرقي', 'فراخ', 'فراخ.',
      '[{"label":"عادي","price":100}]'::jsonb),
    (5, 'فطير حادق', 'فطيرة كيري سجق', 'سجق مع جبنة كيري.',
      '[{"label":"عادي","price":100}]'::jsonb)
),
missing as (
  select a.*, row_number() over (order by a.sort_order) as sequence_number
  from additions a
  where not exists (
    select 1 from public.menu_items m
    where m.category = a.category and m.name = a.name
  )
),
next_id as (
  select coalesce(max(id), 0) as id from public.menu_items
)
insert into public.menu_items(id, category, name, start_price, ingredients, visible, options)
select next_id.id + missing.sequence_number, missing.category, missing.name, 100,
       missing.ingredients, true, missing.options
from missing cross join next_id
order by missing.sort_order;

commit;