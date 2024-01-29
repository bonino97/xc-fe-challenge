export interface IArtist {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverUrl: string;
  recordLabel: string;
  musicGenres: {
    name: string;
  }[];
  tracks: {
    name: string;
    url: string;
  }[];
  website: string;
  spotify: string;
  mixcloud: string;
  soundcloud: string;
}
