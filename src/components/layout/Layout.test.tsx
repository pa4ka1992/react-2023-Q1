import { ROUTE } from '@/router/_constants';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from './Layout';

describe('Layout', () => {
  it('renders', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE.about]}>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByTestId('header'));
    expect(screen.getByRole('main'));
  });
});
