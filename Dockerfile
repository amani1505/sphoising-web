# syntax=docker/dockerfile:1

# ──────────────────────────────────────────────────────────────────────────
# Karanfil Tours — production image for the Next.js (App Router) site.
# Multi-stage: deps → build → minimal standalone runtime. Final image runs
# as a non-root user and serves the traced `.next/standalone` output.
# ──────────────────────────────────────────────────────────────────────────

ARG NODE_VERSION=22-alpine

# 1) Install production-grade dependencies from the lockfile.
FROM node:${NODE_VERSION} AS deps
# libc6-compat helps some native deps run on Alpine.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# 2) Build the app. Requires network access to fetch the Google fonts that
#    `next/font/google` downloads at build time (Cormorant Garamond + Inter).
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# 3) Minimal runtime — only the standalone server, static assets and public/.
FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3010
ENV HOSTNAME=0.0.0.0

# Run as an unprivileged user.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Public assets (images, fonts, favicon).
COPY --from=builder /app/public ./public

# Standalone server + its traced node_modules, then the static chunks.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3010

# Lightweight container healthcheck against the running server.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:'+(process.env.PORT||3000),r=>process.exit(r.statusCode<500?0:1)).on('error',()=>process.exit(1))"

# `server.js` is emitted by Next's standalone output.
CMD ["node", "server.js"]
