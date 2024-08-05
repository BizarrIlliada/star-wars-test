import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';

import { routerMock } from '@/tests';
import CharactersPage from '@/views/CharactersView/CharactersPage.vue';
import CharactersTableComponent from '@/views/CharactersView/CharactersTableComponent.vue';
import PaginationComponent from '@/components/shared/PaginationComponent.vue';


describe('CharactersPage', () => {
  let wrapper: VueWrapper<any>

  beforeEach(async () => {
    wrapper = mount(CharactersPage);
    await routerMock.isReady();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders characters table', () => {
    const charactersTableComponent = wrapper.findComponent(CharactersTableComponent);
    expect(charactersTableComponent.exists()).toBe(true);
  });

  it('renders pagination component', async () => {
    const paginationComponent = wrapper.findComponent(PaginationComponent);
    expect(paginationComponent.exists()).toBe(true);
  });
});
