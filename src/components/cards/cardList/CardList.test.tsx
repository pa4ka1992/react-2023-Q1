import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';

describe('CardList', () => {
  it('renders', () => {
    render(<CardList />);

    expect(screen.getAllByTestId('card')).toHaveLength(20);
  });
});
