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
}
