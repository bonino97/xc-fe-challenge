import { EventCard, LinkButton } from '@/components';
import { IEvent } from '@/types/IEvent.interface';
import { InfiniteData } from '@tanstack/react-query';

interface UpcomingEventsProps {
  events: InfiniteData<IEvent[]> | undefined;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  events,
  hasNextPage = false,
  fetchNextPage,
}) => {
  return (
    <>
      <h2 className='text-xl mt-14 font-bold'>Upcoming Gigs</h2>
      {events?.pages.map((page) =>
        page.map((event) => {
          return <EventCard event={event} key={event.id} />;
        })
      )}
      {hasNextPage && (
        <LinkButton text='See More Upcoming Events' onClick={fetchNextPage} />
      )}
    </>
  );
};

export default UpcomingEvents;
