import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';

import * as reducers from '~store/reducers';

const { unsplashAPI, homePageReducer, formPageReducer } = reducers;

const rootReducer = combineReducers({
  homePageReducer,
  formPageReducer,
  [unsplashAPI.reducerPath]: unsplashAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<TRootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(unsplashAPI.middleware),
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
