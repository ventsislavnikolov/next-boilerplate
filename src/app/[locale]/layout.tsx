import React from 'react';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';

import { routing, locales } from '@/routing';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: any }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Boilerplate' });

  return {
    description: t('description'),
    title: t('title'),
  };
}

export default async function LocaleLayout({ children, params }: any) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
