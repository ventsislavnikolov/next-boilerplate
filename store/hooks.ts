import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from './index';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
