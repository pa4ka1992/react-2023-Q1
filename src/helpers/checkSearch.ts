import { isPhotoArray } from '@/type-guards/photo-array-type-guard';
import { isString } from '@/type-guards/string-guard';
import { Unsplash } from '~services/unsplash/unsplash';

import { TPhotos } from '@/services/unsplash/_types';

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
