# PersonaScope

A full-stack personality assessment platform built with React, TypeScript, and Supabase. Users complete a 60-question assessment across 4 psychological dimensions and receive one of 16 detailed personality profiles with a radar chart visualisation.

---

## Live Demo

[https://build-foundation--devkumarsil.replit.app](https://build-foundation--devkumarsil.replit.app)

---

## Features

- **Landing page** — hero, how-it-works, 16 profile previews, testimonials, FAQ
- **Onboarding form** — collects name, email, age, gender, occupation, country before the assessment
- **60-question assessment** — 4 dimensions × 15 questions each, progress saved per-answer to Supabase
- **16 personality profiles** — scored from 4 bipolar dimensions (Social Energy, Information Style, Decision Style, Lifestyle Style)
- **Results page** — profile name, description, strengths/weaknesses, radar chart (Recharts), shareable
- **Supabase persistence** — every user, session, answer, and result stored in PostgreSQL with Row Level Security

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite 7 |
| Styling | Tailwind CSS v4 |
| Routing | wouter |
| Animation | Framer Motion |
| Charts | Recharts |
| UI Primitives | Radix UI, lucide-react |
| Backend | Express 5, Node.js 24 |
| Database | Supabase (PostgreSQL) + Drizzle ORM |
| Validation | Zod v4, drizzle-zod |
| Monorepo | pnpm workspaces |
| Build | Vite (frontend), esbuild (API server) |

---

## Project Structure

```
persona/
├── artifacts/
│   ├── personascope/          # React + Vite frontend
│   │   ├── src/
│   │   │   ├── pages/         # Landing, StartAssessment, Assessment, Results
│   │   │   ├── components/    # UI components (assessment, landing sections)
│   │   │   ├── hooks/         # useAssessment — state management + Supabase sync
│   │   │   ├── lib/           # supabase.ts client, db.ts CRUD helpers, scoring.ts
│   │   │   └── data/          # questions.ts (60 Qs), profiles.ts (16 profiles)
│   │   └── vite.config.ts
│   └── api-server/            # Express 5 REST API
│       └── src/
│           ├── routes/        # API route handlers
│           └── index.ts       # Server entry point
├── lib/
│   ├── db/                    # Drizzle ORM schema + migrations
│   └── api-spec/              # OpenAPI spec + Orval codegen
├── scripts/
│   ├── migrate-supabase.mjs   # One-time Supabase schema migration runner
│   └── push-to-github.mjs     # GitHub API push utility
├── supabase-schema.sql        # Full Supabase schema (tables + RLS policies)
├── pnpm-workspace.yaml
└── README.md
```

---

## Database Schema

Four tables in Supabase with Row Level Security enabled:

```sql
assessment_users     -- name, email, age, gender, occupation, country
assessment_sessions  -- links user → session, tracks started/completed status
assessment_answers   -- one row per question per session (question_id, answer_value 1–5)
assessment_results   -- profile_code + JSON dimension scores per session
```

RLS policies allow anonymous `INSERT` on all tables and `SELECT`/`UPDATE` on sessions. Run `supabase-schema.sql` in the Supabase SQL Editor to set up the schema.

---

## Assessment Logic

**4 Dimensions, each scored 1–5 per question (15 questions each):**

| Dimension | Low pole | High pole |
|---|---|---|
| Social Energy | Introverted | Extroverted |
| Information Style | Practical | Conceptual |
| Decision Style | Analytical | Human-centered |
| Lifestyle Style | Structured | Adaptive |

Each dimension score is averaged and mapped to a binary label (e.g. I/E, P/C, A/H, S/A). The 4 labels combine to produce one of 16 profile codes (e.g. `EPAS`, `ICHA`).

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- A [Supabase](https://supabase.com) project

### 1. Clone and install

```bash
git clone https://github.com/devkumarsil-creator/persona.git
cd persona
pnpm install
```

### 2. Set environment variables

Create a `.env` file in `artifacts/personascope/`:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Create a `.env` file in the root (for migration scripts):

```env
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_ACCESS_TOKEN=your-personal-access-token
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
```

### 3. Run the Supabase migration

```bash
node scripts/migrate-supabase.mjs
```

This creates all 4 tables, enables RLS, and sets the correct grants and policies.

### 4. Start the development servers

```bash
# Frontend (port set via PORT env var)
pnpm --filter @workspace/personascope run dev

# API server
pnpm --filter @workspace/api-server run dev
```

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm run typecheck` | Full TypeScript check across all packages |
| `pnpm run build` | Typecheck + build all packages |
| `pnpm --filter @workspace/api-spec run codegen` | Regenerate API hooks from OpenAPI spec |
| `pnpm --filter @workspace/db run push` | Push DB schema changes (dev only) |
| `node scripts/migrate-supabase.mjs` | Run Supabase schema migration |

---

## Deployment

The app is deployed on Replit with:
- Frontend served as static files (Vite production build)
- API server running as a Node.js process
- SPA rewrite rule (`/* → /index.html`) for client-side routing

The `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` secrets are baked into the frontend bundle at build time by Vite.

---

## Environment Variables Reference

| Variable | Used in | Description |
|---|---|---|
| `VITE_SUPABASE_URL` | Frontend build | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Frontend build | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Migration script | Supabase service role key (server-side only) |
| `SUPABASE_ACCESS_TOKEN` | Migration script | Supabase personal access token (for Management API) |
| `PORT` | Dev/prod servers | Port for Vite dev server and API server |
| `BASE_PATH` | Vite build | Base URL path (e.g. `/`) |

---

## Personality Profiles

All 16 profiles with 4-letter codes combining:
- **E/I** — Extroverted / Introverted
- **C/P** — Conceptual / Practical  
- **H/A** — Human-centered / Analytical
- **S/Ad** — Structured / Adaptive

Examples: `ECHS` (The Inspiring Leader), `IPAS` (The Strategic Architect), `EPHA` (The Practical Energiser), `ICAS` (The Thoughtful Innovator) … and 12 more.

---

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## License

MIT — free to use, modify, and distribute.
