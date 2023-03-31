import { Component, RefObject } from 'react';

type TProps = {
  data: {
    refs: {
      title: string;
      link: RefObject<HTMLInputElement>;
    }[];
  };
};

export class Gender extends Component<TProps> {
  constructor(props: TProps) {
    super(props);
  }

  render() {
    const { refs } = this.props.data;

    return (
      <div>
        {refs.map((ref) => (
          <>
            <input ref={ref.link} type="radio" id={ref.title} name="gender" />
            <label htmlFor="info">{ref.title}</label>
          </>
        ))}
      </div>
    );
  }
}
