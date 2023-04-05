import { type FC } from 'react';

import { Card } from '@/components/cards/Card/Card';
import styles from './CardList.module.scss';

import { cards } from '@/mock/cards';

export const CardList: FC = () => {
  return (
    <section className={styles.list} data-testid="cardlist">
      {cards.map((card) => (
        <Card cardData={card} key={card.id} />
      ))}
    </section>
  );
};
