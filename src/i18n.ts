import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from '@/navigation';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes((locale as 'en') || 'de')) notFound();

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('../messages/en.json')
        : import(`../messages/${locale}.json`))
    ).default,
  };
});
