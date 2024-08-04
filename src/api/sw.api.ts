import axiosInstance from './index';
import type { IPeopleHTTPResponse } from '@/types';

export function useSwApi() {
  function getPeople(params: { page: number }): Promise<IPeopleHTTPResponse> {
    return axiosInstance.get<any, IPeopleHTTPResponse>('/people', { params })
      // .then(res => res)
      .catch(err => Promise.reject(err));
  }

  function getPerson(id: number) {
    return axiosInstance.get('/people' + id)
      // .then(res => res)
      .catch(err => Promise.reject(err));
  }

  return {
    getPeople,
    getPerson,
  }
}
