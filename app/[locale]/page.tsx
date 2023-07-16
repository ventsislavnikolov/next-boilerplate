'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next-intl/client';
import { useLocale, useTranslations } from 'next-intl';

// UI components
import { Loader } from 'components';
import { useGetAbilityQuery } from 'store/services/applicationApi';

export default function Home() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('Index');

  const { isLoading } = useGetAbilityQuery({ limit: 20, offset: 0 });

  function handleButtonClick(value) {
    router.replace(`/${value}${pathname}`);
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='flex min-h-screen flex-col bg-white dark:bg-slate-800'>
      <header className='py-4'>
        <button
          type='button'
          className='float-right mb-2 mr-4 rounded bg-white px-4 py-2 text-gray-800 dark:bg-slate-800 dark:text-white'
          onClick={() => handleButtonClick(locale === 'en' ? 'en' : 'en')}
        >
          {locale === 'en' ? t('english') : t('english')}
        </button>
      </header>
      <main className='flex flex-1 flex-col items-center justify-between p-24'>
        <p className='pb-3 text-2xl text-slate-800 underline dark:text-white'>
          {t('hello-boilerplate')}
        </p>
        <button
          type='button'
          onClick={() => {
            throw new Error('Sentry Frontend Error');
          }}
        >
          Throw error
        </button>
      </main>
      <footer className='flex items-center justify-center py-6'>
        Copyright {new Date().getFullYear()}
      </footer>
    </div>
  );
}
