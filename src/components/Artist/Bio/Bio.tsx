import { useState } from 'react';
import { ArrowIcon, DiskIcon } from '@/assets/Icons';
import { IArtist } from '@/types/IArtist.interface';

interface ArtistBioProps {
  artist: IArtist;
}

const ArtistBio: React.FC<ArtistBioProps> = ({ artist }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const description = artist?.description;
  const shouldShowButton = description && description.length > 300;
  const textToShow =
    isExpanded || !shouldShowButton
      ? description
      : description.slice(0, 300) + '...';

  return (
    <>
      <h2 className='text-xl mt-14 font-bold'>Bio</h2>

      <div className='flex flex-col lg:flex-row gap-14'>
        <div className='flex flex-col basis-3/4 text-justify text-[#36424a] tracking-[0.03rem] font-avenirBook'>
          <span>{textToShow}</span>
          <div className='pt-2'>
            {shouldShowButton && (
              <button onClick={toggleExpand}>
                {isExpanded ? (
                  <ArrowIcon className='rotate-180' />
                ) : (
                  <ArrowIcon />
                )}
              </button>
            )}
          </div>
        </div>
        <div className='flex flex-col place-content-between border rounded-lg basis-1/4 p-3 gap-5 bg-white max-h-40'>
          <div className='flex flex-col'>
            <DiskIcon className='w-4 h-4' />
            <p className='font-bold text-[#36424a]'>{artist?.recordLabel}</p>
          </div>
          <p className='mt-auto text-sm text-gray-400'>Labels</p>
        </div>
      </div>
    </>
  );
};

export default ArtistBio;
