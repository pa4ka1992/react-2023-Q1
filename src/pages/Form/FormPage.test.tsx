import { render, screen } from '@testing-library/react';
import { FormPage } from './FormPage';

describe('Form', () => {
  render(<FormPage />);

  it('renders', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('users')).toBeInTheDocument();
  });
});
