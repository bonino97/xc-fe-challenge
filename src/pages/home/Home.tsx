import { useContext, useEffect } from 'react';
import { useArtist, useGetEvents, useGetPastEvents } from '@/hooks';
import {
  ArtistBio,
  ArtistHeader,
  PastEvents,
  Topbar,
  UpcomingEvents,
} from '@/components';
import { ArtistContext, ArtistContextProps } from '@/providers/ArtistContext';

const ARTIST_SLUG = 'tini'; // TODO: parametrize artist slug by another way, maybe by url.
const Home: React.FC = () => {
  const { setArtist } = useContext<ArtistContextProps>(ArtistContext);
  const { data: artist } = useArtist(ARTIST_SLUG);
  const { data: events, hasNextPage, fetchNextPage } = useGetEvents();
  const {
    data: pastEvents,
    hasNextPage: pastEventsNextPage,
    fetchNextPage: pastEventsFetchNextPage,
  } = useGetPastEvents();

  useEffect(() => {
    if (artist) {
      setArtist(artist);
    }
  }, [artist, setArtist]);

  return (
    <>
      <Topbar />
      {artist && <ArtistHeader />}
      <div className='mx-4 lg:mx-40 pb-8'>
        {events && (
          <UpcomingEvents
            events={events}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        )}
      </div>
      <div className='bg-[#f9f9f9] rounded-t-2xl max-h-full'>
        <div className='mx-4 lg:mx-40 pt-2 pb-48 lg:pb-8'>
          {artist && <ArtistBio />}
          {pastEvents && (
            <PastEvents
              events={pastEvents}
              hasNextPage={pastEventsNextPage}
              fetchNextPage={pastEventsFetchNextPage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
