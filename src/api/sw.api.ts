import axiosInstance from './index';
import type {
  IPeopleHTTPResponse,
  IPerson,
  IFilmsHTTPResponse,
  IFilm,
  IStarship,
  IStarshipsHTTPResponse,
} from '@/types';

export function useSwApi() {
  function getPeople(params?: { [key: string]: string }): Promise<IPeopleHTTPResponse> {
    return axiosInstance.get<any, IPeopleHTTPResponse>('/people', { params })
      .catch(err => Promise.reject(err));
  }

  function getPerson(id: number): Promise<IPerson> {
    return axiosInstance.get<any, IPerson>(`/people/${id}`)
      .catch(err => Promise.reject(err));
  }

  function getFilms(params?: { [key: string]: string }): Promise<IFilmsHTTPResponse> {
    return axiosInstance.get<any, IFilmsHTTPResponse>('/films', { params })
      .catch(err => Promise.reject(err));
  }

  function getFilmById(id: number): Promise<IFilm> {
    return axiosInstance.get<any, IFilm>(`/films/${id}`)
      .catch(err => Promise.reject(err));
  }

  function getStarships(params?: { [key: string]: string }): Promise<IStarshipsHTTPResponse> {
    return axiosInstance.get<any, IStarshipsHTTPResponse>('/starships', { params })
      .catch(err => Promise.reject(err));
  }

  async function getStarshipById(id: number): Promise<IStarship> {
    return axiosInstance.get<any, IStarship>(`/starships/${id}`)
      .catch(err => Promise.reject(err));
  }

  return {
    getPeople,
    getPerson,
    getFilms,
    getFilmById,
    getStarships,
    getStarshipById,
  }
}
