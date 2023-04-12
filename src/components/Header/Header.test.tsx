import AppRouter from '@/router/Router';
import { ROUTE } from '@/router/_constants';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
  it('renders', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE.home]}>
        <Header />
      </MemoryRouter>,
      { wrapper: AppRouter }
    );

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Home');
  });
});
