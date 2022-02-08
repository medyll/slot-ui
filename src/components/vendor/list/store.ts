import {writable, get} from 'svelte/store';

type ListStoreType = {
  activeData: Record<string, any>;
  selectorField: string;
}

function createStore() {
  
  const initialData = {activeData: {}, selectorField: 'id'};
  
  const innerStore               = writable<ListStoreType>(initialData);
  const {subscribe, set, update} = innerStore;
  
  return {
    subscribe,
    set,
    update,
    setSelectorField:(selectorField:string)=> update((n)=> {return {...n,selectorField}}),
    setActiveData: (data: any) => {update(n => {return {...n, activeData: data};});},
    selector     : (field: string, data: Record<string, any>) => {
      return get(innerStore).activeData[field] === data[field];
    },
  };
}

export const listStore = createStore();
