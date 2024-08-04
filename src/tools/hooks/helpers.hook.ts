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

  return {
    getPageFromUrl,
    setQueryParams,
  };
}