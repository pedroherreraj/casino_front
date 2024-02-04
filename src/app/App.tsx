import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'common/styles/index.scss';

import React from 'react';
import logo from './logo.svg';
import Home from 'features/backoffice/Home';
import Root from 'features/backoffice/layout/Root';
import ErrorPage from 'common/components/ErrorPage';
// import { BrowserRouter, Routes, Route, Navigate, useSearchParams, Outlet } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    <RouterProvider router={router} />
  );
}

export default App;
