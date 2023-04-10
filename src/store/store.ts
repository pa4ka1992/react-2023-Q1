import { configureStore } from '@reduxjs/toolkit';

import { unsplashAPI } from '@/services/_index';
import * as slices from '~reducers/_index';

export const store = configureStore({
  reducer: {
    ...slices,
    [unsplashAPI.reducerPath]: unsplashAPI,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(unsplashAPI.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
