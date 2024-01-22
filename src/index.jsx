import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Car from './components/Car/Car';
import CarSearch from './components/Car/Car Search/CarSearch';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Products/:productId',
    element: <Car />,
  },
  {
    path: '/CarSearch/Products/:productId',
    element: <Car />,
  },
  {
    path: '/CarSearch',
    element: <CarSearch />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
  {
    path: '/Car',
    element: <Car />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
