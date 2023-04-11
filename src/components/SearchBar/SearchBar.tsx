import { type ChangeEvent, type FC, type FormEvent } from 'react';

import buttonStyle from '~global/scss/Button.module.scss';
import inputStyle from '~global/scss/Input.module.scss';
import { useActions } from '~hooks/actions';

import { useAppSelector } from '~hooks/redux';
import styles from './SearchBar.module.scss';

export const SearchBar: FC = () => {
  const { search } = useAppSelector((state) => state.homePageReducer);
  const { setSearchValue } = useActions();

  const searchHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    console.log('submit');
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} data-testid="search" className={styles.form}>
      <input
        role="search-input"
        className={inputStyle.input}
        type="text"
        onChange={searchHandler}
        placeholder="Search..."
        value={search}
      />
      <button type="submit" className={buttonStyle.button}>
        Search
      </button>
    </form>
  );
};
