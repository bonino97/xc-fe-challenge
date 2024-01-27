import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IEvent } from '@/types/IEvent.interface';
import { API_URL } from '@/config/config';

function useGetPastEvents() {
  return useInfiniteQuery<IEvent[]>(
    ['past-events'],
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get(
        `${API_URL}/events?orderBy=date&sort=DESC&offset=${pageParam}&artists=tini&endTime=1686560994&limit=2`
      );
      return data.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 2 ? allPages.length + 1 : undefined;
      },
    }
  );
}

export default useGetPastEvents;
