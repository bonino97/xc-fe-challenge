import { DiskIcon } from '@/assets/Icons';
import { IArtist } from '@/types/IArtist.interface';

interface ArtistBioProps {
  artist: IArtist;
}

const ArtistBio: React.FC<ArtistBioProps> = ({ artist }) => {
  return (
    <>
      <h2 className='text-xl mt-14 font-bold'>Bio</h2>

      <div className='flex gap-14'>
        <div className='basis-3/4 text-justify text-[#36424a]'>
          {artist?.description}
        </div>
        <div className='flex flex-col place-content-between border rounded-lg basis-1/4 p-3 gap-5'>
          <div className='flex flex-col'>
            <DiskIcon className='w-4 h-4' />
            <p className='font-black text-[#36424a]'>{artist?.recordLabel}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistBio;
