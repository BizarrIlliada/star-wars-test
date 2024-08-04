
<template>
  <div class="characters-page">
    <CharactersTableComponent :characters="people" />

    <PaginationComponent
      v-if="paginationData"
      :paginationData="paginationData"
      class="characters-page__pagination"
      @onPaginationEvent="changePage" />

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import CharactersTableComponent from '@/components/CharactersTableComponent.vue';
import PaginationComponent from '@/components/shared/PaginationComponent.vue';

import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useSwApi } from '@/api/sw.api';
import { useHelpers } from '@/tools/hooks/helpers.hook';
import type { IPerson, IServerPagination } from '@/types';

const route = useRoute();
const swApi = useSwApi();
const { setQueryParams } = useHelpers();

const people = ref<IPerson[]>([]);
const paginationData = ref<IServerPagination | null>(null);

onMounted(async () => {
  await loadPeopleFromServer();
});

async function loadPeopleFromServer() {
  const { count, next, previous, results } = (await swApi.getPeople({ page: route.query.page ? +route.query.page : 1 }));
  people.value = results;
  paginationData.value = { count, next, previous };
}

function changePage(newPage: number) {
  setQueryParams({ page: newPage });
}

watch(() => route.query.page, async () => {
  await loadPeopleFromServer();
});
</script>

<style scoped lang="scss">
.characters-page {
  &__pagination {
    color: $surface-50;
    background-color: $primary-200;
    margin-bottom: 30px;
  
    @include tablet {
      background-color: $primary-900;
    }
  }
}
</style>
