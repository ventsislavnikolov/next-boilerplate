import { createSlice } from '@reduxjs/toolkit';

type toastState = {
  message: string;
  severity: string;
  isOpen: boolean;
};

const initialState = {
  message: '',
  severity: '',
  isOpen: false,
} as toastState;

export const toastSlice: any = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, action) => ({ ...state, ...action.payload }),
    setToastInitialState: () => initialState,
  },
});

export const { setToast, setToastInitialState } = toastSlice.actions;
export default toastSlice.reducer;
