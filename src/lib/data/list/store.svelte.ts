import { writable, get } from 'svelte/store';
import type { ElementProps, Data } from '$lib/types/index.js';
import type { LisItemProps } from './types.js';

type ListStoreType = {
	activeData: Record<string, any>;
	activeItem: Record<string, any>;
	selectorField: string;
	density: ElementProps['density'];
};

const initialData: ListStoreType = {
	activeItem: {},
	activeData: {},
	selectorField: 'id',
	density: 'default'
};
export let listState: ListStoreType = $state(initialData as ListStoreType);

function createStore<T = ListStoreType>() {
	const initialData: ListStoreType = {
		activeItem: {},
		activeData: {},
		selectorField: 'id',
		density: 'default'
	};

	const innerStore = writable<ListStoreType>(initialData);
	const { subscribe, set, update } = innerStore;

	return {
		subscribe,
		set,
		update,
		setSelectorField: (selectorField: string) =>
			update((n) => {
				return { ...n, selectorField };
			}),
		setActiveData: (data: Data) => {
			update((n) => {
				return { ...n, activeData: data };
			});
		},
		setActiveItem: (item: LisItemProps) => {
			update((n) => {
				return { ...n, activeItem: item };
			});
		},
		selector: (field: string, data: Record<string, any>) => {
			if (!data?.[field] || !get(innerStore)?.activeData?.[field]) return false;
			return get(innerStore).activeData[field] === data[field];
		}
	};
}

// Allow for multiple stores (good for contexts)
export const createListStore = <T = ListStoreType>() => createStore<T>();
