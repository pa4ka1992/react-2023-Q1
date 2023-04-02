import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFoundPage';

describe('NotFound', () => {
  render(<NotFound />);

  it('renders', () => {
    expect(screen.getByTestId('404')).toBeInTheDocument();
  });
});
