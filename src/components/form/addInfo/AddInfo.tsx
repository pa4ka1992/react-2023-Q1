import { Component, RefObject } from 'react';

type TProps = {
  data: {
    refs: {
      title: string;
      link: RefObject<HTMLInputElement>;
    }[];
  };
};
export class AddInfo extends Component<TProps> {
  constructor(props: TProps) {
    super(props);
  }

  render() {
    const { refs } = this.props.data;

    return (
      <div>
        {refs.map((ref) => (
          <>
            <input ref={ref.link} type="checkbox" id={ref.title} name="scales" />
            <label htmlFor="info">{ref.title}</label>
          </>
        ))}
      </div>
    );
  }
}
