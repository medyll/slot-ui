// store.js
import {writable} from 'svelte/store';
import {browser} from '$app/env';

type UserStoreType = {
  logged: boolean
}

let storedUserStore;
if (browser) {
  storedUserStore = localStorage.getItem('userStore');
}

export const userStore = writable<UserStoreType>({
  logged: false,
  ...JSON.parse(storedUserStore ?? '{}')
});

if (browser) {
  userStore.subscribe((value) => {
    localStorage.setItem('userStore', JSON.stringify(value));
  });
}
