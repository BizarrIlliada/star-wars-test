import ResizeObserver from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserver;

import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { useRoute } from 'vue-router';

import CharacterInfoComponent from '../CharacterInfoComponent.vue';
import CharacterGraphComponent from '../CharacterGraphComponent.vue';

vi.mock('vue-router');

describe('CharacterInfoComponent', async () => {
  vi.mocked(useRoute).mockReturnValue({
    fullPath: '/characters/10?page=1',
    hash: '',
    matched: [],
    meta: {},
    name: 'character',
    params: {},
    path: '/characters/10',
    query: { page: '1' },
    redirectedFrom: undefined,
  });

  const wrapper = mount(CharacterInfoComponent);

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders graph component', () => {
    expect(wrapper.findComponent(CharacterGraphComponent).exists()).toBe(true);
  });

  // TODO: add close modal test
});
