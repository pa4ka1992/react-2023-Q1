import compression from 'compression';
import fetch, { Headers, Request, Response } from 'cross-fetch';
import express from 'express';
import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ViteDevServer, createServer as createViteServer } from 'vite';

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
  globalThis.Headers = Headers;
  globalThis.Request = Request;
  globalThis.Response = Response;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = process.cwd();
const isProd = process.env.NODE_ENV === 'production';

function resolve(p: string) {
  return path.resolve(__dirname, p);
}

async function startServer() {
  const app = express();

  app.use(compression());

  let viteServer: ViteDevServer;

  if (isProd) {
    const sirv = (await import('sirv'!)).default;

    app.use(sirv(`${root}/dist/client`));
  } else {
    viteServer = await createViteServer({
      root,
      server: { middlewareMode: true },
      appType: 'custom',
    });

    app.use(viteServer.middlewares);
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      const index = fs.readFileSync(
        resolve(isProd ? 'dist/client/index.html' : 'index.html'),
        'utf8'
      );
      const template = isProd ? index : await viteServer.transformIndexHtml(url, index);

      const { render } = isProd
        ? await import('./dist/server/entry-server.js'!)
        : await viteServer.ssrLoadModule('src/entry-server.tsx');

      const parts = template.split('<!--app-->');

      try {
        res.write(parts[0]);
        const { stream, injectPreload } = await render(req, {
          onShellReady() {
            stream.pipe(res);
          },
          onShellError(err: Error) {
            console.error(err);
          },
          onAllReady() {
            const withPreload = parts[1].replace('<!--preload-->', injectPreload());
            res.write(withPreload);
            res.end();
          },
          onError(err: Error) {
            console.error(err);
          },
        });
      } catch (e) {
        if (e instanceof Response && e.status >= 300 && e.status <= 399) {
          return res.redirect(e.status, e.headers.get('Location')!);
        }
        throw e;
      }
    } catch (error) {
      if (error instanceof Error) {
        if (!isProd) {
          viteServer.ssrFixStacktrace(error);
        }

        console.log(error.stack);
        res.status(500).end(error.stack);

        return;
      }

      console.log(error);
    }
  });

  return app;
}

startServer().then((app) => {
  app.listen(3000, () => {
    console.log('HTTP server is running at http://localhost:3000');
  });
});
