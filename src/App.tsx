import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ArtistProvider } from '@/providers/ArtistContext';
import Home from '@/pages/Home';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ArtistProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </ArtistProvider>
    </QueryClientProvider>
  );
}

export default App;
