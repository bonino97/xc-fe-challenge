import { EventCard, LinkButton } from '@/components';
import { IEvent } from '@/types/IEvent.interface';
import { InfiniteData } from '@tanstack/react-query';

interface PastEventsProps {
  events: InfiniteData<IEvent[]> | undefined;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
}

const PastEvents: React.FC<PastEventsProps> = ({
  events,
  hasNextPage = false,
  fetchNextPage,
}) => {
  return (
    <>
      <h2 className='text-xl mt-14 font-bold'>Past events</h2>
      <div className='grid grid-cols-2 gap-4'>
        {events?.pages.map((page) =>
          page.map((event) => {
            return <EventCard event={event} key={event.id} />;
          })
        )}
      </div>
      {hasNextPage && (
        <LinkButton text='See More Past Events' onClick={fetchNextPage} />
      )}
    </>
  );
};

export default PastEvents;
