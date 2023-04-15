import { screen } from '@testing-library/react';
import { FormPage } from './FormPage';
import { renderWithProviders } from '~utils/withProviders';

describe('Form', () => {
  renderWithProviders(<FormPage />, '/form');

  test('renders', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('users')).toBeInTheDocument();
  });
});
