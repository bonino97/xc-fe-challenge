import { EventCard } from '@/components';
import { IEvent } from '@/types/IEvent.interface';
import { InfiniteData } from '@tanstack/react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';

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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: (current: number) => {
      if (hasNextPage && current + 1 === events?.pages.flat().length) {
        fetchNextPage();
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      <div className='flex flex-row justify-between items-center mt-10'>
        <h2 className='text-xl pt-4 font-avenirBlack'>Past events</h2>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <Slider {...settings}>
          {events?.pages.map((page) =>
            page.map((event) => {
              return <EventCard event={event} key={event.id} />;
            })
          )}
        </Slider>
      </div>
    </>
  );
};

export default PastEvents;
