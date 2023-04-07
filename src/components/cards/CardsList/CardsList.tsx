import { useContext, type FC } from 'react';

import { HomeContext } from '~context/homePageContext';
import { Card } from '../Card/Card';

import styles from './CardsList.module.scss';

export const CardsList: FC = () => {
  const { cardsState } = useContext(HomeContext);
  const { cards } = cardsState;

  return cards.length > 0 ? (
    <section className={styles.list}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  ) : (
    <h4>Your search did not match any photos </h4>
  );
};
