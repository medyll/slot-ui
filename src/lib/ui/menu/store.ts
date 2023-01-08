import { writable, get } from 'svelte/store'; 
import type { IMenuProps } from './types.js';


function createStore<T = IMenuProps>(initialData: IMenuProps = {}) {

  const innerStore = writable<IMenuProps>(initialData);
  const { subscribe, set, update } = innerStore;

  return {
    subscribe,
    set,
    update
  };
}

export const createMenuStore = <T = IMenuProps>(initialData?:IMenuProps) => createStore<T>(initialData);
