import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

describe('NotFound', () => {
  render(<NotFound />);

  it('renders', () => {
    expect(screen.getByTestId('404')).toBeInTheDocument();
  });
});
