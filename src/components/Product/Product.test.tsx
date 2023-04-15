import { cleanup, screen } from '@testing-library/react';

import { Product } from './Product';

import { renderWithProviders } from '~utils/withProviders';

describe('product', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('renders with photo modal', async () => {
    renderWithProviders(<Product />, '/photoID/cat');

    const product = await screen.findByTestId('product');

    expect(product).toBeInTheDocument();
  });
});
