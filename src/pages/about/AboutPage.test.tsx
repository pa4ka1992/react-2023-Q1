import { render, screen } from '@testing-library/react';
import { About } from './AboutPage';

describe('About', () => {
  render(<About />);

  it('renders', () => {
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});
