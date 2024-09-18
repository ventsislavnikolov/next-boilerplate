import createMiddleware from 'next-intl/middleware';

import { locales } from '@/navigation';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  locales,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
