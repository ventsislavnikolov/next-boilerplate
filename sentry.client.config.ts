import * as Sentry from '@sentry/nextjs';

import env from '@/env';

Sentry.init({
  debug: false,
  tracesSampleRate: 1,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  dsn: process.env.NODE_ENV === 'production' ? env.NEXT_PUBLIC_SENTRY_DSN : undefined,
});
