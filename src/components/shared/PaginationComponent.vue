<template>
  <div class="pagination">
    <div class="pagination__info">
      Page {{ currentPage }} of {{ pagesAmount }}
    </div>
    <div class="pagination__icons">
      <i
        class="pi pi-angle-double-left pagination__icon"
        :class="{ 'pagination__icon--disabled': isFirstPage }"
        @click="onPaginationEvent('fullBack')"></i>
      <i
        class="pi pi-angle-left pagination__icon"
        :class="{ 'pagination__icon--disabled': isFirstPage }"
        @click="onPaginationEvent('back')"></i>
      <i
        class="pi pi-angle-right pagination__icon"
        :class="{ 'pagination__icon--disabled': isLastPage }"
        @click="onPaginationEvent('forward')"></i>
      <i
        class="pi pi-angle-double-right pagination__icon"
        :class="{ 'pagination__icon--disabled': isLastPage }"
        @click="onPaginationEvent('fullForward')"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHelpers } from '@/tools/hooks/helpers.hook';
import type { IServerPagination } from '@/types';

const emits = defineEmits(['onPaginationEvent']);
interface Props {
  paginationData: IServerPagination;
}
const props = defineProps<Props>();

const { getPageFromUrl } = useHelpers();

// I need to get data below from server
const currentPage = computed(() => {
  const prevPage = getPageFromUrl(props.paginationData.previous);
  const nextPage = getPageFromUrl(props.paginationData.next);

  if (prevPage) return +prevPage + 1;
  if (nextPage) return +nextPage - 1;

  return 1;
});
const pagesAmount = computed(() => Math.ceil(props.paginationData.count / 10));
const isFirstPage = computed(() => !props.paginationData.previous);
const isLastPage = computed(() => !props.paginationData.next);

function onPaginationEvent(paginationEvent: 'fullBack' | 'back' | 'forward' | 'fullForward') {
  let newPageNumber = 1;

  switch (paginationEvent) {
    case 'fullBack':
      break;
    case 'back':
      if (currentPage.value > 1) newPageNumber = currentPage.value - 1;
      break;
    case 'forward':
      if (currentPage.value < pagesAmount.value) newPageNumber = currentPage.value + 1;
      break;
    case 'fullForward':
      newPageNumber = pagesAmount.value;
      break;

    default:
      break;
  }

  emits('onPaginationEvent', newPageNumber);
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;

  &__icons {
    display: flex;
    gap: 4px;
  }

  &__icon {
    padding: 5px;
    cursor: pointer;
    transition: transform .3s;

    &:hover {
      transform: scale(1.2);
    }

    &--disabled {
      pointer-events: none;
      opacity: .6;
    }
  }
}
</style>

