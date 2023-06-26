'use client';

import { useTranslations } from 'next-intl';
import * as Toast from '@radix-ui/react-toast';
import { useSelector, useDispatch } from 'react-redux';

// import store action for set toast initial state
import { setToastInitialState } from 'store/reducers/toastSlice';

// UI components
import { Loader, ToastMessage } from 'components';
import { useGetAbilityQuery } from 'store/services/applicationApi';

export default function Home() {
  const dispatch = useDispatch();
  const t = useTranslations('Index');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toast = useSelector((state: any) => state.toast);

  const { isLoading } = useGetAbilityQuery({ limit: 20, offset: 0 });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Toast.Provider swipeDirection='right'>
      <p className='pb-3 text-2xl underline'>{t('hello-boilerplate')}</p>
      <ToastMessage
        isOpen={toast.isOpen}
        message={toast.message}
        severity={toast.severity}
        onOpenChange={() => dispatch(setToastInitialState())}
      />
    </Toast.Provider>
  );
}
