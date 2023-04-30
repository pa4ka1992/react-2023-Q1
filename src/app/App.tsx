import { type FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from '~router/routes';

const App: FC = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
