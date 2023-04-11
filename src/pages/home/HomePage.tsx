import { useState, type FC } from 'react';
import { useParams } from 'react-router-dom';

import { CardsList, Product, SearchBar, Spinner } from '~compos/_index';

import styles from './Home.module.scss';

import { usePreloader } from '@/hooks';
import { HomeContext } from '~context/homePageContext';
import { TPhotos } from '~services/unsplash/_types';

export const HomePage: FC = () => {
  const [cards, setCards] = useState<TPhotos>([]);
  const [searchVal, setSearchVal] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const { photoId } = useParams();

  usePreloader({ searchVal, setSearchVal, setCards, setIsFetching });

  const context = {
    cardsState: { cards, setCards },
    searchState: { searchVal, setSearchVal },
    isFetchingState: {
      isFetching,
      setIsFetching,
    },
  };

  return (
    <div className={styles.home} data-testid="home">
      <HomeContext.Provider value={context}>
        <SearchBar />
        {isFetching ? <Spinner /> : <CardsList />}
        {photoId ? <Product /> : null}
      </HomeContext.Provider>
    </div>
  );
};
