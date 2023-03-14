import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '~compos/_index';
import styles from './Layout.module.scss';

export class Layout extends Component {
  render() {
    return (
      <div>
        <Header />

        <main className={styles.container}>
          <Outlet />
        </main>
      </div>
    );
  }
}
