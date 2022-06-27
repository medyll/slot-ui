import { writable, get } from 'svelte/store';
function createStore() {
    const initialData = { activeData: {}, selectorField: 'id', density: 'default' };
    const innerStore = writable(initialData);
    const { subscribe, set, update } = innerStore;
    return {
        subscribe,
        set,
        update,
        setSelectorField: (selectorField) => update((n) => { return { ...n, selectorField }; }),
        setActiveData: (data) => { update(n => { return { ...n, activeData: data }; }); },
        setActiveItem: (item) => { update(n => { return { ...n, activeItem: item }; }); },
        selector: (field, data) => {
            return get(innerStore).activeData[field] === data[field];
        },
    };
}
// Allow for multiple stores (good for contexts)
export const createListStore = () => createStore();
