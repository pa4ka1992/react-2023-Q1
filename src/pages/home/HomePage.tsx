import { type FC } from 'react';
import { CardsList, SearchBar } from '~compos/_index';

export const HomePage: FC = () => {
  return (
    <div data-testid="home">
      <SearchBar />
      <CardsList />
    </div>
  );
};
