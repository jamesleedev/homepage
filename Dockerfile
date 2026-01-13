### Builder

FROM --platform=linux/amd64 node:20.14.0-alpine3.20 AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY . .

RUN npm i -g pnpm;

RUN pnpm install --frozen-lockfile && SKIP_ENV_VALIDATION=1 pnpm run build;

### Runner
FROM --platform=linux/amd64 node:20.14.0-bookworm-slim AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV="production"

RUN useradd non-root && chown -R non-root /app
USER non-root

COPY --chown=non-root --from=builder /app/next.config.js ./
COPY --chown=non-root --from=builder /app/public ./public
COPY --chown=non-root --from=builder /app/package.json ./package.json

COPY --chown=non-root --from=builder /app/.next/standalone ./
COPY --chown=non-root --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["server.js"]
