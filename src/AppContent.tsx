import { useContext, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useArtist } from './hooks';
import { ArtistContextProps, ArtistContext } from './providers/ArtistContext';

const ARTIST_SLUG = 'tini'; // TODO: parametrize artist slug by another way, maybe by url.

type RouteItem = {
  path: string;
  element: React.ReactElement;
};

type AppContentProps = {
  routes: RouteItem[];
};

const AppContent: React.FC<AppContentProps> = ({ routes }) => {
  const { setArtist } = useContext<ArtistContextProps>(ArtistContext);
  const { data: artist } = useArtist(ARTIST_SLUG);

  useEffect(() => {
    if (artist) {
      setArtist(artist);
    }
  }, [artist, setArtist]);

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        {routes.map((route, index: number) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppContent;
