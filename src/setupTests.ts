import matchers from '@testing-library/jest-dom/matchers';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { expect } from 'vitest';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import * as mocks from '~store/reducers/constants/mockUnsplash';
import { RES_STATUS, UNSPLASH } from '~store/reducers/constants/unsplash';

expect.extend(matchers);

vi.stubGlobal('fetch', fetch);
vi.stubGlobal('Headers', Headers);
vi.stubGlobal('Request', Request);
vi.stubGlobal('Response', Response);

const server = setupServer(
  rest.get(`${UNSPLASH}/photos/:photoId`, (req, res, ctx) => {
    return res(ctx.status(RES_STATUS.ok), ctx.json(mocks.SINGLE_PHOTO_MOCK));
  }),
  rest.get(`${UNSPLASH}/search/photos`, (req, res, ctx) => {
    return res(
      ctx.status(RES_STATUS.ok),
      ctx.json({ results: mocks.SEARCH_RANDOM_PHOTOS_ARRAY_MOCK })
    );
  }),
  rest.get(`${UNSPLASH}/photos`, (req, res, ctx) => {
    return res(ctx.status(RES_STATUS.ok), ctx.json(mocks.RANDOM_PHOTOS_ARRAY_MOCK));
  }),
  rest.get('*', (req, res, ctx) => {
    console.error(`Doesn't match with ${req.url.toString()}`);
    return res(ctx.status(RES_STATUS.serverError), ctx.json({ error: 'add request handler' }));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
