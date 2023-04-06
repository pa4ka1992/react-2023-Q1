import { AboutPage, FormPage, HomePage } from '@/pages/_index';
import { cardsLoader } from '~compos/cards/CardsList/CardsList';
import { ROUTE } from './_constants';

const routes = [
  {
    path: ROUTE.home,
    element: <HomePage />,
    name: 'Home',
    loader: cardsLoader,
  },
  {
    path: ROUTE.about,
    element: <AboutPage />,
    name: 'About',
    loader: undefined,
  },
  {
    path: ROUTE.form,
    element: <FormPage />,
    name: 'Form',
    loader: undefined,
  },
];

export default routes;
