import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { useSwApi } from '@/tests';

import CharacterGraphComponent from '../CharacterGraphComponent.vue';

vi.mock('@/api/sw.api', () => ({ useSwApi }));

describe('CharacterGraphComponent', () => {
  const wrapper = shallowMount(CharacterGraphComponent, { props: { characterId: 10 } });

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders graph container', () => {
    expect(wrapper.find('.graph').exists()).toBe(true);
  });

  // it('fetches character data and sets graph values', async () => {

  // });

  // TODO: learn unit testing better and add more functionality tests
});
