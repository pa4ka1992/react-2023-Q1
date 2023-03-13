import { Component } from 'react';

export class SearchBar extends Component<null, { searchVal: string }> {
  constructor(props: null) {
    super(props);

    this.state = {
      searchVal: '111',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchVal: target.value });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.changeHandler}
          type="text"
          placeholder="Search..."
          value={this.state.searchVal}
        />
      </div>
    );
  }
}
