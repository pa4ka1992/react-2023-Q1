import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { getRoutes } from './routes';

const router = createBrowserRouter(createRoutesFromElements(getRoutes()));

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
