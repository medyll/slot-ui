import {writable, get} from 'svelte/store';
import type {ElementProps} from './types';

type ListStoreType = {
  activeData: Record<string, any>;
  selectorField: string;
  density: ElementProps['density']
}

function createStore() {
  
  const initialData: ListStoreType = {activeData: {}, selectorField: 'id', density: 'default'};
  
  const innerStore               = writable<ListStoreType>(initialData);
  const {subscribe, set, update} = innerStore;
  
  return {
    subscribe,
    set,
    update,
    setSelectorField: (selectorField: string) => update((n) => {return {...n, selectorField};}),
    setActiveData   : (data: any) => {update(n => {return {...n, activeData: data};});},
    selector        : (field: string, data: Record<string, any>) => {
      return get(innerStore).activeData[field] === data[field];
    },
  };
}

// Allow for multiple stores (good for contexts)
export const createListStore = () => createStore();