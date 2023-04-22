import { cleanup, fireEvent, screen } from '@testing-library/react';
import { expect } from 'vitest';

import App from './App';

import { renderWithProviders } from '~utils/withProviders';

describe('App', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('renders home page', async () => {
    renderWithProviders(<App />);

    const header = screen.getByTestId('header');
    const homePage = screen.getByTestId('home');
    const cards = await screen.findAllByTestId('card');

    expect(header).toBeInTheDocument();
    expect(homePage).toBeInTheDocument();
    expect(cards).toHaveLength(3);
  });

  test('routes to product modal', async () => {
    renderWithProviders(<App />);

    const links = await screen.findAllByTestId('card-link');

    fireEvent.click(links[0]);

    const product = await screen.findByTestId('product');

    expect(product).toBeInTheDocument();

    const closer = screen.getByTestId('product-closer');

    fireEvent.click(closer);

    expect(product).not.toBeInTheDocument();
  });
});
