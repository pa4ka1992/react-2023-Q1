import { Layout } from '@/components/_index';
import { NotFound } from '@/pages/_index';
import { ROUTE } from '@/router/_constants';
import { Route, Routes } from 'react-router-dom';

import routes from './routes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.home} element={<Layout />}>
        {routes.map(({ path, element }, key) => (
          <Route index={path === ROUTE.home} path={path} element={element} key={key} />
        ))}
      </Route>
      <Route path={ROUTE.notFound} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
