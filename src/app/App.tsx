import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'common/styles/index.scss';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from 'features/backoffice/Home';
import Root from 'features/backoffice/layout/Root';
import ErrorPage from 'common/components/ErrorPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />}
    ]
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
