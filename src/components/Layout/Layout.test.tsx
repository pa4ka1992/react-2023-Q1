import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '~router/Router';
import { ROUTE } from '~router/_constants';
import { Layout } from './Layout';

describe('Layout', () => {
  it('renders', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE.about]}>
        <Layout />
      </MemoryRouter>,
      { wrapper: AppRouter }
    );

    expect(screen.getByTestId('header'));
    expect(screen.getByRole('main'));
  });
});
