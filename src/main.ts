import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

console.log(import.meta.env.VITE_BASE_URL);

const app = createApp(App);

app
  .use(router)
  .mount('#app');
