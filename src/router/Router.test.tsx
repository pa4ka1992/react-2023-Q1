import { render } from '@testing-library/react';
import AppRouter from './Router';

describe('App', () => {
  render(<AppRouter />);

  it('renders', () => {
    // expect(screen.getByRole('h2'));
    // expect(screen.getByRole('navigation'));
  });
});
