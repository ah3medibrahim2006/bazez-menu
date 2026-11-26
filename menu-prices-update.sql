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

-- Keep the Italian chicken pizza size prices from the current menu.
update public.menu_items
set start_price = 100,
    options = '[{"label":"S","price":100},{"label":"M","price":145},{"label":"L","price":210}]'::jsonb
where category = 'بيتزا إيطالي' and name = 'بيتزا فراخ ايطالي';

-- Keep the requested sizes for the eastern chicken pizza, Kiri sausage feteer, and sandwich breads.
update public.menu_items
set name = 'بيتزا فراخ شرقي', start_price = 105,
    options = '[{"label":"S","price":105},{"label":"M","price":150},{"label":"L","price":215}]'::jsonb
where category = 'بيتزا شرقي' and trim(name) = 'بيتزا فراخ شرقي';

update public.menu_items
set start_price = 170,
    options = '[{"label":"M","price":170},{"label":"L","price":250}]'::jsonb
where category = 'فطير حادق' and name = 'فطيرة كيري سجق';

update public.menu_items
set start_price = 55,
    options = '[{"label":"فينو","price":55},{"label":"فرنساوي","price":80},{"label":"سوري","price":100}]'::jsonb
where category = 'السندوتشات' and name = 'شاورما لحمة';

update public.menu_items
set start_price = 50,
    options = '[{"label":"فينو","price":50},{"label":"فرنساوي","price":70},{"label":"سوري","price":85}]'::jsonb
where category = 'السندوتشات' and name = 'شيش';

-- Add menu entries missing from the database with the next IDs used by the menu.
with additions(sort_order, category, name, ingredients, start_price, options) as (
  values
    (3, 'بيتزا إيطالي', 'بيتزا فراخ ايطالي', 'فراخ.', 100,
      '[{"label":"S","price":100},{"label":"M","price":145},{"label":"L","price":210}]'::jsonb),
    (4, 'بيتزا شرقي', 'بيتزا فراخ شرقي', 'فراخ.', 105,
      '[{"label":"S","price":105},{"label":"M","price":150},{"label":"L","price":215}]'::jsonb),
    (5, 'فطير حادق', 'فطيرة كيري سجق', 'سجق مع جبنة كيري.', 170,
      '[{"label":"M","price":170},{"label":"L","price":250}]'::jsonb)
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
select next_id.id + missing.sequence_number, missing.category, missing.name, missing.start_price,
       missing.ingredients, true, missing.options
from missing cross join next_id
order by missing.sort_order;

commit;
