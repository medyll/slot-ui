<script lang="ts">
	import type { DataListStoreType } from './types.ts';
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { CellType } from './types';

	export const style: string | undefined = undefined;
	export let element: HTMLDivElement | undefined = undefined;

	export let stickyHeader: boolean | undefined = true;

	const dataListStore = getContext<Writable<DataListStoreType>>('dataListContext');
	// this head is a head
	// cells give width for the whole dataList
	const headerer = writable<CellType[]>([]);
	setContext('dataListHead', headerer);

	let clientWidth;
	$: if(element?.children) [...element?.children].forEach((node,index) => { 
		const width = node.offsetWidth+'px';
	});

 
	function reDraw(){
		console.log('redraw')
	}
</script>

<div bind:this={element} bind:clientWidth class:pos-sticky={stickyHeader}  class="dataListHead shad-2" {style}>
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
