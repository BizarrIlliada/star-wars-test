<template>
  <div class="table-wrapper">
    <table class="characters-table table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth year</th>
          <th>Skin color</th>
          <th>Hair color</th>
          <th>Eye color</th>
          <th>Height</th>
          <th>Mass</th>
        </tr>
      </thead>
      <tbody v-if="characters.length">
        <tr
          class="characters-table__row"
          v-for="character in characters"
          :key="character.id"
          @click="navigateToCharacterPage(character.id)">
          <td>{{ character.name }}</td>
          <td>{{ character.gender }}</td>
          <td>{{ character.birth_year }}</td>
          <td>{{ character.skin_color }}</td>
          <td>{{ character.hair_color }}</td>
          <td>{{ character.eye_color }}</td>
          <td>{{ character.height }}</td>
          <td>{{ character.mass }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { RoutesNames } from '@/router';
import type { IPerson } from '@/types';

interface Props {
  characters: IPerson[];
}
defineProps<Props>();

const router = useRouter();
const route = useRoute();

function navigateToCharacterPage(characterId: number) {
  router.push({ name: RoutesNames.CHARACTER, params: { id: characterId }, query: { ...route.query } });
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/shared/table.scss';

.characters-table {
  &__row {
    cursor: pointer;
  }

  td {
    text-transform: capitalize;
  }

  &__placeholder {
    height: 100%;
    color: $surface-400;
    font-size: 14px;
  }
}
</style>
