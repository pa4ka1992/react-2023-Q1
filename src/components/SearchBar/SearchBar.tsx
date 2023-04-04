import { useEffect, useRef, useState, type FC } from 'react';

import { LocalStorageService } from '@/services/localStorage';

import buttonStyle from '~global/scss/Button.module.scss';
import inputStyle from '~global/scss/Input.module.scss';
import styles from './SearchBar.module.scss';

export const SearchBar: FC = () => {
  const [searchVal, setSearchVal] = useState('');
  const LS = useRef(new LocalStorageService('react'));

  const cBValue = useRef('');

  useEffect(() => {
    cBValue.current = searchVal;
  }, [searchVal]);

  useEffect(() => {
    const savedSearch = LS.current.getItem('search');
    if (typeof savedSearch === 'string') {
      setSearchVal(savedSearch ?? '');
    }
    const storage = LS.current;

    return () => storage.setItem('search', cBValue.current);
  }, []);

  const inputHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(target.value);
  };

  return (
    <div data-testid="search" className={styles.form}>
      <input
        role="search-input"
        className={inputStyle.input}
        onInput={inputHandler}
        type="text"
        placeholder="Search..."
        value={searchVal}
      />
      <button className={buttonStyle.button}>Search</button>
    </div>
  );
};
