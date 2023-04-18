import * as pages from '@/pages';

import { Layout } from '@/components';
import { ROUTE } from './_constants';

const { HomePage, AboutPage, FormPage, NotFoundPage } = pages;

export const routes = [
  {
    path: ROUTE.home,
    element: <Layout />,
    name: 'Layout',
    children: [
      {
        index: true,
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
    ],
  },
  {
    path: ROUTE.notFound,
    element: <NotFoundPage />,
    name: 'NotFound',
  },
];
