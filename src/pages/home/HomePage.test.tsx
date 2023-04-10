import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './HomePage';

describe('Home', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    cleanup();
  });

  const router = (entry: string) => {
    return (
      <MemoryRouter initialEntries={[entry]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photoID/:photoId" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    );
  };

  test('renders with out photos', () => {
    render(<HomePage />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.queryByTestId('product')).not.toBeInTheDocument();
  });

  test('renders with card list', async () => {
    render(router('/'));

    const photos = await screen.findAllByTestId('card');

    expect(photos).toHaveLength(3);
  });

  test('renders with the product modal', async () => {
    render(router('/photoID/cats'));

    const product = await screen.findByTestId('product');

    expect(product).toBeInTheDocument();
  });
});
