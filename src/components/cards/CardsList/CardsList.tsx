import { useContext, useEffect, useRef, useState, type FC } from 'react';

import { HomeContext } from '~context/homePageContext';
import Card from '../Card/Card';

import { GRIDCOLUMNS } from '@/components/cards/CardsList/_constants';
import styles from './CardsList.module.scss';

export const CardsList: FC = () => {
  const { cardsState } = useContext(HomeContext);
  const container = useRef<HTMLElement>(null);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainerRef(container.current);
  }, [container]);

  const computedCountInColumn = Math.floor(cardsState.cards.length / GRIDCOLUMNS.length);
  const countInColumn = computedCountInColumn ? computedCountInColumn : 1;

  return cardsState.cards.length > 0 ? (
    <section data-testid="card-list" ref={container} className={styles.list}>
      {GRIDCOLUMNS.map((column, order) => (
        <div key={column} className={styles.column}>
          {cardsState.cards
            .slice(order * countInColumn, (order + 1) * countInColumn)
            .map((card) => (
              <Card key={card.id} card={card} container={containerRef} />
            ))}
        </div>
      ))}
    </section>
  ) : (
    <h4>Your search did not match any photos </h4>
  );
};
