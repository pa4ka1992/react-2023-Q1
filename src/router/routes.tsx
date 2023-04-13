import { Route } from 'react-router-dom';

import * as pages from '@/pages';

import { ROUTE } from './_constants';
import { Layout } from '@/components';

const { HomePage, AboutPage, FormPage, NotFoundPage } = pages;

const routes = [
  {
    path: ROUTE.home,
    element: <HomePage />,
    name: 'Home',
  },
  {
    path: ROUTE.about,
    element: <AboutPage />,
    name: 'About',
  },
  {
    path: ROUTE.form,
    element: <FormPage />,
    name: 'Form',
  },
  {
    path: ROUTE.photo,
    element: <HomePage />,
    name: 'Product',
  },
];

export const getRoutes = () => (
  <>
    <Route path={ROUTE.home} element={<Layout />}>
      {routes.map(({ path, element, name }, key) => (
        <Route index={path === ROUTE.home} id={name} path={path} element={element} key={key} />
      ))}
    </Route>
    <Route path={ROUTE.notFound} element={<NotFoundPage />} />
  </>
);
