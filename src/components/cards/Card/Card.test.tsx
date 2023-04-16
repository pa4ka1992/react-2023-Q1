import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Card from '~components/cards/Card/Card';
import { SINGLE_PHOTO_MOCK } from '~store/reducers/constants/mockUnsplash';

describe('product', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('renders with the styles', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Card photo={SINGLE_PHOTO_MOCK} lazyLoader={() => 0} />
      </MemoryRouter>
    );

    const card = screen.getByTestId('card');
    const image = screen.getByTestId('card-image');

    expect(card).toHaveStyle('min-height: 0');
    expect(card).toHaveStyle('filter: blur(2px)');

    fireEvent.load(image);

    expect(card).toHaveStyle('min-height: auto');
    expect(card).toHaveStyle('filter: blur(0)');
  });
});
