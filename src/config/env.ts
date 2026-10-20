import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url(),
});

// NEXT_PUBLIC_* values are inlined at build time, so each one must be read by its full name.
export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
