import { cleanup, fireEvent, screen } from '@testing-library/react';

import AppRouter from '~router/Router';

import { renderWithProviders } from '~utils/withProviders';

describe('Router', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('renders home page', async () => {
    renderWithProviders(<AppRouter />);

    const header = screen.getByTestId('header');
    const homePage = screen.getByTestId('home');
    const cards = await screen.findAllByTestId('card');

    expect(header).toBeInTheDocument();
    expect(homePage).toBeInTheDocument();
    expect(cards).toHaveLength(3);
  });

  test('routes to product modal', async () => {
    renderWithProviders(<AppRouter />);

    const links = await screen.findAllByTestId('card-link');

    fireEvent.click(links[0]);

    const product = await screen.findByTestId('product');

    expect(product).toBeInTheDocument();
  });
});
