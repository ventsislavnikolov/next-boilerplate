'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Toast from '@radix-ui/react-toast';

// UI components
import { ToastMessage } from 'components';

// import store action for set toast initial state
import { setToastInitialState } from 'store/reducers/toastSlice';

export default function ToastProvider({ children }) {
  const dispatch = useDispatch();
  const toast = useSelector((state: any) => state.toast);

  return (
    <Toast.Provider swipeDirection='right'>
      {children}
      <ToastMessage
        isOpen={toast.isOpen}
        message={toast.message}
        severity={toast.severity}
        onOpenChange={() => dispatch(setToastInitialState())}
      />
    </Toast.Provider>
  );
}
