import { writable, get } from 'svelte/store';
function createStore() {
    const initialData = { density: 'default' };
    const innerStore = writable(initialData);
    const { subscribe, set, update } = innerStore;
    return {
        subscribe,
        set,
        update
    };
}
export const createMenuStore = () => createStore();
