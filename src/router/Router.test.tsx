import { screen } from '@testing-library/react';

import AppRouter from '~router/Router';

import { renderWithProviders } from '~utils/setupMockStore';

describe('Router', () => {
  test('renders header', () => {
    renderWithProviders(<AppRouter />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
