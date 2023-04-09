import AppRouter from '@/router/Router';
import { ROUTE } from '@/router/_constants';
import { render, screen } from '@testing-library/react';
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

  test('renders photo modal', async () => {
    render(
      <MemoryRouter initialEntries={[`${ROUTE.home}/photo`]}>
        <HomePage />
      </MemoryRouter>,
      { wrapper: AppRouter }
    );

    const a = await screen.findByTestId('card');

    expect(a).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByTestId('card-list')).toBeInTheDocument();
    // });

    // await act(async () => {
    //   expect(screen.getByTestId('card')).toBeInTheDocument();
    // });
  });
});
