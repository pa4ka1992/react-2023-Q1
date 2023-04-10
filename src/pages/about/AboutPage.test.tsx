import { render, screen } from '@testing-library/react';
import { AboutPage } from '@/pages/_index';

describe('About', () => {
  render(<AboutPage />);

  it('renders', () => {
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});
