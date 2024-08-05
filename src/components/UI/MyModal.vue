<template>
  <div @click.self="closeModal" class="modal-backdrop">
    <div class="modal">
      <header class="modal__header">
        <h3 class="modal__title">
          {{ title }}
        </h3>
        <i class="pi pi-times modal__close-icon" @click="closeModal"></i>
      </header>
      <main class="modal__main">

        <slot></slot>
      </main>
      <footer v-if="$slots.footer" class="modal__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MyModal',
});

defineSlots()

withDefaults(defineProps<{ title?: string }>(), {
  title: '',
});

const emits = defineEmits(['onCloseModal']);

function closeModal() {
  emits('onCloseModal');
}
</script>

<style scoped lang="scss">
.modal-backdrop {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #0002;
}

.modal {
  border: 1px solid $surface-300;
  border-radius: 16px;
  background-color: $surface-50;
  min-width: 320px;
  max-width: 80vw;
  max-height: 80vh;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid $surface-200;
  }

  &__title {
    font-size: 22px;
    font-weight: 400;
  }

  &__close-icon {
    color: $surface-500;
    padding: 5px;
    cursor: pointer;
  }

  &__main {
    padding: 12px 16px;
  }

  &__footer {
    padding: 12px 16px;
    border-top: 1px solid $surface-200;
  }
}
</style>
