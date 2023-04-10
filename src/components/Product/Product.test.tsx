import { Product } from '@/components/_index';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('product', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('renders with photo modal', async () => {
    render(
      <MemoryRouter initialEntries={['/photoID/cat']}>
        <Routes>
          <Route path="/photoID/:photoId" element={<Product />} />
        </Routes>
      </MemoryRouter>
    );

    const product = await screen.findByTestId('product');

    expect(product).toBeInTheDocument();
  });
});
