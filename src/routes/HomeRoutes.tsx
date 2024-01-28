/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/home/Home'));

export const homeRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
];
