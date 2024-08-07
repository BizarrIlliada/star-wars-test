import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import CharactersTableComponent from '../CharactersTableComponent.vue';
import { useSwApi } from '@/tests';

vi.mock('@/api/sw.api', () => ({ useSwApi }));

describe('CharactersTableComponent', async () => {
  const characters = (await useSwApi().getPeople()).results;

  const wrapper = mount(CharactersTableComponent, { props: { characters } });

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders table with given columns', () => {
    const columns = ['Name', 'Gender', 'Birth year', 'Skin color', 'Hair color', 'Eye color', 'Height', 'Mass'];
    const headerCellsText = wrapper.findAll('th').map((cell => cell.text()));

    expect(wrapper.find('.table').exists()).toBe(true);
    expect(headerCellsText).toEqual(columns);
  });

  it('renders correct character info', () => {
    expect(wrapper.find('td').text()).toContain(characters[0].name);
    expect(wrapper.findAll('td')[3].text()).toContain(characters[0].skin_color);
    expect(wrapper.findAll('td')[7].text()).toContain(characters[0].mass);
  });
});
