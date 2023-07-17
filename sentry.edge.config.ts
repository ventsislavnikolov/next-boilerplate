import * as Sentry from '@sentry/nextjs';

Sentry.init({
  debug: true,
  tracesSampleRate: 1,
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
});
