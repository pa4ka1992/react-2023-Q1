import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('Home', () => {
  render(<HomePage />);

  it('renders', () => {
    expect(screen.getByTestId('cardlist')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
