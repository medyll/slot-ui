<script lang="ts">
	import type { DataListStoreType } from './types.js';
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { DataCellType } from './types.js';
	import DataListCell from './DataListCell.svelte';
	import { custom_event } from 'svelte/internal';

	export let style: string | undefined = undefined;
	export let element: HTMLDivElement | undefined = undefined;

	export let stickyHeader: boolean | undefined = true;

	export let onSort: Function = () => {};

	const dataListContext = getContext<Writable<DataListStoreType>>('dataListContext');
	// this head is a head
	// cells give width for the whole dataList
	const headerer = writable<DataCellType[]>([]);

	setContext('dataListHead', headerer);

	function doSort(e: CustomEvent<{ field: string }>) {
		let activeSortByOrder = $dataListContext.sortBy.activeSortByOrder;
		const sortByOrder =
			activeSortByOrder === 'none' ? 'desc' : activeSortByOrder === 'asc' ? 'desc' : 'asc';

		$dataListContext.sortBy.activeSortByField = e.detail.field;
		$dataListContext.sortBy.activeSortByOrder = sortByOrder;

		// fire event
		const event = custom_event(
			'datalist:sorted',
			{ field: e.detail.field, order: sortByOrder },
			{ bubbles: true }
		);

		if (element) element.dispatchEvent(event);
	}

	// $: console.log($dataListContext.columns)
</script>

<div
	bind:this={element}
	on:datalist:sort:clicked={doSort}
	class:pos-sticky={stickyHeader}
	class="dataListHead"
	{style}
>
	<slot>
		{#if $dataListContext.hasColumnsProps}
			{#each Object.values($dataListContext.columns) as column}
				<DataListCell field={column.field}>{column.fieldTitle ?? column.field}</DataListCell>
			{/each}
		{/if}
	</slot>
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
