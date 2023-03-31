import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from '~compos/_index';
import { NotFound } from '~pages/_index';

import routes from './routes';
import { ROUTE } from './_constants';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.home} element={<Layout />}>
        {routes.map(({ path, element, name }, key) => (
          <Route index={path === ROUTE.home} id={name} path={path} element={element} key={key} />
        ))}
      </Route>
      <Route path={ROUTE.notFound} element={<NotFound />} />
    </>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
