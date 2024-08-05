import router from '@/router';
import { config } from '@vue/test-utils';

config.global.plugins = [router];

export { router };
