import { LocalStorageService } from '@/services/localStorage';
import { Component } from 'react';
import styles from './SearchBar.module.scss';

export class SearchBar extends Component<{}, { searchVal: string }> {
  LS = new LocalStorageService('react');

  constructor(props: {}) {
    super(props);

    this.state = {
      searchVal: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchVal: target.value });
  }

  componentDidMount() {
    const savedSearch = this.LS.getItem('search');
    if (typeof savedSearch === 'string') {
      this.setState({ searchVal: savedSearch ?? '' });
    }
  }

  componentWillUnmount() {
    this.LS.setItem('search', this.state.searchVal);
  }

  render() {
    return (
      <div data-testid="search" className={styles.form}>
        <input
          role="search-input"
          className={styles.search}
          onChange={this.changeHandler}
          type="text"
          placeholder="Search..."
          value={this.state.searchVal}
        />
        <button className={styles.button}>Search</button>
      </div>
    );
  }
}
