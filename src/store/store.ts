import { configureStore } from '@reduxjs/toolkit';
import * as slices from '~reducers/_index';

export const store = configureStore({
  reducer: {
    ...slices,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
