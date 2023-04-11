import { configureStore } from '@reduxjs/toolkit';

import * as reducers from '~store/reducers';

const { unsplashAPI, homePageReducer, formPageReducer } = reducers;

export const store = configureStore({
  reducer: {
    homePageReducer,
    formPageReducer,
    [unsplashAPI.reducerPath]: unsplashAPI.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(unsplashAPI.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
