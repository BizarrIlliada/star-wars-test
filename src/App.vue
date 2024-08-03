<template>
  <main class="app-main">
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style scoped lang="scss">
.app-main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 32px 0;
}
</style>
