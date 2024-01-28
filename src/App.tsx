// En tu archivo App.tsx
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ArtistProvider } from '@/providers/ArtistContext';
import { Route, Routes } from 'react-router-dom';
import { homeRoutes } from '@/routes/HomeRoutes';
import { artistRoutes } from '@/routes/ArtistRoutes';

function App() {
  const queryClient = new QueryClient();
  const routes = [...homeRoutes, ...artistRoutes];
  return (
    <QueryClientProvider client={queryClient}>
      <ArtistProvider>
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              ></Route>
            ))}
          </Routes>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </ArtistProvider>
    </QueryClientProvider>
  );
}

export default App;
