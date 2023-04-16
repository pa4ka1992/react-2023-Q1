import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { CardsList, Product, SearchBar } from '@/components';

import styles from './Home.module.scss';

export const HomePage: FC = () => {
  const { photoId } = useParams();

  return (
    <div className={styles.home} data-testid="home">
      <SearchBar />
      <CardsList />
      {photoId ? <Product /> : null}
    </div>
  );
};
