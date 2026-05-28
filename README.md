# Gempur Market Research Center

Monorepo starter for a market research center:

- `apps/web` — React + TypeScript + Vite frontend
- `apps/api` — NestJS backend
- `docker-compose.yml` — local PostgreSQL

## Requirements

- Node.js 24+
- npm 11+
- Docker / Docker Compose

## Setup

```bash
cp .env.example .env
npm install
```

## Development

Start PostgreSQL:

```bash
docker compose up -d postgres
```

Start both apps:

```bash
npm run dev
```

Or run individually:

```bash
npm run dev:web
npm run dev:api
```

Default URLs:

- Web: http://localhost:5173
- API: http://localhost:3000
- Postgres: localhost:5432

## Scripts

```bash
npm run dev       # run all workspace dev scripts
npm run build     # build all workspaces
npm run lint      # lint workspaces when configured
npm run format    # format workspaces when configured
```

## Notes

Database integration is not wired into NestJS yet. Next step is choosing an ORM/query layer, likely Prisma or TypeORM.
