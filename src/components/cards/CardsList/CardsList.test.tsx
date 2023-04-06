import { render, screen } from '@testing-library/react';
import { CardList } from './CardsList';

describe('CardList', () => {
  it('renders', () => {
    render(<CardList />);

    expect(screen.getAllByTestId('card')).toHaveLength(20);
  });
});
