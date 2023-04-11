import { useRef, type FC } from 'react';

import Card from '../Card/Card';

import styles from './CardsList.module.scss';

import { useLazyLoader } from '~hooks/lazyLoader';
import { useAppSelector } from '~hooks/redux';

export const CardsList: FC = () => {
  const { cardsState } = useAppSelector((state) => state.homePageReducer);
  const container = useRef<HTMLElement>(null);
  const { splittedArray, getPreloadHeight } = useLazyLoader(container, cardsState);

  return (
    <section data-testid="card-list" ref={container} className={styles.list}>
      {splittedArray?.map((column, order) => (
        <div key={order} className={styles.column}>
          {column.map((photo) => (
            <Card key={photo.id} photo={photo} lazyLoader={getPreloadHeight} />
          ))}
        </div>
      ))}
    </section>
  );
};
