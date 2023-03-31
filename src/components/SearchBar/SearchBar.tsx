import { useEffect, useRef, useState, type FC } from 'react';

import { LocalStorageService } from '@/services/localStorage';

import styles from './SearchBar.module.scss';

export const SearchBar: FC = () => {
  const [searchVal, setSearchVal] = useState('');
  const LS = useRef(new LocalStorageService('react'));

  useEffect(() => {
    const savedSearch = LS.current.getItem('search');
    if (typeof savedSearch === 'string') {
      setSearchVal(savedSearch ?? '');
    }
  }, []);

  useEffect(() => {
    LS.current.setItem('search', searchVal);
  }, [searchVal]);

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(target.value);
  };

  return (
    <div data-testid="search" className={styles.form}>
      <input
        role="search-input"
        className={styles.search}
        onChange={changeHandler}
        type="text"
        placeholder="Search..."
        value={searchVal}
      />
      <button className={styles.button}>Search</button>
    </div>
  );
};
