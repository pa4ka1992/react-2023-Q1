import { About, Home } from '@/pages/_index';
import { ROUTE } from './_constants';

const routes = [
  {
    path: ROUTE.home,
    element: <Home />,
    name: 'Home',
  },
  {
    path: ROUTE.about,
    element: <About />,
    name: 'About',
  },
];

export default routes;
