import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'characters' },
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('@/views/CharactersView/CharactersPage.vue'),
      children: [
        {
          path: ':id',
          name: 'character',
          component: () => import('@/views/CharactersView/CharacterInfoComponent.vue'),
        }
      ],
    },
  ],
});

export default router;
