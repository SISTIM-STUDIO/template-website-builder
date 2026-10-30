-- SUMBAWA TRIP initial database schema.
-- Apply this migration only after reviewing it in Supabase SQL Editor.
-- RLS is enabled on every public table. Admin access is granted through profiles.role.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role text not null default 'admin' check (role in ('admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.packages (
  id text primary key,
  title text not null,
  category text not null default '',
  duration text not null default '',
  short_description text not null default '',
  route text not null default '',
  price_label text not null default 'Minta penawaran',
  image_url text,
  image_alt text not null default '',
  is_published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.open_trip_schedules (
  id uuid primary key default gen_random_uuid(),
  package_id text references public.packages(id) on delete set null,
  title text not null,
  departure_date date not null,
  quota integer not null default 0 check (quota >= 0),
  status text not null default 'coming_soon' check (status in ('open','coming_soon','full','cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  whatsapp text not null,
  package_id text references public.packages(id) on delete set null,
  package_title text not null,
  start_date date,
  participant_count integer not null default 1 check (participant_count > 0),
  trip_type text not null default 'private',
  notes text not null default '',
  status text not null default 'new' check (status in ('new','contacted','dp_pending','confirmed','completed','cancelled')),
  admin_notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null,
  alt_text text not null,
  category text not null default '',
  is_published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  body text not null default '',
  cover_image_url text,
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.is_sumbawa_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  );
$$;

alter table public.profiles enable row level security;
alter table public.packages enable row level security;
alter table public.open_trip_schedules enable row level security;
alter table public.bookings enable row level security;
alter table public.gallery_items enable row level security;
alter table public.articles enable row level security;

-- Profiles are private; an administrator can read the admin profile list.
create policy "Admins can read profiles"
on public.profiles for select to authenticated
using (public.is_sumbawa_admin());

-- Public website can read only published content.
create policy "Public can read published packages"
on public.packages for select to anon, authenticated
using (is_published = true or public.is_sumbawa_admin());

create policy "Public can read visible schedules"
on public.open_trip_schedules for select to anon, authenticated
using (status in ('open','coming_soon') or public.is_sumbawa_admin());

create policy "Public can read published gallery"
on public.gallery_items for select to anon, authenticated
using (is_published = true or public.is_sumbawa_admin());

create policy "Public can read published articles"
on public.articles for select to anon, authenticated
using (status = 'published' or public.is_sumbawa_admin());

-- Public may submit a booking request; only admins may view or manage requests.
create policy "Visitors can submit booking requests"
on public.bookings for insert to anon, authenticated
with check (
  length(trim(customer_name)) between 2 and 120
  and length(trim(whatsapp)) between 6 and 30
  and length(trim(package_title)) between 2 and 180
  and participant_count between 1 and 100
);

create policy "Admins can read bookings"
on public.bookings for select to authenticated
using (public.is_sumbawa_admin());

create policy "Admins can update bookings"
on public.bookings for update to authenticated
using (public.is_sumbawa_admin())
with check (public.is_sumbawa_admin());

-- Only authenticated administrators may create, edit, or delete CMS content.
create policy "Admins manage packages"
on public.packages for all to authenticated
using (public.is_sumbawa_admin())
with check (public.is_sumbawa_admin());

create policy "Admins manage schedules"
on public.open_trip_schedules for all to authenticated
using (public.is_sumbawa_admin())
with check (public.is_sumbawa_admin());

create policy "Admins manage gallery"
on public.gallery_items for all to authenticated
using (public.is_sumbawa_admin())
with check (public.is_sumbawa_admin());

create policy "Admins manage articles"
on public.articles for all to authenticated
using (public.is_sumbawa_admin())
with check (public.is_sumbawa_admin());

grant usage on schema public to anon, authenticated;
grant select on public.packages, public.open_trip_schedules, public.gallery_items, public.articles to anon, authenticated;
grant insert on public.bookings to anon, authenticated;
grant select, update on public.bookings to authenticated;
grant select on public.profiles to authenticated;
grant insert, update, delete on public.packages, public.open_trip_schedules, public.gallery_items, public.articles to authenticated;
