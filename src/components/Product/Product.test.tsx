import { cleanup, fireEvent, screen } from '@testing-library/react';
import { expect } from 'vitest';

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
    const description = await screen.findByTestId('product-description');
    const image = await screen.findByTestId('product-image');

    fireEvent.load(image);

    expect(product).toBeInTheDocument();
    expect(description).toHaveTextContent(
      'a woman sitting on a chair in front of a white backdrop'
    );
  });
});
