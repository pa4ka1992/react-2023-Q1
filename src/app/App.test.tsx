import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  render(<App />);

  it('renders', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
