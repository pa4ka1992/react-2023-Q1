import { Component } from 'react';
import { CardList, SearchBar } from '~compos/_index';

export class Home extends Component {
  render() {
    return (
      <div data-testid="home">
        <SearchBar />
        <CardList />
      </div>
    );
  }
}
