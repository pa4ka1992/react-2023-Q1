import { useContext, type FC } from 'react';

import { HomeContext } from '@/context/homePageContext';
import { Card } from '../Card/Card';

export const CardsList: FC = () => {
  const { cardsState } = useContext(HomeContext);
  const { cards } = cardsState;

  return cards.length > 0 ? (
    <>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  ) : (
    <h4>Your search did not match any photos </h4>
  );
};
