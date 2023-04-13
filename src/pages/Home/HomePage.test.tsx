import { cleanup, screen } from '@testing-library/react';
import { renderWithProviders } from '~utils/setupMockStore';

import { HomePage } from './HomePage';

describe('Home', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('renders', () => {
    renderWithProviders(<HomePage />, '/');

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
