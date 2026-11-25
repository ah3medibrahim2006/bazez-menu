-- Apply once in the Supabase SQL Editor to enable menu image uploads.
-- Public can view the menu photos. Only signed-in Bazez admins can upload or replace them.

alter table public.menu_items
  add column if not exists image_url text,
  add column if not exists image_visible boolean not null default true;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'bazez-menu-images',
  'bazez-menu-images',
  true,
  4194304,
  array['image/webp']::text[]
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Bazez menu images public read" on storage.objects;
create policy "Bazez menu images public read"
on storage.objects for select to anon, authenticated
using (bucket_id = 'bazez-menu-images');

drop policy if exists "Bazez admins upload menu images" on storage.objects;
create policy "Bazez admins upload menu images"
on storage.objects for insert to authenticated
with check (bucket_id = 'bazez-menu-images' and public.is_bazez_admin());

drop policy if exists "Bazez admins update menu images" on storage.objects;
create policy "Bazez admins update menu images"
on storage.objects for update to authenticated
using (bucket_id = 'bazez-menu-images' and public.is_bazez_admin())
with check (bucket_id = 'bazez-menu-images' and public.is_bazez_admin());
