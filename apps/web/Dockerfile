FROM node:22-alpine AS build
WORKDIR /app
RUN npm config set registry https://registry.npmjs.org/ && npm install -g npm@11.16.0
COPY package*.json ./
COPY apps/web/package*.json apps/web/
RUN npm config set registry https://registry.npmjs.org/ && npm install --workspace @tavily-research/web --include-workspace-root --no-audit --no-fund
COPY apps/web ./apps/web
RUN npm run build -w @tavily-research/web

FROM nginx:1.27-alpine AS runtime
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
