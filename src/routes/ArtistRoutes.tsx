/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const EditArtistPage = lazy(() => import('@/pages/artist/EditArtist'));

export const artistRoutes = [
  {
    path: '/edit/:slug',
    element: <EditArtistPage />,
  },
];
