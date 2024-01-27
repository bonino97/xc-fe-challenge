import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IEvent } from '@/types/IEvent.interface';
import { API_URL } from '@/config/config';

function useGetEvents() {
  return useInfiniteQuery<IEvent[]>(
    ['events'],
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get(
        `${API_URL}/events?orderBy=date&sort=ASC&offset=${pageParam}&artists=tini&startTime=1686560994&limit=5`
      );
      return data.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 5 ? allPages.length * 5 : undefined;
      },
    }
  );
}

export default useGetEvents;
