FROM oven/bun:latest AS base

FROM base AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY src/ ./src/
COPY tsconfig.json ./
RUN bun build src/index.ts --outdir dist --target bun --minify

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist/index.js ./index.js

USER bun
EXPOSE 3000
CMD ["bun", "index.js"]
