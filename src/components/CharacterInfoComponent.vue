<template>
  <MyModal title="Characters graph modal" @onCloseModal="closeModal">
    <CharacterGraphComponent :characterId="+route.params.id" />
  </MyModal>
</template>

<script setup lang="ts">
import CharacterGraphComponent from '@/components/CharacterGraphComponent.vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

function closeModal() {
  router.push({ name: 'characters', query: { ...route.query } });
}
</script>

<style scoped lang="scss">

</style>
