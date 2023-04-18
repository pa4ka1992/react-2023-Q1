import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

const router = createBrowserRouter(routes);

const AppRouter = () => {
  return <RouterProvider router={router} fallbackElement={null} />;
};

export default AppRouter;
