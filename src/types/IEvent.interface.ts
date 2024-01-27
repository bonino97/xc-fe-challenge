export interface IEvent {
  coverUrl: string;
  endingTime: number;
  id: string;
  legacyId: number;
  name: string;
  slug: string;
  startingTime: number;
  venue: {
    city: {
      country: {
        id: string;
        coverUrl: string;  
        isoCode: string;
        legacyId: number;
        name: string;
        slug: string;
        timezone: string;
      };
      coverUrl: string;
      currency: string;
      id: string;
      legacyId: number;
      name: string;
      slug: string;
      timezone: string;
    };
    coodinates: {
      latitude: number;
      longitude: number;
    };
    coverUrl: string;
    id: string;
    legacyId: number;
    name: string;
    slug: string;
  };
}
