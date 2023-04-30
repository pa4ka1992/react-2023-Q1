import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { AboutPage } from './AboutPage';

describe('About', () => {
  render(<AboutPage />);

  it('renders', () => {
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});
