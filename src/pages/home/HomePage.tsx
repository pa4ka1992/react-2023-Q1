import { useState, type FC } from 'react';
import { useParams } from 'react-router-dom';

import { CardsList, Product, SearchBar, Spinner } from '~compos/_index';

import { usePreloader } from '@/hook/use-preloader';
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
    <div data-testid="home">
      <HomeContext.Provider value={context}>
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <SearchBar />
            <CardsList />
          </>
        )}
        {photoId ? <Product /> : null}
      </HomeContext.Provider>
    </div>
  );
};
