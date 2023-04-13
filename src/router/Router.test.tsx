import { cleanup, screen } from '@testing-library/react';

import AppRouter from '~router/Router';

import { renderWithProviders } from '~utils/setupMockStore';

describe('Router', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('renders header', async () => {
    renderWithProviders(<AppRouter />);

    const header = screen.getByTestId('header');
    const homePage = await screen.findByTestId('home');
    const cardList = await screen.findByTestId('card-list');

    expect(header).toBeInTheDocument();
    expect(homePage).toBeInTheDocument();
    expect(cardList).toBeInTheDocument();
  });
});
