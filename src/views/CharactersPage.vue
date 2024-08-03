
<template>
  <div class="person" v-for="person in people" :key="person.id">
  {{ person.name }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useSwApi } from '@/api/sw.api';
import type { IPerson } from '@/types';

const swApi = useSwApi();

const people = ref<IPerson[]>([]);

onMounted(async () => {
  people.value = (await swApi.getPeople({ page: 1 })).results;

  console.log(people.value);
});
</script>
