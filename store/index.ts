import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';
import toastReducer, { setToast } from 'store/reducers/toastSlice';
import application from 'store/services/applicationApi';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (store) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    store.dispatch(
      setToast({
        isOpen: true,
        message: 'An error occurred. Please try again later.',
        severity: 'error',
      }),
    );
  }

  return next(action);
};

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(application.middleware).concat(rtkQueryErrorLogger),
  reducer: {
    toast: toastReducer,
    [application.reducerPath]: application.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
