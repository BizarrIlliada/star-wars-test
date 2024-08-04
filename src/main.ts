import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import globalComponents from './components/UI';

const app = createApp(App);

globalComponents.forEach(component => {
  app.component(component.name as string, component);
});

app
  .use(router)
  .mount('#app');
