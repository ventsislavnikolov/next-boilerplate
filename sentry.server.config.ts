import * as Sentry from '@sentry/nextjs';

Sentry.init({
  debug: false,
  tracesSampleRate: 1,
  dsn: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_SENTRY_DSN : undefined,
});
