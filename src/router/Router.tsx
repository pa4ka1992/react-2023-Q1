import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from '@/components';
import { NotFoundPage } from '@/pages';

import { ROUTE } from './_constants';
import routes from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.home} element={<Layout />}>
        {routes.map(({ path, element, name }, key) => (
          <Route index={path === ROUTE.home} id={name} path={path} element={element} key={key} />
        ))}
      </Route>
      <Route path={ROUTE.notFound} element={<NotFoundPage />} />
    </>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
