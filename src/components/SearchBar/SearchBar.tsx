import { useEffect, useState, type ChangeEvent, type FC, type FormEvent } from 'react';

import buttonStyle from '~global/scss/Button.module.scss';
import inputStyle from '~global/scss/Input.module.scss';
import styles from './SearchBar.module.scss';

import { useActions } from '~hooks/actions';
import { useAppSelector } from '~hooks/redux';
import { getRandomPage } from '~helpers/getRandomPage';

export const SearchBar: FC = () => {
  const { search } = useAppSelector((state) => state.homePageReducer);
  const { setSearch, setPage } = useActions();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(search);
  }, [search]);

  const searchHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) {
      setPage(getRandomPage());
    }

    setSearch(inputValue);
  };

  return (
    <form onSubmit={submitHandler} data-testid="search-form" className={styles.form}>
      <input
        data-testid="search-input"
        className={inputStyle.input}
        type="search"
        onChange={searchHandler}
        placeholder="Search..."
        value={inputValue}
      />
      <button type="submit" className={buttonStyle.button}>
        Search
      </button>
    </form>
  );
};
