'use client';

import './globals.css';

import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default async function Layout({ children, params: { locale } }: any) {
  let messages;
  try {
    messages = (await import(`../../translations/locale/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
