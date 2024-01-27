import { useArtist, useGetEvents, useGetPastEvents } from '@/hooks';
import {
  ArtistBio,
  ArtistHeader,
  PastEvents,
  Topbar,
  UpcomingEvents,
} from '@/components';

const Home: React.FC = () => {
  const { data: artist } = useArtist();
  const { data: events, hasNextPage, fetchNextPage } = useGetEvents();
  const {
    data: pastEvents,
    hasNextPage: pastEventsNextPage,
    fetchNextPage: pastEventsFetchNextPage,
  } = useGetPastEvents();

  return (
    <>
      <Topbar />
      {artist && <ArtistHeader artist={artist} />}
      <div className='mx-4 lg:mx-40 pb-8'>
        {events && (
          <UpcomingEvents
            events={events}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        )}
        {artist && <ArtistBio artist={artist} />}
        {pastEvents && (
          <PastEvents
            events={pastEvents}
            hasNextPage={pastEventsNextPage}
            fetchNextPage={pastEventsFetchNextPage}
          />
        )}
      </div>
    </>
  );
};

export default Home;
