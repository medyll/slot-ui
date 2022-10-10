import { writable, get } from 'svelte/store'; 
import type { MenuProps } from './types.js';


function createStore<T = MenuProps>(initialData: MenuProps = {}) { 

  const innerStore = writable<MenuProps>(initialData);
  const { subscribe, set, update } = innerStore;

  return {
    subscribe,
    set,
    update
  };
}

export const createMenuStore = <T = MenuProps>(initialData?:MenuProps) => createStore<T>(initialData);
