import { AboutPage, FormPage, HomePage } from '@/pages';
import { ROUTE } from './_constants';

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

export default routes;
