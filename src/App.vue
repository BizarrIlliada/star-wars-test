<template>
  <header class="app-header">
    <h1>
      Vue3 + TypeScript for STARNAVI
    </h1>
  </header>
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
.app-header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $surface-50;
  background-color: $primary-200;
  height: 80px;
}

.app-main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 32px 0;
}
</style>
