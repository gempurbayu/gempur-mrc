# Gempur Market Research Center

Monorepo starter for Gempur Market Research Center:

- `apps/web` — React + TypeScript + Vite frontend
- `apps/api` — NestJS backend wired to PostgreSQL with TypeORM
- `docker-compose.yml` — local app stack: web, API, and PostgreSQL
- `.github/workflows/docker-ci.yml` — GitHub Actions CI for workspace and Docker builds

## Requirements

- Node.js 24+
- npm 11+
- Docker with Compose plugin for full local stack

## Setup

```bash
cp .env.example .env
npm install
```

Edit `.env` locally for real credentials. `.env` is ignored by git and must not be committed.

## Development without Docker apps

Start PostgreSQL only:

```bash
docker compose up -d postgres
```

Start both workspaces locally:

```bash
npm run dev
```

Or run individually:

```bash
npm run dev:web
npm run dev:api
```

Default local URLs:

- Web: http://localhost:5173
- API: http://localhost:3000
- Postgres: localhost:5432

## Full Docker stack

```bash
docker compose up --build
```

Services:

- `web` — nginx serving the React build
- `api` — NestJS production server
- `postgres` — PostgreSQL 16 Alpine

## Scripts

```bash
npm run dev       # run all workspace dev scripts
npm run build     # build all workspaces
npm run lint      # lint workspaces when configured
npm run format    # format workspaces when configured
npm run start:db  # start postgres service
npm run stop:db   # stop compose stack
```

## Database

The API reads `DATABASE_URL` from the environment and connects via TypeORM.

`TYPEORM_SYNC=false` by default. Keep it false for production; enable only for early local prototyping if needed.
