import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  server: {
    SENTRY_ORG: z.string().optional(),
    SENTRY_PROJECT: z.string().optional(),
    SENTRY_AUTH_TOKEN: z.string().optional(),
    NEXT_PUBLIC_API_URL: z.string().optional(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
    CHROMATIC_PROJECT_TOKEN: z.string().optional(),
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
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    CHROMATIC_PROJECT_TOKEN: process.env.CHROMATIC_PROJECT_TOKEN,
  },
});

export default env;
