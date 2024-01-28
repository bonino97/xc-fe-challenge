import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IArtist } from '@/types/IArtist.interface';
import { API_URL } from '@/config/config';

function useArtist(slug: string) {
  return useQuery<IArtist>({
    queryKey: ['artist'],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/artists/${slug}`);
      return data.data;
    },
  });
}

export default useArtist;
