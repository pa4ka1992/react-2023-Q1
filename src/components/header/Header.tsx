import { ROUTE } from '@/router/_constants';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import './Header.scss';

export class Header extends Component {
  render() {
    return (
      <header>
        <NavLink className={styles.link} to={ROUTE.home}>
          Home
        </NavLink>
        <NavLink className={styles.link} to={ROUTE.about}>
          About
        </NavLink>
      </header>
    );
  }
}
