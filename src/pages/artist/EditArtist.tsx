import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useArtist } from '@/hooks';
import { Input, Textarea, Topbar } from '@/components';
import { ArtistContext, ArtistContextProps } from '@/providers/ArtistContext';
import { IFormValues } from '@/types/IFormValues.interface';
import { PencilIcon } from '@/assets/Icons';

const EditArtist: React.FC = () => {
  const { slug } = useParams();
  const { setArtist } = useContext<ArtistContextProps>(ArtistContext);
  const { data: artist } = useArtist(slug ?? '');
  const { register, handleSubmit } = useForm<IFormValues>();

  useEffect(() => {
    if (artist) {
      setArtist(artist);
    }
  }, [artist, setArtist]);

  const onSubmit = (data: IFormValues) => console.log(data);

  return (
    <>
      <Topbar />
      <div className='pt-10 bg-gradient-to-b from-gray-50 to-white'>
        <form
          className='container mx-auto max-w-5xl p-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className='text-2xl tracking-wide flex flex-row font-avenirBlack'>
            <span>{artist?.name} </span>{' '}
            <PencilIcon color='#000' className='ml-2 mt-1.5 w-4 h-4' />
          </h1>
          <p className='text-sm text-gray-400 mb-8 tracking-wide font-avenirLight'>
            Edit your artist info and artworks here.
          </p>

          <h2 className='text-[16px] mb-3 font-avenirHeavy text-[#36424a] leading-[1.13]'>
            Photos
          </h2>
          <div className='mb-6'>
            <img
              src={artist?.coverUrl}
              alt={`xCeed artist coverUrl ${artist?.name}`}
              className='
              w-3/5 max-h-[21.25rem] h-full bg-gray-300 rounded-lg flex items-center justify-center object-cover object-center
            '
            />
          </div>

          <div className='mb-6'>
            <Textarea
              label='Biography'
              placeholder="What's behind the curtains"
              fieldName='biography'
              register={register}
              isOptional={false}
            />
          </div>

          <div className='mb-6'>
            <Input
              label='Music'
              placeholder='Select up to 3 music genres'
              fieldName='music'
              register={register}
              isOptional={true}
            />
          </div>

          <div className='mb-6'>
            <Input
              label='Label'
              placeholder='Label'
              fieldName='label'
              register={register}
              isOptional={true}
            />
          </div>

          <div className='mb-6'>
            <Input
              label='Website'
              placeholder='Website'
              fieldName='website'
              register={register}
              isOptional={true}
            />
          </div>

          <div className='mb-6'>
            <h2 className='text-[16px] mb-3 font-avenirHeavy text-[#36424a] leading-[1.13]'>
              Social{' '}
              <span className='text-[#b6babd] text-[12px] leading-[24px] font-avenirHeavy'>
                (Optional)
              </span>
            </h2>
            <div className='flex space-x-3'>
              <Input
                label='Spotify'
                placeholder='Spotify'
                fieldName='spotify'
                register={register}
                isOptional={true}
                showLabel={false}
                inputClassName='flex-1'
              />

              <Input
                label='Mixcloud'
                placeholder='Mixcloud'
                fieldName='mixcloud'
                register={register}
                isOptional={true}
                showLabel={false}
                inputClassName='flex-1'
              />

              <Input
                label='Soundcloud'
                placeholder='Soundcloud'
                fieldName='soundcloud'
                register={register}
                isOptional={true}
                showLabel={false}
                inputClassName='flex-1'
              />
            </div>
          </div>

          <hr className='my-10 w-full' />

          <div className='flex justify-end space-x-4'>
            <button className='px-6 py-3 bg-[#f6f7fb] text-[#6e7a83] rounded-lg font-avenirBlack'>
              Discard
            </button>
            <button
              type='submit'
              className='px-6 py-2 bg-[#3b90fd] text-white rounded-lg font-avenirBlack'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditArtist;
