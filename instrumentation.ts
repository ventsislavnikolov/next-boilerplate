import env from '@/env';
import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (
    env.SENTRY_DSN &&
    process.env.NEXT_RUNTIME === 'nodejs' &&
    process.env.NODE_ENV === 'production'
  ) {
    Sentry.init({
      dsn: env.SENTRY_DSN,
      tracesSampleRate: 1.0,
    });
  }

  if (
    env.SENTRY_DSN &&
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_RUNTIME === 'edge'
  ) {
    Sentry.init({
      dsn: env.SENTRY_DSN,
      tracesSampleRate: 1.0,
    });
  }
}
