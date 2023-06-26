import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { NextIntlProvider } from 'next-intl';

import applicationApi from 'store/services/applicationApi';
import applicationReducer from 'store/reducers/applicationSlice';
import toastReducer from 'store/reducers/toastSlice';
import Home from '../../app/[locale]/page';

describe('Home Component', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  const locale = 'en';
  // eslint-disable-next-line import/no-dynamic-require
  const messages = require(`../../translations/${locale}/common.json`);

  useRouter.mockImplementationOnce(() => ({
    query: { locale },
  }));

  const store = configureStore({
    reducer: {
      toast: toastReducer,
      application: applicationReducer,
      [applicationApi.reducerPath]: applicationApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(applicationApi.middleware),
  });

  it('renders a heading', () => {
    render(
      <NextIntlProvider messages={messages} locale={locale}>
        <Provider store={store}>
          <Home />
        </Provider>
      </NextIntlProvider>,
    );

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
