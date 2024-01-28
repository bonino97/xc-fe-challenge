import { createContext, useState, ReactNode } from 'react';
import { IArtist } from '@/types/IArtist.interface';

export interface ArtistContextProps {
  artist: IArtist | null;
  setArtist: (artist: IArtist | null) => void;
}

export interface ArtistProviderProps {
  children: ReactNode;
}

const initialContext: ArtistContextProps = {
  artist: null,
  setArtist: () => null,
};

export const ArtistContext = createContext<ArtistContextProps>(initialContext);

export const ArtistProvider: React.FC<ArtistProviderProps> = ({ children }) => {
  const [artist, setArtist] = useState<IArtist | null>(null);

  return (
    <ArtistContext.Provider value={{ artist, setArtist }}>
      {children}
    </ArtistContext.Provider>
  );
};
