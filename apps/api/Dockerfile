FROM node:24-alpine AS deps
WORKDIR /app
COPY package*.json ./
COPY apps/api/package*.json apps/api/
RUN npm ci --workspace @tavily-research/api --include-workspace-root

FROM node:24-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
COPY apps/api ./apps/api
RUN npm run build -w @tavily-research/api

FROM node:24-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
COPY apps/api/package*.json apps/api/
RUN npm ci --workspace @tavily-research/api --omit=dev --include-workspace-root && npm cache clean --force
COPY --from=build /app/apps/api/dist ./apps/api/dist
EXPOSE 3000
CMD ["npm", "run", "start:prod", "-w", "@tavily-research/api"]
