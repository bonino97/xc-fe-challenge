import Modal from 'react-modal';
import useGetEvent from '@/hooks/useGetEvent';
import {
  MapIcon,
  MusicalNoteIcon,
  UsersIcon,
  XMarkIcon,
  ShareIcon,
  MapPinIcon,
  BoltIcon,
  HeartIcon,
} from '@heroicons/react/16/solid';

Modal.setAppElement('#root');

interface EventModalProps {
  onClose: () => void;
  eventId: string;
}

const EventModal: React.FC<EventModalProps> = ({ onClose, eventId }) => {
  const { data: event } = useGetEvent(eventId);
  if (!event) return null;
  console.log(event);
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className='outline-none overflow-auto max-h-full max-w-full'
      overlayClassName='fixed z-[1000] inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4'
      closeTimeoutMS={300}
    >
      <div className='bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all sm:w-full md:max-w-4xl max-h-[90vh] animate-scale-up font-avenirHeavy'>
        {/* Close button */}
        <div className='absolute top-4 right-4 z-[1001]'>
          <button
            onClick={onClose}
            className='text-white-600 hover:text-white-800 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          >
            <XMarkIcon className='h-8 w-8 text-white' />
          </button>
        </div>

        <div className='relative'>
          <img
            src={event.coverUrl}
            alt={event.name}
            className='object-cover w-full h-72 lg:h-96'
          />
          <div className='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent'>
            <h3 className='text-3xl font-bold text-white'>{event.name}</h3>
            <p className='text-sm text-gray-300'>
              From {new Date(event.startingTime * 1000).toLocaleString()} to{' '}
              {new Date(event.endingTime * 1000).toLocaleString()}
            </p>
          </div>
        </div>

        <div className='p-8 space-y-6'>
          {event.venue && (
            <div className='flex items-center space-x-4'>
              <MapIcon className='h-6 w-6 text-gray-700' />
              <p className='text-lg text-gray-700'>
                {event.venue.name}, {event.venue.city.name},{' '}
                {event.venue.city.country.name}
              </p>
            </div>
          )}

          {event.musicGenres && event.musicGenres.length && (
            <div className='flex items-center space-x-4'>
              <MusicalNoteIcon className='h-6 w-6 text-gray-700' />
              <p className='text-lg text-gray-700'>
                Genres:{' '}
                {event.musicGenres.map((genre) => genre.name).join(', ')}
              </p>
            </div>
          )}

          {event.vibes && event.vibes.length && (
            <div className='flex items-center space-x-4'>
              <HeartIcon className='h-6 w-6 text-gray-700' />
              <p className='text-lg text-gray-700'>
                Vibes: {event.vibes.map((vibe) => vibe.name).join(', ')}
              </p>
            </div>
          )}

          {event.agePolicy && (
            <div className='flex items-center space-x-4'>
              <UsersIcon className='h-6 w-6 text-gray-700' />
              <p className='text-lg text-gray-700'>
                Age Policy: {event.agePolicy.name}
              </p>
            </div>
          )}

          {event.dressCode && (
            <div className='flex items-center space-x-4'>
              <BoltIcon className='h-6 w-6 text-gray-700' />
              <p className='text-lg text-gray-700'>
                Dress Code: {event.dressCode.name}
              </p>
            </div>
          )}

          {/* Footer with action buttons */}
          <div className='flex items-center border-t pt-4'>
            <button type='button' className='text-gray-600 hover:text-gray-800'>
              <ShareIcon className='h-6 w-6' />
            </button>
            {event.venue.coordinates && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${event.venue.coordinates.latitude},${event.venue.coordinates.longitude}`}
                target='_blank'
                rel='noreferrer'
                type='button'
                className='text-gray-600 hover:text-gray-800 ml-2'
              >
                <MapPinIcon className='h-6 w-6' />
              </a>
            )}

            <button
              type='button'
              className='text-gray-600 hover:text-gray-800 ml-auto flex flex-row'
            >
              <HeartIcon className='h-5 w-5 mr-1' />
              <span>Add to Favorites</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
