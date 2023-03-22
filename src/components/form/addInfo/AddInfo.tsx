import { Component } from 'react';

export class AddInfo extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="info" name="scales" />
        <label htmlFor="info">Info</label>

        <input type="checkbox" id="info1" name="scales" />
        <label htmlFor="info1">Info1</label>

        <input type="checkbox" id="info2" name="scales" />
        <label htmlFor="info2">Info2</label>
      </div>
    );
  }
}
