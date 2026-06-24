-- Run this SQL in your Supabase project SQL editor to create the required tables.

create extension if not exists "pgcrypto";

create table if not exists assessment_users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  age integer,
  gender text,
  occupation text,
  country text,
  created_at timestamptz not null default now()
);

create table if not exists assessment_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references assessment_users(id),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  status text not null default 'started'
);

create table if not exists assessment_answers (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references assessment_sessions(id),
  question_id integer not null,
  answer_value integer not null,
  created_at timestamptz not null default now()
);

create table if not exists assessment_results (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references assessment_sessions(id),
  profile_code text not null,
  scores jsonb not null,
  created_at timestamptz not null default now()
);

-- Allow anonymous inserts from the frontend (anon key)
alter table assessment_users enable row level security;
alter table assessment_sessions enable row level security;
alter table assessment_answers enable row level security;
alter table assessment_results enable row level security;

create policy "allow anon insert users" on assessment_users for insert with check (true);
create policy "allow anon insert sessions" on assessment_sessions for insert with check (true);
create policy "allow anon update sessions" on assessment_sessions for update using (true);
create policy "allow anon insert answers" on assessment_answers for insert with check (true);
create policy "allow anon insert results" on assessment_results for insert with check (true);

create policy "allow anon select sessions" on assessment_sessions for select using (true);
