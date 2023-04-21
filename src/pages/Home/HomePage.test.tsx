import { cleanup, fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw';
import { expect } from 'vitest';

import { HomePage } from './HomePage';

import { server } from '@/setupTests';
import { renderWithProviders } from '~utils/withProviders';

import { RES_STATUS, UNSPLASH } from '~store/reducers/constants/unsplash';

describe('Home page', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('searches product', async () => {
    renderWithProviders(<HomePage />, '/');

    const search = await screen.findByTestId('search-input');
    const searchForm = await screen.findByTestId('search-form');

    fireEvent.change(search, { target: { value: 'cats' } });

    fireEvent.submit(searchForm);

    const cards = await screen.findAllByTestId('card');

    expect(cards).toHaveLength(1);
  });

  test('shows alert when the search didn`t match anything', async () => {
    renderWithProviders(<HomePage />, '/');

    const search = await screen.findByTestId('search-input');
    const searchForm = await screen.findByTestId('search-form');

    server.use(
      rest.get(`${UNSPLASH}/search/photos`, (req, res, ctx) => {
        return res(ctx.status(RES_STATUS.ok), ctx.json({ results: [] }));
      })
    );

    fireEvent.change(search, { target: { value: 'notMatch' } });
    fireEvent.submit(searchForm);

    const notMatch = await screen.findByTestId('not-match');

    expect(notMatch).toBeInTheDocument();
  });
});
