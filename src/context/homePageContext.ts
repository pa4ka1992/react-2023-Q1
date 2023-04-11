import { createContext } from 'react';

import { TPhotos } from '@/types/unsplash';

type THomeContext = {
  cardsState: {
    cards: TPhotos;
    setCards: React.Dispatch<React.SetStateAction<TPhotos>>;
  };
  searchState: {
    searchVal: string;
    setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  };
  isFetchingState: {
    isFetching: boolean;
    setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export const HomeContext = createContext<THomeContext>({} as THomeContext);
