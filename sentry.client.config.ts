import * as Sentry from '@sentry/nextjs';

import env from '@/env';

Sentry.init({
  debug: false,
  dsn: process.env.NODE_ENV === 'production' ? env.NEXT_PUBLIC_SENTRY_DSN : undefined,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  tracesSampleRate: 1,
});
