import { useContext, type ChangeEvent, type FC, type FormEvent } from 'react';

import buttonStyle from '~global/scss/Button.module.scss';
import inputStyle from '~global/scss/Input.module.scss';
import styles from './SearchBar.module.scss';

import { checkSearch } from '@/helpers';
import { HomeContext } from '~context/homePageContext';

export const SearchBar: FC = () => {
  const { cardsState, searchState, isFetchingState } = useContext(HomeContext);
  const { setCards } = cardsState;
  const { searchVal, setSearchVal } = searchState;
  const { setIsFetching } = isFetchingState;

  const inputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFetching(true);

    checkSearch(searchVal, setSearchVal, setCards, setIsFetching);
  };

  return (
    <form onSubmit={submitHandler} data-testid="search" className={styles.form}>
      <input
        role="search-input"
        className={inputStyle.input}
        onInput={inputHandler}
        type="text"
        placeholder="Search..."
        value={searchVal}
      />
      <button type="submit" className={buttonStyle.button}>
        Search
      </button>
    </form>
  );
};
