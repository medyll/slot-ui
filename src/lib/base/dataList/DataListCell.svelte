<script lang="ts">
	import type { CellType, DataListStoreType, RowType } from './types';
	import { dataOp } from '$lib/engine/utils';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Icon from '../icon/Icon.svelte';
	import Button from '../button/Button.svelte';
	import { custom_event } from 'svelte/internal';

	const dataListContextStore = getContext<Writable<DataListStoreType>>('dataListContext');
	const inHeader = getContext<Writable<CellType[]>>('dataListHead');
	const rowContext = getContext<Writable<RowType>>('dataListRow');


	export let element: HTMLDivElement | null = null;

	export let style: string | undefined = undefined;
	export let columnId: string | number | undefined = undefined;
	/** if data has been provided, then cell got a fieldName */
	export let dataField: string | undefined = undefined;
	/** typeof the dataField. Used when exists Datalist.$$props.dataTypes */
	export let dataFieldType: string | undefined = undefined;	
	/** set noWrap = true to have ellipsis on this cell content*/
	export let noWrap: boolean = true;

	let addStyle: string;
	// if inHeader, then monitor cell
	onMount(async () => {
		if (element && dataListContextStore && inHeader) {
			const width = element.offsetWidth + 'px'; // element?.style?.width ?? element?.offsetWidth+'px';

			const index = [...element.parentElement.children].indexOf(element);

			if (columnId) { 
			} else if (!dataOp.filterListFirst($dataListContextStore.columns, index, 'index')) {
				// find header.col by index, create uniqid
				columnId = crypto.randomUUID();
				// register colmun in store
				$dataListContextStore.columns.push({ index, columnId, width, dataField });
			}
		}
		if (element && dataListContextStore && !inHeader) {
			const index = [...element.parentElement.children].indexOf(element);

			if (columnId) {
			} else if (dataOp.filterListFirst($dataListContextStore.columns, index, 'index')) {
				// find header.col by index, create uniqid
				columnId = dataOp.filterListFirst($dataListContextStore.columns, index, 'index').columnId;
			}
		}

		return () => {
			columnId = undefined;
		};
	});

	/** try and restore columnId on re-mount */
	if (!columnId && element && inHeader) {
		const index = [...element.parentElement.children].indexOf(element);
		columnId = dataOp.filterListFirst($dataListContextStore.columns, index, 'index').columnId;
	}

	const sortState: string[] = ['none', 'asc', 'desc'];

	$: if (
		!inHeader &&
		element  &&
		columnId &&
		dataOp.filterListFirst($dataListContextStore.columns, columnId, 'columnId')
	) {
		if (!element.style.width) {
			element.style.width = dataOp.filterListFirst(
				$dataListContextStore.columns,
				columnId,
				'columnId'
			).width;
			element.style.maxWidth = dataOp.filterListFirst(
				$dataListContextStore.columns,
				columnId,
				'columnId'
			).width;
		}
	}

	$: sorticon =
		$dataListContextStore.sortBy.activeSortByField === dataField
			? $dataListContextStore?.config?.sortingIcons?.default[
					sortState.indexOf($dataListContextStore?.sortBy?.activeSortByOrder)
			  ]
			: 'dots-horizontal';

	$: showChip = $dataListContextStore.sortBy.activeSortByField === dataField;

	const onSort = (columnId: string, order: 'asc' | 'desc' | 'none') => (e) => {
		// find field from index
		if ($dataListContextStore?.config?.isSortable && columnId && dataField) {
			const event = custom_event(
				'datalist:sort:clicked',
				{ field: dataField, order },
				{ bubbles: true }
			);
			if (element) element.dispatchEvent(event); 
		}
	};


</script>

<div
	data-sortable={true}
	data-column-id={columnId}
	data-noWrap={noWrap}
	bind:this={element}
	class="dataListCell"
	{style}
>
	{#if inHeader}
		<div class="cellHeader" on:click={onSort(columnId)}>
			<div title={columnId + 'red'} class="cellHeaderContent"><slot /></div>
			{#if dataField && $dataListContextStore?.config?.isSortable}
				<div class="cellHeaderSorter">
					<Button naked iconFamily="mdi" icon={sorticon} {showChip} />
				</div>
			{/if}
		</div>
	{:else}
		<slot fieldData={$rowContext?.data ?? {}} />
	{/if}
</div>
