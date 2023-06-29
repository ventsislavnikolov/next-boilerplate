'use client';

import { useTranslations } from 'next-intl';

// UI components
import { Loader } from 'components';
import { useGetAbilityQuery } from 'store/services/applicationApi';

export default function Home() {
  const t = useTranslations('Index');

  const { isLoading } = useGetAbilityQuery({ limit: 20, offset: 0 });

  if (isLoading) {
    return <Loader />;
  }

  return <p className='pb-3 text-2xl underline'>{t('hello-boilerplate')}</p>;
}
