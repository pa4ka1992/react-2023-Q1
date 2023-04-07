import { useEffect, useRef } from 'react';
import { useBeforeUnload } from 'react-router-dom';

import { LocalStorageService } from '~services/storage/localStorage';

import { checkSearch } from '~helpers/checkSearch';
import { TPhotos } from '~services/unsplash/_types';

type TSaverProps = {
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  setCards: React.Dispatch<React.SetStateAction<TPhotos>>;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
};

type TSaverHook = (props: TSaverProps) => void;

export const useLocalStorageSaver: TSaverHook = ({
  searchVal,
  setSearchVal,
  setCards,
  setIsFetching,
}) => {
  const LS = useRef(new LocalStorageService('react'));

  const cBValue = useRef('');

  useEffect(() => {
    cBValue.current = searchVal;
  }, [searchVal]);

  useEffect(() => {
    const storage = LS.current;
    const savedSearch = LS.current.getItem('search');

    setIsFetching(true);

    checkSearch(savedSearch, setSearchVal, setCards, setIsFetching);

    return () => storage.setItem('search', cBValue.current);
  }, [setSearchVal, setCards, setIsFetching]);

  useBeforeUnload(() => LS.current.setItem('search', searchVal));
};
