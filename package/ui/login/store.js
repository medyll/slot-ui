// store.js
import { writable } from 'svelte/store';
import { browser } from '$app/env';
let storedUserStore;
if (browser) {
    storedUserStore = localStorage.getItem('userStore');
}
export const userStore = writable({
    logged: true,
    ...JSON.parse(storedUserStore ?? '{}')
});
if (browser) {
    userStore.subscribe((value) => {
        localStorage.setItem('userStore', JSON.stringify(value));
    });
}
