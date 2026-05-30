FROM node:24-bookworm-slim AS web-build
WORKDIR /app/web
COPY web/package*.json ./
RUN npm ci --include=dev
COPY web .
RUN npm run build

FROM node:24-bookworm-slim AS server-build
WORKDIR /app/server
COPY server/package*.json ./
RUN npm ci --include=dev
COPY server .
RUN npm run build

FROM node:24-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=server-build /app/server/dist /app/server/dist
COPY server/package*.json /app/server/
RUN cd /app/server && npm ci --omit=dev
COPY --from=web-build /app/web/dist /app/web/dist
EXPOSE 8787
CMD ["node", "/app/server/dist/index.js"]
