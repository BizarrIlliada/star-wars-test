<template>
  <div ref="flowContainer" class="graph">
    <VueFlow
      :minZoom="0.5"
      :maxZoom="2"
      :nodes="nodes"
      :edges="edges">
    </VueFlow>
  </div>
</template>
<script setup lang="ts">
import { useSwApi } from '@/api/sw.api';
import { useHelpers } from '@/tools/hooks/helpers.hook';
import { onMounted, ref, watch } from 'vue';
import { VueFlow } from '@vue-flow/core';
import type { Edge, Node } from '@vue-flow/core';
import type { IFilm, IPerson, IStarship } from '@/types';

const props = defineProps<{ characterId: number }>();

const swApi = useSwApi();
const { getUniqueValArraysIntersection, normalizeHTTPParams } = useHelpers();

const character = ref<IPerson | null>(null);
const charactersFilms = ref<IFilm[] | null>(null);

const flowContainer = ref<HTMLElement | null>(null);
const nodes = ref<Node[]>([]);
const edges = ref<Edge[]>([]);

onMounted(async () => {
  await setGraphValues();
});

function resetNodes() {
  nodes.value.length = 0;
  edges.value.length = 0;
}

function calculateOutputNodePosition(
  index: number,
  queueLength: number,
  sourcePosition: { x: number, y: number },
  distance: number,
) {
  const angleStep = (Math.PI * 2) / queueLength;
  const angle = (Math.PI / 2) + index * angleStep;
  const x = sourcePosition.x + distance * Math.cos(angle);
  const y = sourcePosition.y + distance * Math.sin(angle);

  return { x, y };
}

async function setGraphValues() {
  resetNodes();
  // getting character and setting his node
  await getCharacter();
  const flowContainerRect = flowContainer.value?.getBoundingClientRect();
  const position = {
    x: flowContainerRect ? flowContainerRect?.width / 2 - 75 : 0,
    y: flowContainerRect ? flowContainerRect?.height / 2 - 18 : 0,
  }

  const characterNode = {
    id:  character.value!.name + character.value!.id,
    position,
    label: character.value!.name,
    type: 'output',
  };
  nodes.value.push(characterNode);

  // getting movies and setting their nodes
  await getCharactersFilms();
  charactersFilms.value?.forEach(async (film, index) => {
    const position = calculateOutputNodePosition(index, charactersFilms.value!.length, characterNode.position, 250);

    nodes.value.push({
      id: film.title + film.id,
      position,
      label: film.title,
    });

    edges.value.push({
      id: `character${character.value!.id}->film${film.id}`,
      source: character.value!.name + character.value!.id,
      target: film.title + film.id,
      type: 'smoothstep',
      style: {
          'stroke': 'black',
        },
    });

    // getting movies starships and setting their nodes
    const filmStarships = await getCharactersStarshipsFromMovies(film.starships);
    filmStarships.forEach((starship, index, arr) => {
      const position = calculateOutputNodePosition(index, arr.length, characterNode.position, 400);

      nodes.value.push({
        id: starship.name + starship.id,
        position,
        label: starship.name,
        type: 'output',
      });

      edges.value.push({
        id: `film${film.id}->starship${starship.id}`,
        source: film.title + film.id,
        target: starship.name + starship.id,
        style: {
          'stroke': 'black',
          'stroke-dasharray': '5, 5',
        },
      });
    });
  });
}

async function getCharacter() {
  character.value = await swApi.getPerson(props.characterId);
}

async function getCharactersFilms() {
  charactersFilms.value = (await swApi.getFilms(normalizeHTTPParams({ id__in: character.value!.films }))).results;
}

async function getCharactersStarshipsFromMovies(moviesStarshipIds: number[]): Promise<IStarship[]> {
  const starshipsIds = getUniqueValArraysIntersection(moviesStarshipIds, character.value!.starships);
  if (starshipsIds.length) {
    return (await swApi.getStarships(normalizeHTTPParams({ id__in: starshipsIds }))).results;
  }

  return [];
}

watch(() => props.characterId, async () => {
  await setGraphValues();
});
</script>

<style scoped lang="scss">
.graph {
  height: 60vh;
  width: 70vw;
  background-color: $primary-200;
  border: 1px solid $surface-200;
  border-radius: 16px;
}
</style>
