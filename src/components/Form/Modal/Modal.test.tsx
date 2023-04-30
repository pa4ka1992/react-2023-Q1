import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Modal } from './Modal';

describe('Card', () => {
  it('renders', () => {
    render(<Modal />);

    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
