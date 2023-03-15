import { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import styles from './Header.module.scss';
import './Header.scss';

import routes from '@/router/routes';
import { ROUTE } from '@/router/_constants';

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink className={styles.link} to={ROUTE.home}>
            Home
          </NavLink>
          <NavLink className={styles.link} to={ROUTE.about}>
            About
          </NavLink>
        </nav>
        <h4 className={styles.page}>
          {
            <Routes>
              {routes.map(({ path, name }, key) => (
                <Route path={path} element={name} key={key} />
              ))}
            </Routes>
          }
        </h4>
      </header>
    );
  }
}
