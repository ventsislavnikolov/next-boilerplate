import createMiddleware from 'next-intl/middleware';

import { locales } from '@/navigation';

export default createMiddleware({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'en',
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
