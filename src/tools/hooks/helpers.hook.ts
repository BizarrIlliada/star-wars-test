import { useRouter, type LocationQueryRaw } from 'vue-router';
import { useRoute } from 'vue-router';

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

  return {
    getPageFromUrl,
    setQueryParams,
    getArraysIntersection,
  };
}