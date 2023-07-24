import * as Sentry from '@sentry/nextjs';

Sentry.init({
  debug: false,
  tracesSampleRate: 1,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  dsn: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_SENTRY_DSN : undefined,
});
