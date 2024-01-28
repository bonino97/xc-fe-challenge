import { IArtist } from '@/types/IArtist.interface';
import { ArtistSocial } from '@/components';

interface ArtistHeaderProps {
  artist: IArtist;
}

const ArtistHeader: React.FC<ArtistHeaderProps> = ({ artist }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${artist?.coverUrl}?w=28&blur=auto&fm=auto&q=auto`,
        }}
        className={`bg-[#1a1d1f] h-[35.75rem] relative bg-cover bg-no-repeat bg-center overflow-hidden`}
      >
        <div className='lg:w-4/5 max-w-[70rem] h-[32.75rem] object-cover absolute top-12 inset-x-0 my-0 mx-auto z-10 overflow-hidden rounded-xl'>
          <img
            className='absolute bottom-1 lg:w-[30rem] lg:h-[30rem] object-cover object-center rounded-xl'
            src={`${artist?.coverUrl}?w=920&fm=auto`}
          />

          <div className='lg:absolute fixed lg:bottom-24 bottom-0 lg:right-1 w-full lg:max-w-[30rem] lg:bg-transparent rounded-xl lg:p-8'>
            <ArtistSocial artist={artist} />
          </div>
        </div>

        <div className='absolute h-9 bottom-0 bg-white rounded-tl-[2.25rem] rounded-tr-[2.25rem] w-full'></div>
      </div>
    </>
  );
};

export default ArtistHeader;
