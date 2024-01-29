import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ArtistProvider } from '@/providers/ArtistContext';
import { homeRoutes } from '@/routes/HomeRoutes';
import { artistRoutes } from '@/routes/ArtistRoutes';
import AppContent from '@/AppContent';

function App() {
  const queryClient = new QueryClient();
  const routes = [...homeRoutes, ...artistRoutes];

  return (
    <QueryClientProvider client={queryClient}>
      <ArtistProvider>
        <AppContent routes={routes} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ArtistProvider>
    </QueryClientProvider>
  );
}

export default App;
