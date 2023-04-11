import { Unsplash } from '@/services';
import { isPhotoArray, isString } from '~utils/type-guards/_index';

import { TPhotos } from '~services/unsplash/_types';

type TCheckSearch = (
  savedSearch: unknown,
  setSearchVal: React.Dispatch<React.SetStateAction<string>>,
  setCards: React.Dispatch<React.SetStateAction<TPhotos>>,
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>
) => Promise<void>;

export const checkSearch: TCheckSearch = async (
  savedSearch,
  setSearchVal,
  setCards,
  setIsFetching
) => {
  const { searchPhoto, getPhotos } = Unsplash;
  let cardsRes: unknown;

  if (isString(savedSearch) && savedSearch) {
    setSearchVal(savedSearch);
    cardsRes = await searchPhoto(savedSearch);
  } else {
    cardsRes = await getPhotos();
  }

  if (isPhotoArray(cardsRes)) {
    setCards(cardsRes);
  }

  setIsFetching(false);
};
