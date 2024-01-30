export interface IEvent {
  id: string;
  legacyId: number;
  name: string;
  about: string;
  slug: string;
  startingTime: number;
  endingTime: number;
  doorsOpening: number;
  coverUrl: string;
  isFestival: boolean;
  settings: {
    isPrivate: boolean;
    tableManagementEnabled: boolean;
  };
  venue: {
    id: string;
    legacyId: number;
    name: string;
    slug: string;
    logoUrl: string;
    coverUrl: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    city: {
      id: string;
      legacyId: number;
      name: string;
      slug: string;
      coverUrl: string;
      timezone: string;
      currency: string;
      country: {
        id: string;
        legacyId: number;
        name: string;
        slug: string;
        coverUrl: string;
        isoCode: string;
      };
    };
  };
  company: {
    name: string;
    privacyPolicyUrl: string | null;
  };
  musicGenres: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  vibes: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  dressCode: {
    id: string;
    name: string;
  };
  agePolicy: {
    id: string;
    name: string;
  };
  policyText: string | null;
  checkoutTerms: string | null;
  floorplanId: string | null;
}
