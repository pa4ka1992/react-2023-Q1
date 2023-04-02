import { render, screen } from '@testing-library/react';
import { Home } from './HomePage';

describe('Home', () => {
  render(<Home />);

  it('renders', () => {
    expect(screen.getByTestId('cardlist')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
