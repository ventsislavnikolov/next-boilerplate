import './globals.css';

import { NextIntlClientProvider, createTranslator } from 'next-intl';
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReduxProvider, ToastProvider } from 'providers';
import { languages } from 'utils';

async function getMessages(locale: string) {
  try {
    return (await import(`../../translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages(locale);

  /* You can use the core (non-React) APIs when you have to use next-intl
     outside of components. Potentially this will be simplified in the future
     (see https://next-intl-docs.vercel.app/docs/next-13/server-components). */
  const t: any = createTranslator({ locale, messages });

  return {
    title: t('title'),
    description: t('description'),
  };
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default async function Layout({ children, params: { locale } }: any) {
  let messages;
  try {
    messages = (await import(`../../translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <ToastProvider>{children}</ToastProvider>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
