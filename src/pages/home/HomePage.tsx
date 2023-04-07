import { useState, type FC } from 'react';

import { CardsList, SearchBar, Spinner } from '~compos/_index';

import { HomeContext } from '~context/homePageContext';
import { useLocalStorageSaver } from '~hook/use-local-storage-saver';
import { TPhotos } from '~services/unsplash/_types';

export const HomePage: FC = () => {
  const [cards, setCards] = useState<TPhotos>([]);
  const [searchVal, setSearchVal] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useLocalStorageSaver({ searchVal, setSearchVal, setCards, setIsFetching });

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
      </HomeContext.Provider>
    </div>
  );
};
