FROM oven/bun:1.3.6-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# TanStack Start / Nitro defaults to cloudflare-module; pin a Node server for Docker
ENV NITRO_PRESET=node-server
RUN bun run build

# Production image, copy all the files and run the server
FROM oven/bun:1.3.6-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S -D -H -u 1001 -G nodejs nodejs

# Create directory for writable files with proper permissions
RUN mkdir -p /app/data && \
    chown -R nodejs:nodejs /app/data

# Copy only necessary files
COPY --from=builder --chown=nodejs:nodejs /app/.output ./.output

EXPOSE 3000

USER nodejs

CMD ["bun", "run", ".output/server/index.mjs"]
