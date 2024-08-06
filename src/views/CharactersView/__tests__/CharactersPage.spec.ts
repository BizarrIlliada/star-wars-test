import { describe, it, expect, vi, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import router from '@/router';
import { useRoute, useRouter } from 'vue-router';
import { useSwApi } from '@/tests';

import CharactersPage from '@/views/CharactersView/CharactersPage.vue';
import CharactersTableComponent from '../CharactersTableComponent.vue';
import PaginationComponent from '@/components/shared/PaginationComponent.vue';

vi.mock('vue-router');
vi.mock('@/api/sw.api', () => ({ useSwApi }));

describe('CharactersPage', () => {
  vi.mocked(useRouter).mockReturnValue({
    ...router,
  });

  vi.mocked(useRoute).mockReturnValue({
    fullPath: '/characters?page=1',
    hash: '',
    matched: [],
    meta: {},
    name: 'characters',
    params: {},
    path: '/characters',
    query: { page: '1' },
    redirectedFrom: undefined,
  });

  const wrapper = mount(CharactersPage);

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders table', () => {
    expect(wrapper.findComponent(CharactersTableComponent).exists()).toBe(true);
  });

  it('renders pagination', async () => {
    expect(wrapper.findComponent(PaginationComponent).exists()).toBe(true);
  });

  // TODO: add more functionality tests
});
