import { type FC } from 'react';
import { CardList, SearchBar } from '~compos/_index';

export const HomePage: FC = () => {
  return (
    <div data-testid="home">
      <SearchBar />
      <CardList />
    </div>
  );
};
