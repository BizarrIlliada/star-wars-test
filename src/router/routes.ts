export const RoutesNames = {
  HOME: 'home',
  CHARACTERS: 'characters',
  CHARACTER: 'character',
};

const routes = [
  {
    path: '/',
    name: RoutesNames.HOME,
    redirect: { name: 'characters' },
  },
  {
    path: '/characters',
    name: RoutesNames.CHARACTERS,
    component: () => import('@/views/CharactersView/CharactersPage.vue'),
    children: [
      {
        path: ':id',
        name: RoutesNames.CHARACTER,
        component: () => import('@/views/CharactersView/CharacterInfoComponent.vue'),
      }
    ],
  },
];

export default routes;
