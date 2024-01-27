import { days } from '@/constants/days';
import { IEvent } from '@/types/IEvent.interface';

interface EventCardProps {
  event: IEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventDate = new Date(event.startingTime * 1000);
  const weekDay = eventDate.getDay();
  const month = eventDate.toLocaleString('default', {
    month: 'short',
  });

  console.log(event);
  return (
    <div
      key={event.id}
      className='my-3 flex gap-5 items-center b-red rounded-lg shadow-md cursor-pointer overflow-hidden'
    >
      <div className='relative'>
        <img
          className='w-20 h-20 rounded-lg object-cover brightness-75'
          src={event.coverUrl}
          alt={`event ${event.name} photo`}
        />
        <div className='absolute text-white top-1 left-4 w-full h-full'>
          <div className='text-3xl font-semibold'>
            {days[weekDay].charAt(0) + eventDate.getDate()}
          </div>
          <div className='text-sm font-semibold tracking-widest'>
            {month.toUpperCase()}
          </div>
        </div>
      </div>
      <div>
        <p className='text-lg font-bold text-[#36424a]'>{event.name}</p>
        <p className='text-sm text-[#36424a]'>
          {event.venue.city.name}, {event.venue.city.country.name}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
