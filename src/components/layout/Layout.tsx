import { Header } from '@/components/_index';
import { Component } from 'react';
import { Outlet } from 'react-router-dom';

export class Layout extends Component {
  render() {
    return (
      <div>
        <Header />

        <main className="container">
          <Outlet />
        </main>
      </div>
    );
  }
}
