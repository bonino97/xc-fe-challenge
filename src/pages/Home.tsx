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
      </div>
      <div className='bg-[#f9f9f9] rounded-t-2xl max-h-full'>
        <div className='mx-4 lg:mx-40 pt-2 pb-48 lg:pb-8'>
          {artist && <ArtistBio artist={artist} />}
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
