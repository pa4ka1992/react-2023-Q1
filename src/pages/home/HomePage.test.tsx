import AppRouter from '@/router/Router';
import { ROUTE } from '@/router/_constants';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './HomePage';

describe('Home', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  test('renders with out photos', () => {
    render(<HomePage />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.queryByTestId('product')).not.toBeInTheDocument();
  });

  test('renders with card list', async () => {
    render(
      <MemoryRouter initialEntries={[`${ROUTE.home}`]}>
        <HomePage />
      </MemoryRouter>,
      { wrapper: AppRouter }
    );

    await waitFor(() => async () => {
      const photos = await screen.findAllByTestId('card');
      const product = await screen.findByTestId('product');

      expect(photos).toHaveLength(3);
      expect(product).not.toBeInTheDocument();
    });
  });

  test('renders modal product', async () => {
    render(
      <MemoryRouter initialEntries={[`${ROUTE.home}asdasd`]}>
        <HomePage />
      </MemoryRouter>,
      { wrapper: AppRouter }
    );

    await waitFor(() => async () => {
      const product = await screen.findByTestId('product');

      expect(product).toBeInTheDocument();
    });
  });
});
