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
      <div className='flex flex-row justify-between items-center mt-10'>
        <h2 className='text-xl pt-4 font-avenirBlack'>Past events</h2>
        {hasNextPage && (
          <LinkButton text='See More Past Events' onClick={fetchNextPage} />
        )}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {events?.pages.map((page) =>
          page.map((event) => {
            return <EventCard event={event} key={event.id} />;
          })
        )}
      </div>
    </>
  );
};

export default PastEvents;
