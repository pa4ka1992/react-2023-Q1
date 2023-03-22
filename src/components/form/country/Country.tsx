import { Component } from 'react';
import { COUNTRIES } from './constants';

export class Country extends Component {
  render() {
    return (
      <select name="country">
        <option defaultChecked>Select country</option>

        {COUNTRIES.map((country, i) => (
          <option key={i}>{country}</option>
        ))}
      </select>
    );
  }
}
