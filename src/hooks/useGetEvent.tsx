import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IEvent } from '@/types/IEvent.interface';
import { API_URL } from '@/config/config';

function useGetEvent(eventId: string) {
  return useQuery<IEvent>(['event', eventId], async () => {
    const { data } = await axios.get(`${API_URL}/events/${eventId}`);
    return data.data;
  });
}

export default useGetEvent;
