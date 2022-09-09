import { writable, get } from 'svelte/store'; 
import type { MenuProps } from './types';


function createStore<T = MenuProps>() {

  const initialData: MenuProps = { density: 'default' };

  const innerStore = writable<MenuProps>(initialData);
  const { subscribe, set, update } = innerStore;

  return {
    subscribe,
    set,
    update
  };
}

export const createMenuStore = <T = MenuProps>() => createStore<T>();
