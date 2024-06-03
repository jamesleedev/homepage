### Builder

FROM --platform=linux/amd64 node:20.14.0-bookworm-slim AS base

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY . .

RUN npm i -g pnpm;


### Prod Deps
FROM base AS prod-deps

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

### Builder
FROM base AS builder

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

### Runner
FROM --platform=linux/amd64 node:20.14.0-bookworm-slim AS runner
WORKDIR /app

RUN useradd non-root && chown -R non-root /app
USER non-root

COPY --chown=non-root --from=prod-deps /app/node_modules /app/node_modules

COPY --chown=non-root --from=builder /app/next.config.js ./
COPY --chown=non-root --from=builder /app/public ./public
COPY --chown=non-root --from=builder /app/package.json ./package.json

COPY --chown=non-root --from=builder /app/.next/standalone ./
COPY --chown=non-root --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["server.js"]

