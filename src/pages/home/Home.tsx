import { CardList, SearchBar } from '@/components/_index';
import { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CardList />
      </div>
    );
  }
}
