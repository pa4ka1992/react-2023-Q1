import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About', () => {
  render(<About />);

  it('renders', () => {
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});
