/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useArtist } from '@/hooks';
import { Input, MultiSelect, Textarea, Topbar } from '@/components';
import { ArtistContext, ArtistContextProps } from '@/providers/ArtistContext';
import { IFormValues } from '@/types/IFormValues.interface';
import { PencilIcon } from '@/assets/Icons';
import { IArtist } from '@/types/IArtist.interface';

const EditArtist: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { setArtist } = useContext<ArtistContextProps>(ArtistContext);
  const { data: artist } = useArtist(slug ?? '');
  const { register, handleSubmit, setValue, control } = useForm<IFormValues>();

  useEffect(() => {
    patchValues();
  }, [artist, setArtist, setValue]);

  const handleDiscardClick = () => {
    navigate('/');
  };

  const onSubmit = (data: IFormValues) => {
    if (!artist) return;
    const prevArtist = artist;
    const newArtist: IArtist = {
      ...prevArtist,
      description: data.description || prevArtist.description,
      musicGenres:
        data.musicGenres.length > 0 ? data.musicGenres : prevArtist.musicGenres,
      recordLabel: data.recordLabel || prevArtist.recordLabel,
      website: data.website || prevArtist.website,
      spotify: data.spotify || prevArtist.spotify,
      mixcloud: data.mixcloud || prevArtist.mixcloud,
      soundcloud: data.soundcloud || prevArtist.soundcloud,
    };
    setArtist(newArtist);
    navigate(`/`);
  };

  const handleImageChange = () => {
    //TODO: Add image providers
  };

  const patchValues = () => {
    if (artist) {
      setArtist(artist);
      setValue('description', artist?.description || '');
      setValue('musicGenres', artist?.musicGenres || []);
      setValue('recordLabel', artist?.recordLabel || '');
    }
  };

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

          <div className='relative mb-6 inline-block max-w-[36rem] w-full'>
            <img
              src={artist?.coverUrl}
              alt={`xCeed artist coverUrl ${artist?.name}`}
              className='w-full max-h-[21.25rem] h-full bg-gray-300 rounded-lg flex items-center justify-center object-cover object-center'
            />
            <button
              className='absolute bottom-0 right-0 bg-[#94c7d4] rounded-full p-4 m-2'
              onClick={handleImageChange}
            >
              <PencilIcon className='h-6 w-6 text-white' fill='white' />
            </button>
          </div>

          <div className='mb-6'>
            <Textarea
              label='Biography'
              placeholder="What's behind the curtains"
              fieldName='description'
              register={register}
              isOptional={false}
            />
          </div>

          <div className='mb-6'>
            <MultiSelect
              label='Music'
              placeholder='Select up to 3 music genres'
              fieldName='musicGenres'
              register={register}
              isOptional={true}
              control={control}
            />
          </div>

          <div className='mb-6'>
            <Input
              label='Label'
              placeholder='Select or add labels'
              fieldName='recordLabel'
              register={register}
              isOptional={true}
            />
          </div>

          <div className='mb-6'>
            <Input
              label='Website'
              placeholder='Insert URL here'
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
            <div className='flex flex-col w-full md:flex-row'>
              <Input
                label='Spotify'
                placeholder=''
                fieldName='spotify'
                register={register}
                isOptional={false}
                className='mr-3'
                inputClassName='flex-1'
                labelClassName='font-avenirBook text-[14px] text-[#6e7a83] leading-[24px] mb-1'
              />

              <Input
                label='Mixcloud'
                placeholder=''
                fieldName='mixcloud'
                register={register}
                showLabel={true}
                className='mr-3'
                inputClassName='flex-1'
                labelClassName='font-avenirBook text-[14px] text-[#6e7a83] leading-[24px] mb-1'
              />

              <Input
                label='Soundcloud'
                placeholder=''
                fieldName='soundcloud'
                register={register}
                isOptional={false}
                showLabel={true}
                inputClassName='flex-1'
                labelClassName='font-avenirBook text-[14px] text-[#6e7a83] leading-[24px] mb-1'
              />
            </div>
          </div>

          <hr className='my-10 w-full' />

          <div className='flex justify-end space-x-4'>
            <button
              className='px-6 py-3 bg-[#f6f7fb] text-[#6e7a83] rounded-lg font-avenirBlack'
              type='button'
              onClick={handleDiscardClick}
            >
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
