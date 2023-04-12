import { render, screen } from '@testing-library/react';
import { AboutPage } from './AboutPage';

describe('About', () => {
  render(<AboutPage />);

  it('renders', () => {
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});
