import { Component, RefObject } from 'react';

import { COUNTRIES } from './constants';

type TProps = { data: { ref: RefObject<HTMLSelectElement> } };
export class Country extends Component<TProps> {
  constructor(props: TProps) {
    super(props);
  }
  render() {
    return (
      <select ref={this.props.data.ref} name="country" value="Select country">
        {COUNTRIES.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    );
  }
}
