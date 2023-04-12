import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '~compos/_index';
import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
};
