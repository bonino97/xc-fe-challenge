import { useState } from 'react';
import {
  PlayIcon,
  SpotifyIcon,
  SoundCloudIcon,
  WebIcon,
  PencilIcon,
} from '@/assets/Icons';
import { IArtist } from '@/types/IArtist.interface';

interface ArtistSocialProps {
  artist: IArtist;
}

const ArtistSocial: React.FC<ArtistSocialProps> = ({ artist }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  console.log(artist);

  return (
    <div className='bg-[#1a1d1f] lg:bg-transparent lg:p-0 p-4 w-full'>
      <div className='flex'>
        <div
          style={{
            background:
              'linear-gradient(to bottom, #cddffd 0%, #eabef4 50%, #f7dcc7 100%)',
          }}
          className='w-[4.5rem] h-[4.5rem] rounded-[3.125rem] flex items-center justify-center'
        >
          <PlayIcon />
        </div>
        <div className='flex flex-col justify-center ml-[1.9375rem]'>
          <div className='flex flex-row'>
            <p className='text-[13px] leading-[1.85] text-white font-avenirBlack font-black tracking-[0.0813rem] uppercase'>
              Artist
            </p>
            <p className='font-avenirBlack font-black text-[13px] tracking-[0.0813rem] text-[#9dc1cb] leading-[1.23] ml-2 hidden md:block'>
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
          <p className='text-[32px] leading-[1.13] text-white font-avenirBlack font-black'>
            {artist?.name}
          </p>
        </div>
        <div className='flex flex-col m-auto space-y-1.5'>
          <WebIcon />
          <SpotifyIcon />
          <SoundCloudIcon />
        </div>
      </div>
      <div className='flex flex-row pt-8'>
        <button
          className={`${
            isFollowing
              ? 'bg-[#aed8e5] border border-white text-white'
              : 'bg-white text-black'
          }  rounded-full px-5 py-2.5 text-sm font-bold`}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {isFollowing ? '♥️ Following' : 'Follow'}
        </button>
        <button className='text-white rounded-full border border-white px-5 py-2.5 text-sm font-semibold ml-4 flex flex-row'>
          <PencilIcon className='mr-2 mt-1' /> <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

export default ArtistSocial;