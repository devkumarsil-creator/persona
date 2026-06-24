/**
 * One-time Supabase schema migration.
 * Runs DDL via the Supabase Management API (requires service role JWT or PAT).
 * Falls back to a helpful error if the endpoint rejects the key.
 */

const SUPABASE_URL   = process.env.VITE_SUPABASE_URL;
const SERVICE_KEY    = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ACCESS_TOKEN   = process.env.SUPABASE_ACCESS_TOKEN;

if (!SUPABASE_URL) {
  console.error('❌  Missing VITE_SUPABASE_URL env var.');
  process.exit(1);
}
if (!ACCESS_TOKEN && !SERVICE_KEY) {
  console.error('❌  Missing SUPABASE_ACCESS_TOKEN (or SUPABASE_SERVICE_ROLE_KEY) env var.');
  process.exit(1);
}

// Extract project ref from URL: https://<ref>.supabase.co
const match = SUPABASE_URL.match(/https:\/\/([^.]+)\.supabase\.co/);
if (!match) {
  console.error('❌  Could not parse project ref from VITE_SUPABASE_URL:', SUPABASE_URL);
  process.exit(1);
}
const projectRef = match[1];
console.log('Project ref:', projectRef);

const SQL = `
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

-- Enable RLS
alter table assessment_users enable row level security;
alter table assessment_sessions enable row level security;
alter table assessment_answers enable row level security;
alter table assessment_results enable row level security;

-- Grant table-level privileges to anon and authenticated roles
grant usage on schema public to anon, authenticated;
grant insert on assessment_users to anon, authenticated;
grant insert, select, update on assessment_sessions to anon, authenticated;
grant insert on assessment_answers to anon, authenticated;
grant insert on assessment_results to anon, authenticated;

-- Drop existing policies to recreate cleanly
drop policy if exists "allow anon insert users" on assessment_users;
drop policy if exists "allow anon insert sessions" on assessment_sessions;
drop policy if exists "allow anon update sessions" on assessment_sessions;
drop policy if exists "allow anon select sessions" on assessment_sessions;
drop policy if exists "allow anon insert answers" on assessment_answers;
drop policy if exists "allow anon insert results" on assessment_results;

-- Recreate policies
create policy "allow anon insert users" on assessment_users for insert to anon, authenticated with check (true);
create policy "allow anon insert sessions" on assessment_sessions for insert to anon, authenticated with check (true);
create policy "allow anon update sessions" on assessment_sessions for update to anon, authenticated using (true);
create policy "allow anon select sessions" on assessment_sessions for select to anon, authenticated using (true);
create policy "allow anon insert answers" on assessment_answers for insert to anon, authenticated with check (true);
create policy "allow anon insert results" on assessment_results for insert to anon, authenticated with check (true);
`;

// Try Supabase Management API (requires personal access token)
async function runViaManagementApi() {
  const token = ACCESS_TOKEN || SERVICE_KEY;
  const url = `https://api.supabase.com/v1/projects/${projectRef}/database/query`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: SQL }),
  });
  const text = await res.text();
  return { ok: res.ok, status: res.status, body: text };
}

// Try the direct SQL endpoint some Supabase projects expose
async function runViaRestSql() {
  const url = `${SUPABASE_URL}/rest/v1/rpc/exec_sql`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'apikey': SERVICE_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sql: SQL }),
  });
  const text = await res.text();
  return { ok: res.ok, status: res.status, body: text };
}

console.log('\n--- Attempting Supabase Management API ---');
const mgmt = await runViaManagementApi();
console.log('Status:', mgmt.status);
console.log('Body:', mgmt.body.slice(0, 400));

if (mgmt.ok) {
  console.log('\n✅  Schema created successfully via Management API!');
  process.exit(0);
}

console.log('\n--- Attempting REST /rpc/exec_sql fallback ---');
const rpc = await runViaRestSql();
console.log('Status:', rpc.status);
console.log('Body:', rpc.body.slice(0, 400));

if (rpc.ok) {
  console.log('\n✅  Schema created successfully via RPC!');
  process.exit(0);
}

console.log('\n❌  Could not run migration automatically.');
console.log('The service role key cannot run DDL via the REST API — that requires either:');
console.log('  1. A Supabase personal access token (from app.supabase.com → Account → Access Tokens)');
console.log('  2. Running the SQL manually in the Supabase SQL editor.');
process.exit(2);
