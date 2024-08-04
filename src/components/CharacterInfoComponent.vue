<template>
  <div class="character-info">
    {{ route.params.id }}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped lang="scss">
.character-info {
  background-color: $primary-100;
}
</style>
