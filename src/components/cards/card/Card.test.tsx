import { cards } from '@/mock/cards';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders', () => {
    render(<Card cardData={cards[4]} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(cards[4].title);
  });
});
