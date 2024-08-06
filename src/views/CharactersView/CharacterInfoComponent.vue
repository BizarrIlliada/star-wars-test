<template>
  <MyModal title="Characters graph modal" @onCloseModal="closeModal">
    <CharacterGraphComponent :characterId="+route.params.id" />
  </MyModal>
</template>

<script setup lang="ts">
import CharacterGraphComponent from './CharacterGraphComponent.vue';
import { useRoute, useRouter } from 'vue-router';
import { RoutesNames } from '@/router';

const route = useRoute();
const router = useRouter();

function closeModal() {
  router.push({ name: RoutesNames.CHARACTERS, query: { ...route.query } });
}
</script>

<style scoped lang="scss">

</style>
