FROM node:22-alpine AS deps
WORKDIR /app
RUN npm config set registry https://registry.npmjs.org/ && npm install -g npm@11.16.0
COPY package*.json ./
COPY apps/api/package*.json apps/api/
RUN npm config set registry https://registry.npmjs.org/ && npm install --workspace @tavily-research/api --include-workspace-root --no-audit --no-fund

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
COPY apps/api ./apps/api
RUN npm run build -w @tavily-research/api

FROM build AS test
RUN npm test -w @tavily-research/api -- --runInBand

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN npm config set registry https://registry.npmjs.org/ && npm install -g npm@11.16.0
COPY package*.json ./
COPY apps/api/package*.json apps/api/
RUN npm config set registry https://registry.npmjs.org/ && npm install --workspace @tavily-research/api --omit=dev --include-workspace-root --no-audit --no-fund && npm cache clean --force
COPY --from=build /app/apps/api/dist ./apps/api/dist
EXPOSE 3000
CMD ["npm", "run", "start:prod", "-w", "@tavily-research/api"]
