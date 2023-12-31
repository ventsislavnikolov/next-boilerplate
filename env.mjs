import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  server: {
    NEXTAUTH_URL: z.string().optional(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    NEXT_PUBLIC_API_URL: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
    NEXT_PUBLIC_SENTRY_ORG: z.string().optional(),
    CHROMATIC_PROJECT_TOKEN: z.string().optional(),
    NEXT_PUBLIC_SENTRY_PROJECT: z.string().optional(),
    NEXT_PUBLIC_SENTRY_AUTH_TOKEN: z.string().optional(),
    NODE_ENV: z.enum(['development', 'test', 'production']).optional(),
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform((value) => value === 'true'),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NODE_ENV: process.env.NODE_ENV,
    GITHUB_ID: process.env.GITHUB_ID,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXT_PUBLIC_SENTRY_ORG: process.env.NEXT_PUBLIC_SENTRY_ORG,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    CHROMATIC_PROJECT_TOKEN: process.env.CHROMATIC_PROJECT_TOKEN,
    NEXT_PUBLIC_SENTRY_PROJECT: process.env.NEXT_PUBLIC_SENTRY_PROJECT,
    NEXT_PUBLIC_SENTRY_AUTH_TOKEN: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  },
});

export default env;
