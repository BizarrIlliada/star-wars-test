import { useRouter, type LocationQueryRaw, type LocationQueryValue } from 'vue-router';
import { useRoute } from 'vue-router';

type HTTPParamsInputData = { [key: string]: string | number | LocationQueryValue | string[] | number[] | LocationQueryValue[] };

export function useHelpers() {
  const router = useRouter();
  const route = useRoute();

  function getPageFromUrl(url: string | null) {
    if (url === null) return url;
    const urlObj = new URL(url);
    return urlObj.searchParams.get('page');
  }

  function setQueryParams(queryParams: LocationQueryRaw) {
    router.push({ query: { ...route.query, ...queryParams } });
  }

  function getArraysIntersection(array1: any[], array2: any[]) {
    const set2 = new Set(array2);

    return array1.filter((value: any) => set2.has(value));
  }

  function normalizeHTTPParams(params: HTTPParamsInputData): { [key: string]: string } {
    const result: { [key: string]: string } = {};

    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const value = params[key];

        if (value === null) continue;

        if (Array.isArray(value)) {
          result[key] = value.join(',');
        } else {
          result[key] = value.toString();
        }
      }
    }

    return result;
  }

  return {
    getPageFromUrl,
    setQueryParams,
    getArraysIntersection,
    normalizeHTTPParams,
  };
}