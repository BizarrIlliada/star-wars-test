import type { IPeopleHTTPResponse } from '@/types';
import axiosInstance from './index';

export function useSwApi() {
  function getPeople(params: { page: number }): Promise<IPeopleHTTPResponse> {
    return axiosInstance.get<any, IPeopleHTTPResponse>('/people', { params })
      .then(res => res)
      .catch(err => Promise.reject(err));
  }

  return {
    getPeople,
  }
}
