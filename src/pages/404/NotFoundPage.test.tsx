import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFoundPage';

describe('NotFound', () => {
  render(<NotFoundPage />);

  it('renders', () => {
    expect(screen.getByTestId('404')).toBeInTheDocument();
  });
});
