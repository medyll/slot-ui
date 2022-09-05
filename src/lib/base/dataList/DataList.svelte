<script lang="ts">
	import { setContext } from 'svelte';
	import { createEventForwarder } from '../../engine/engine.js';
	import { custom_event, each, get_current_component } from 'svelte/internal';
	import Virtualize from '../virtualizer/Virtualizer.svelte';
	import { writable, type Writable } from 'svelte/store';
	import { browser } from '$app/env';
	import { slotUiComponentList } from '$lib/sitedata/componentList.js';
	import DataListRow from './DataListRow.svelte';
	import DataListCell from './DataListCell.svelte';
	import type { DataListStoreType } from '$types/index.js';
	import { dataOp } from '$lib/engine/utils.js';
	import type { Data } from '$types/index.js';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());

	export let style: string | undefined = undefined;
	/** is the datalist sortable */
	export let isSortable: boolean = true;
	/** order on which the sorted list is sorted */
	export let sortByOrder: 'asc' | 'desc' | 'none' | string = 'none';
	/** binding, used when multiple buttons*/
	export let activeCommonSortField: string = '';
	/** set noWrap = true to have ellipsis on all cells content*/
	export let noWrap: boolean = true;
	/** represents your data types used to display values */
	export let dataTypes: Record<string, any> | undefined = undefined;
	/** data to loop  trought */
	export let data: any[] = [];
	/** used only if data is provided */
	export let idField: string | undefined = undefined;

	let sortedData: any[];
	$: sortedData = data;

	const sortState: string[] = ['none', 'asc', 'desc'];
	export let sortingIcons = {
		default: ['dots-horizontal', 'sort-bool-ascending', 'sort-bool-descending'],
		numeric: ['dots-horizontal', 'sort-bool-ascending', 'sort-bool-descending']
	};

	/** context store for dataList config and state */
	let dataListStore = writable<DataListStoreType>({
		config: {
			isSortable,
			defaultSortByField: undefined,
			defaultSortByOrder: sortByOrder,
			sortingIcons,
			noWrap,
			dataTypes
		},
		sortBy: {
			activeSortByField: undefined,
			activeSortByOrder: 'none'
		},
		idField,
		columns: [],
		data
	});

	let dataListContext = setContext<Writable<DataListStoreType>>('dataListContext', dataListStore);

	function doSort(e: CustomEvent<{ field: string; order: 'asc' | 'desc' | 'none' }>) { 
		const next = sortState.indexOf(e.detail.order ?? sortByOrder) + 1;
		let toggleOrder = sortState?.[next] ? sortState[next] : sortState[0];

		// let toggleOrder = order === 'asc' ? 'desc' : 'asc';

		if (toggleOrder === 'none') toggleOrder = 'asc';

		if (e.detail.field) {
			activeCommonSortField = e.detail.field;
			sortByOrder = toggleOrder ?? 'none';

			if (e.detail.order === 'none') {
				sortedData = data;
			} else {
				sortedData = dataOp.sortBy(data, e.detail.field, toggleOrder);
			}
			// update context
			$dataListContext.sortBy.activeSortByField = e.detail.field;
			$dataListContext.sortBy.activeSortByOrder = toggleOrder;
		}
	}
</script>

<div
	use:forwardEvents
	on:datalist:sort:clicked={doSort}
	bind:this={element}
	class="dataList  {className}"
	{style}
	tabindex="0"
>
	{#if element}
		<Virtualize height="100%" data={sortedData} let:item>
			<svelte:fragment slot="virtualizeHeaderSlot">
				<slot name="head" />
			</svelte:fragment>
			{#if item}
				{#if $$slots.default}
					<slot {item} />
				{:else}
					<DataListRow data={item}>
						{#each Object.keys(item) as inItem}
							<DataListCell dataField={inItem}>
								{item?.[inItem]}
							</DataListCell>
						{/each}
					</DataListRow>
				{/if}
			{/if}
		</Virtualize>
	{/if}
	<slot name="foot" />
</div>

<style global lang="scss">
	[data-theme='dark'] {
		--border-color: rgba(255, 255, 255, 0.1);
	}
	[data-theme='light'] {
		--border-color: rgba(0, 0, 0, 0.1);
	}
	.dataList {
		height: 100%;
		position: relative;
		.dataListHead {
			display: flex;
			margin-bottom: 0.5rem;
			align-items: stretch;
			height: 32px;
			background-color: var(--theme-color-paper-alpha-low);
			backdrop-filter: blur(1px);
			// border-radius: var(--radius-tiny);
			.dataListCell {
				display: flex;
				align-items: stretch;
				overflow: hidden;
				border-right: 1px solid var(--border-color);
				position: relative;
				&[data-sortable='true'] {
					cursor: pointer;
					&:hover {
						background-color: var(--theme-color-primary-alpha);
					}
				}

				.cellHeader {
					display: flex;
					align-items: center;
					// border: 1px solid red;
					min-width: 0;
					width: 100%;
					.cellHeaderContent {
						flex: 1;
						overflow: hidden;
						padding: 0 8px;
					}
					.cellHeaderSorter {
						//padding: 0 4px;
					}
				}
			}
		}

		.dataListRow {
			display: flex;
			border-bottom: 1px solid var(--border-color);

			//border-radius: 6px;
			// margin: 0.25rem 0;

			&:hover {
				background-color: var(--theme-color-paper);
				.dataListCell {
				}
			}
			&[data-selected='true'] {
				background-color: var(--theme-color-primary);
				.dataListCell {
					color: white;
				}
			}

			.dataListCell {
				padding: 8px;
				color: var(--theme-color-text);
				border-right: 1px solid var(--border-color);
				&[data-noWrap='true'] {
					display: box;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					/* display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical; */
				}
			}
		}
	}
</style>
