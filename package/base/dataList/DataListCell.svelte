<script lang="ts">
	import type { CellType, DataListStoreType, RowType } from './types';
	import { dataOp } from '../../engine/utils';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Icon from '../icon/Icon.svelte';
	import Button from '../button/Button.svelte';
	import { custom_event } from 'svelte/internal';
	import { resizer } from '../../uses/resizer/resizer';

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
	let colIndex: number | undefined = undefined;

	// if inHeader, then monitor cell
	onMount(async () => {
		if (element && dataListContextStore) {
			colIndex = [...element.parentElement.children].indexOf(element);

			if (inHeader) {
				const width = element.offsetWidth + 'px'; // element?.style?.width ?? element?.offsetWidth+'px';

				if (
					!columnId &&
					!dataOp.filterListFirst($dataListContextStore.columns, colIndex, 'index')
				) {
					// find header.col by index, create uniqid
					// columnId = crypto.randomUUID();
					// register colmun in store
					// find header.col by index, create uniqid
					pushToStore(colIndex, width);
				}
			}
			if (!inHeader) {
				if (!columnId && dataOp.filterListFirst($dataListContextStore.columns, colIndex, 'index')) {
					// find header.col by index, create uniqid
					// columnId = dataOp.filterListFirst($dataListContextStore.columns, index, 'index').columnId;
					findColIdAtIndex(colIndex);
				}
			}
		}

		return () => {
			columnId = undefined;
		};
	});

	const sortState: string[] = ['none', 'asc', 'desc'];

	$: if (
		!inHeader &&
		element &&
		columnId &&
		dataOp.filterListFirst($dataListContextStore.columns, columnId, 'columnId')
	) {
		/* if (!element.style.width) {
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
		} */
	}

	$: sorticon =
		$dataListContextStore.sortBy.activeSortByField === dataField
			? $dataListContextStore?.config?.sortingIcons?.default[
					sortState.indexOf($dataListContextStore?.sortBy?.activeSortByOrder)
			  ]
			: 'dots-horizontal';

	$: showChip = $dataListContextStore.sortBy.activeSortByField === dataField;

	// update width
	$: if (element && !inHeader && $dataListContextStore?.columns?.[colIndex]?.width) {
		element.style.width=$dataListContextStore?.columns?.[colIndex]?.width 
		element.style.maxWidth=$dataListContextStore?.columns?.[colIndex]?.width 
		element.style.minWidth=$dataListContextStore?.columns?.[colIndex]?.width 
	}

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

	function pushToStore(index: any, width: any) {
		let columnId = crypto.randomUUID();
		// register colmun in store
		$dataListContextStore.columns.push({ index, columnId, width, dataField });
	}

	function findColIdAtIndex(index: number) {
		columnId = dataOp.filterListFirst($dataListContextStore.columns, index, 'index').columnId;
	}

	// not pure
	const useResizer = (node: HTMLElement, opt?: any) => {
		if (inHeader) resizer(node, opt);
	};

	function resizeStart() { 
	}

	function resizeOn(data: CustomEvent<{ width: any }>) {
		// console.log(data.detail);
		// element.style.width = data.detail.width
		// push new size to context
		$dataListContextStore.columns[colIndex].width = data.detail.width + 'px';
	}
	function resizeEnd() {
	}
</script>

<div
	data-sortable={true}
	data-column-id={columnId}
	data-noWrap={noWrap}
	bind:this={element}
	class="dataListCell"
	use:useResizer
	on:resizer:start={resizeStart}
	on:resizer:resize={resizeOn}
	on:resizer:end={resizeEnd}
	{style}
	title={$dataListContextStore?.columns?.[colIndex]?.width}
>
	{#if inHeader}
		<div on:click={onSort(columnId)} class="cellHeader">
			<div class="cellHeaderContent"><slot /></div>
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
