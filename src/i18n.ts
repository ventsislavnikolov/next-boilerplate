import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/navigation';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes((locale as 'en') || 'de')) notFound();

  return {
    messages: (
      await (locale === 'en' ? import('../messages/en.json') : import(`../messages/${locale}.json`))
    ).default,
  };
});
