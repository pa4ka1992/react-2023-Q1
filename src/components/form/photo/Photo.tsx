import { Component, RefObject } from 'react';

type TProps = { data: { ref: RefObject<HTMLInputElement> } };

export class Photo extends Component<TProps> {
  constructor(props: TProps) {
    super(props);
  }
  render() {
    return <input ref={this.props.data.ref} type="file" name="photo" />;
  }
}
