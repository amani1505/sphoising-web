import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Emits `.next/standalone/server.js`, which the Dockerfile's runtime stage serves.
  output: "standalone",
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
