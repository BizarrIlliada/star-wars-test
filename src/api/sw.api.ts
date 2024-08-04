import axiosInstance from './index';
import type { IFilm, IPeopleHTTPResponse, IPerson, IStarship } from '@/types';
import { useHelpers } from '@/tools/hooks/helpers.hook';

export function useSwApi() {
  const { delay } = useHelpers();

  function getPeople(params: { page: number }): Promise<IPeopleHTTPResponse> {
    return axiosInstance.get<any, IPeopleHTTPResponse>('/people', { params })
      .catch(err => Promise.reject(err));
  }

  function getPerson(id: number): Promise<IPerson> {
    return axiosInstance.get<any, IPerson>(`/people/${id}`)
      .catch(err => Promise.reject(err));
  }

  function getFilmById(id: number): Promise<IFilm> {
    return axiosInstance.get<any, IFilm>(`/films/${id}`)
      .catch(err => Promise.reject(err));
  }

  async function getFilmsByIds(ids: number[]): Promise<IFilm[]> {
    // TODO: 429 (Too Many Requests)
    // const promises = ids.map(id => getFilmById(id));
    // return Promise.all(promises);

    const promises: IFilm[] = [];

    for (const id of ids) {
      const film = await getFilmById(id);
      promises.push(film);
      await delay(50);
    }

    return Promise.all(promises);
  }

  async function getStarshipById(id: number): Promise<IStarship> {
    return axiosInstance.get<any, IStarship>(`/starships/${id}`)
      .catch(err => Promise.reject(err));
  }

  async function getStarshipsByIds(ids: number[]): Promise<IStarship[]> {
    // TODO: 429 (Too Many Requests)
    // const promises = ids.map(id => getStarshipById(id));
    // return Promise.all(promises);

    const promises: IStarship[] = [];

    for (const id of ids) {
      const film = await getStarshipById(id);
      promises.push(film);
      await delay(50);
    }

    return Promise.all(promises);
  }

  return {
    getPeople,
    getPerson,
    getFilmById,
    getFilmsByIds,
    getStarshipById,
    getStarshipsByIds,
  }
}
