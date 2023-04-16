import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { setupStore, type TAppStore, type TRootState } from '~store/store';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

interface IExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<TRootState>;
  store?: TAppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  routerPath?: string,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: IExtendedRenderOptions = {}
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    if (routerPath) {
      return (
        <Provider store={store}>
          <MemoryRouter initialEntries={[routerPath]}>{children}</MemoryRouter>
        </Provider>
      );
    }

    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
