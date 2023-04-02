import { useEffect, useRef, useState, type FC } from 'react';

import { LocalStorageService } from '@/services/localStorage';

import buttonStyle from '~global/scss/Button.module.scss';
import inputStyle from '~global/scss/Input.module.scss';
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
        className={inputStyle.input}
        onChange={changeHandler}
        type="text"
        placeholder="Search..."
        value={searchVal}
      />
      <button className={buttonStyle.button}>Search</button>
    </div>
  );
};
