import { useState } from 'react';
import { EventModal } from '@/components';
import { days } from '@/constants/days';
import { IEvent } from '@/types/IEvent.interface';

interface EventCardProps {
  event: IEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const eventDate = new Date(event.startingTime * 1000);
  const weekDay = eventDate.getDay();
  const month = eventDate.toLocaleString('default', {
    month: 'short',
  });

  const openModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  return (
    <div
      key={event.id}
      className='my-3 flex gap-5 items-center b-red rounded-lg shadow-md cursor-pointer overflow-hidden'
      onClick={openModal}
    >
      <div className='relative'>
        <img
          className='w-20 h-20 rounded-lg object-cover brightness-75'
          src={event.coverUrl}
          alt={`xCeed event ${event.name} photo`}
        />
        <div className='absolute text-white top-1 left-4 w-full h-full'>
          <div className='text-3xl font-avenirBlack'>
            {days[weekDay].charAt(0) + eventDate.getDate()}
          </div>
          <div className='text-sm font-avenirBlack tracking-widest'>
            {month.toUpperCase()}
          </div>
        </div>
      </div>
      <div>
        <p className='text-lg font-bold text-[#36424a] font-avenirBlack'>
          {event.name}
        </p>
        <p className='text-sm text-[#36424a] font-avenirBook'>
          {event.venue.city.name}, {event.venue.city.country.name}
        </p>
      </div>

      {isOpenModal && <EventModal onClose={closeModal} eventId={event.id} />}
    </div>
  );
};

export default EventCard;
