import { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import styles from './Header.module.scss';
import './Header.scss';

import routes from '@/router/routes';
import { ROUTE } from '@/router/_constants';

export class Header extends Component {
  render() {
    const { header, nav, wrap, link, page } = styles;
    return (
      <header className={header}>
        <nav className={nav}>
          <div className={wrap}>
            <NavLink className={link} to={ROUTE.home}>
              Home
            </NavLink>
            <NavLink className={link} to={ROUTE.about}>
              About
            </NavLink>
          </div>

          <h4 className={page}>
            {
              <Routes>
                {routes.map(({ path, name }, key) => (
                  <Route path={path} element={name} key={key} />
                ))}
              </Routes>
            }
          </h4>
        </nav>
      </header>
    );
  }
}
