import { Component } from 'react';

import { AddInfo, BirthDate, Country, Gender, Photo, UserName } from '~compos/form/_index';

import styles from './Form.module.scss';

const { form } = styles;

export class Form extends Component {
  render() {
    return (
      <form className={form}>
        <h3>Form</h3>
        <UserName />
        <BirthDate />
        <Country />
        <AddInfo />
        <Gender />
        <Photo />
        <button type="submit">Add</button>
      </form>
    );
  }
}
