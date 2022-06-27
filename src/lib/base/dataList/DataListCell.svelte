<script lang="ts">
	import type { CellType } from './types.ts';
	import { dataOp } from '$lib/engine/utils';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { browser } from '$app/env';

	const mainContext = getContext<Writable<CellType[]>>('dataListContext');
	const inHeader = getContext<Writable<CellType[]>>('dataListHead');
	export let element: HTMLDivElement | null = null;

	export let style: string | undefined = undefined;
	export let columnId: string | number | undefined = undefined;

	let addStyle: string;
	// if inHeader, then monitor cell
	onMount(async () => {
		if (element && mainContext && inHeader) {
			const width = element?.style?.width ?? element?.style?.flex;

			const index = [...element.parentElement.children].indexOf(element);

			if (columnId) {
				// find header.col by columnId
				if (!dataOp.filterListFirst($mainContext, columnId, 'columnId')) {
				}
			} else if (!dataOp.filterListFirst($mainContext, index, 'index')) {
				// find header.col by index, create uniqid
				columnId = crypto.randomUUID();
				$mainContext.push({ index, columnId, width }); 
			}
		}
        if (element && mainContext && !inHeader) { 
			const index = [...element.parentElement.children].indexOf(element);

			if (columnId) {
				// find header.col by columnId
				if (!dataOp.filterListFirst($mainContext, columnId, 'columnId')) {
				}
			} else if (dataOp.filterListFirst($mainContext, index, 'index')) {
				// find header.col by index, create uniqid
				columnId = dataOp.filterListFirst($mainContext, index, 'index').columnId; 
			}
		}
	});
 

	$: if (element && columnId && dataOp.filterListFirst($mainContext, columnId, 'columnId')) {
		if(!element.style.width) element.style.width = dataOp.filterListFirst($mainContext, columnId, 'columnId').width; 
	}
 
</script>

<div data-column-id={columnId}  bind:this={element} class="dataListCell" {style}>
	<slot />
</div>

<style lang="scss">
</style>
