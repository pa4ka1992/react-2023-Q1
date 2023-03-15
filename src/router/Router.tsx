import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from '@/components/_index';
import { NotFound } from '@/pages/_index';

import { ROUTE } from '@/router/_constants';
import routes from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.home} element={<Layout />}>
        {routes.map(({ path, element }, key) => (
          <Route index={path === ROUTE.home} path={path} element={element} key={key} />
        ))}
      </Route>
      <Route path={ROUTE.notFound} element={<NotFound />} />
    </>
  )
);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
    // <Routes>
    //   <Route path={ROUTE.home} element={<Layout />}>
    //     {routes.map(({ path, element }, key) => (
    //       <Route index={path === ROUTE.home} path={path} element={element} key={key} />
    //     ))}
    //   </Route>
    //   <Route path={ROUTE.notFound} element={<NotFound />} />
    // </Routes>
  );
};

export default AppRouter;
