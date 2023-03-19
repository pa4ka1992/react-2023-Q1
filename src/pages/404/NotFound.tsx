import { Component } from 'react';

export class NotFound extends Component {
  render() {
    return (
      <div data-testid="404">
        <p>404</p>
        <p>Page is not found, sorry</p>
      </div>
    );
  }
}
