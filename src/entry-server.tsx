import type * as express from 'express';
import { StrictMode } from 'react';
import { renderToPipeableStream, type RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';

import { routes } from '~router/routes';
import { setupStore } from '~store/store';

export async function render(request: express.Request, options: RenderToPipeableStreamOptions) {
  const { query, dataRoutes } = createStaticHandler(routes);
  const remixRequest = createFetchRequest(request);
  const context = await query(remixRequest);

  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);
  const initialStore = setupStore();
  const preloadedState = initialStore.getState();

  const injectPreload = () => {
    return `
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
    `;
  };

  const stream = renderToPipeableStream(
    <StrictMode>
      <Provider store={initialStore}>
        <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
      </Provider>
    </StrictMode>,
    options
  );

  return { stream, injectPreload };
}

export function createFetchRequest(req: express.Request): Request {
  const origin = `${req.protocol}://${req.get('host')}`;
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  req.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body;
  }

  return new Request(url.href, init);
}
