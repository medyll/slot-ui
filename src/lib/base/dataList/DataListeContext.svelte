<svelte:options accessors={true} />

<script lang="ts">
	import { setContext, hasContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { DataListStoreType } from './types.js';

	if (!hasContext('dataListContext')) {
		let dataListStore = writable<DataListStoreType>({});
		let dataListContext = setContext<Writable<DataListStoreType>>('dataListContext', dataListStore);
	}
</script>

<slot />
