import { Component, createRef } from 'react';

import { AddInfo, BirthDate, Country, Gender, Photo, UserName } from '~compos/form/_index';

import styles from './Form.module.scss';

const { form } = styles;

type TProps = { [key: string]: never };

export class Form extends Component {
  data = {
    name: { ref: createRef<HTMLInputElement>() },
    date: { ref: createRef<HTMLInputElement>() },
    country: { ref: createRef<HTMLSelectElement>() },
    info: {
      refs: [
        {
          title: 'Info',
          link: createRef<HTMLInputElement>(),
        },
        {
          title: 'Info1',
          link: createRef<HTMLInputElement>(),
        },
        {
          title: 'Info2',
          link: createRef<HTMLInputElement>(),
        },
      ],
    },
    gender: {
      refs: [
        {
          title: 'Male',
          link: createRef<HTMLInputElement>(),
        },
        {
          title: 'Female',
          link: createRef<HTMLInputElement>(),
        },
      ],
    },
    photo: { ref: createRef<HTMLInputElement>() },
  };

  constructor(props: TProps) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  render() {
    return (
      <form className={form} onSubmit={this.submitHandler}>
        <h3>Form</h3>
        <UserName data={this.data.name} />
        <BirthDate data={this.data.date} />
        <Country data={this.data.country} />
        <AddInfo data={this.data.info} />
        <Gender data={this.data.gender} />
        <Photo data={this.data.photo} />
        <button type="submit">Add</button>
      </form>
    );
  }
}
