<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { CellType } from './types';
	export const style: string | undefined = undefined;

	// this head is a head
	// cells give width for the whole dataList
	const headerer = writable<CellType[]>([]);
	setContext('dataListHead', headerer);
</script>

<div class="pos-sticky dataListHead shad-2" {style}>
	<slot />
</div>

<style global lang="scss">
	.dataListHead {
		/* width: 900px;
        display: flex;
        border: 1px solid green; */
		.dataListCell {
			/* flex: 1;
			background-color: red; */
		}
	}
</style>
