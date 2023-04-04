import { type FC } from 'react';
import { NavLink, useMatches } from 'react-router-dom';

import styles from './Header.module.scss';
import './Header.scss';

import { ROUTE } from '@/router/_constants';

const { header, nav, wrap, link, page } = styles;

export const Header: FC = () => {
  const matches = useMatches();

  return (
    <header className={header} data-testid="header">
      <nav className={nav}>
        <div className={wrap}>
          <NavLink className={link} to={ROUTE.home}>
            Home
          </NavLink>
          <NavLink className={link} to={ROUTE.about}>
            About
          </NavLink>
          <NavLink className={link} to={ROUTE.form}>
            Form
          </NavLink>
        </div>

        <h4 className={page}>{matches[1].id}</h4>
      </nav>
    </header>
  );
};
