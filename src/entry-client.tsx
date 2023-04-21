import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~app/App';
import { TRootState, setupStore } from '~store/store';

type CustomWindowInstanse = Window &
  typeof globalThis & {
    __PRELOADED_STATE__?: TRootState;
  };

hydrate();

async function hydrate() {
  const store = setupStore((window as CustomWindowInstanse).__PRELOADED_STATE__);

  delete (window as CustomWindowInstanse).__PRELOADED_STATE__;

  hydrateRoot(
    document.getElementById('app')!,
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}
