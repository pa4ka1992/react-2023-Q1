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
        id: 'Home',
      },
      {
        path: ROUTE.about,
        element: <AboutPage />,
        id: 'About',
      },
      {
        path: ROUTE.form,
        element: <FormPage />,
        id: 'Form',
      },
      {
        path: ROUTE.photo,
        element: <HomePage />,
        id: 'Product',
      },
    ],
  },
  {
    path: ROUTE.notFound,
    element: <NotFoundPage />,
    id: 'NotFound',
  },
];
