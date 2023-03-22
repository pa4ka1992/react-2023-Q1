import { Component } from 'react';

export class Gender extends Component {
  render() {
    return (
      <div>
        <input type="radio" id="male" name="gender" />
        <label htmlFor="male">Male</label>

        <input type="radio" id="female" name="gender" />
        <label htmlFor="female">Female</label>
      </div>
    );
  }
}
