import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from '~router/Router';
import { setupStore } from '~store/store';

hydrate();

async function hydrate() {
  hydrateRoot(
    document.getElementById('app')!,
    <StrictMode>
      <Provider store={setupStore()}>
        <AppRouter />
      </Provider>
    </StrictMode>
  );
}
