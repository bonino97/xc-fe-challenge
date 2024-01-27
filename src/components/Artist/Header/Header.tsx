import { PlayIcon, SpotifyIcon, SoundCloudIcon, WebIcon } from '@/assets/Icons';
import { IArtist } from '@/types/IArtist.interface';

interface ArtistHeaderProps {
  artist: IArtist;
}

const ArtistHeader: React.FC<ArtistHeaderProps> = ({ artist }) => {
  console.log(artist);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${artist?.coverUrl}?w=28&blur=auto&fm=auto&q=auto`,
        }}
        className={`bg-[#1a1d1f] h-[35.75rem] relative bg-cover bg-no-repeat bg-center overflow-hidden`}
      >
        <div className='w-4/5 max-w-[62.9375rem] h-[32.75rem] object-cover absolute top-12 inset-x-0 my-0 mx-auto z-10 overflow-hidden rounded-xl'>
          <img
            className='absolute bottom-1 lg:w-[30rem] lg:h-[30rem] object-cover object-center rounded-xl'
            src={`${artist?.coverUrl}?w=920&fm=auto`}
          />
        </div>

        <div className='flex ml-[8.4375rem] mt-[1.875rem]'>
          <div
            style={{
              backgroundImage:
                'linear-gradient(225deg, #32c5ff, #b620e0 49%, #f7b500)',
            }}
            className='w-[4.5rem] h-[4.5rem] rounded-[3.125rem] opacity-80 flex items-center justify-center'
          >
            <PlayIcon />
          </div>
          <div className='flex flex-col justify-center ml-[1.9375rem]'>
            <div className='flex flex-row'>
              <p className='text-[13px] leading-[1.85] text-[#9dc1cb] font-avenirBlack font-black tracking-[0.0813rem] uppercase'>
                Artist
              </p>
              <p className='font-avenirBlack font-black text-[13px] tracking-[0.0813rem] text-[#9dc1cb] leading-[1.23] ml-2'>
                {artist &&
                  artist?.musicGenres.map((genre, index) => (
                    <span key={index}>
                      <span>{genre.name.toUpperCase()}</span>
                      <span className='align-super'>{`${
                        index < artist.musicGenres.length - 1 ? ' . ' : ''
                      }`}</span>
                    </span>
                  ))}
              </p>
            </div>
            <p className='text-[32px] leading-[1.13] text-[#36424a] font-avenirBlack font-black'>
              {artist?.name}
            </p>
          </div>
          <div className='flex flex-col m-auto'>
            <WebIcon />
            <SpotifyIcon />
            <SoundCloudIcon />
          </div>
        </div>

        <div className='absolute h-9 bottom-0 bg-white rounded-tl-[2.25rem] rounded-tr-[2.25rem] w-full'></div>
      </div>
    </>
  );
};

export default ArtistHeader;
