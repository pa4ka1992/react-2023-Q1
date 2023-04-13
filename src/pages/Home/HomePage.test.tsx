import { cleanup, screen } from '@testing-library/react';

import { HomePage } from './HomePage';

import { renderWithProviders } from '~utils/setupMockStore';

describe('Home', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    cleanup();

    // store.dispatch(unsplashAPI.util.resetApiState());
  });

  test('renders with out photos', () => {
    renderWithProviders(<HomePage />, '/');

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.queryByTestId('product')).not.toBeInTheDocument();
  });

  test('renders with card list', async () => {
    renderWithProviders(<HomePage />, '/');

    const photos = await screen.findAllByTestId('card');

    expect(photos).toHaveLength(3);
  });
});
