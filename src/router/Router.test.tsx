import { render, screen } from '@testing-library/react';
import AppRouter from './Router';

describe('App', () => {
  render(<AppRouter />);

  test('renders Home page', () => {
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.queryByTestId('product')).not.toBeInTheDocument();
  });
});
