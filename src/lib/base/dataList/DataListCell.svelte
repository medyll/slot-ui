<script lang="ts">
	import type { CellType, DataListStoreType, RowType } from './types';
	import { dataOp } from '$lib/engine/utils.js';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Icon from '../icon/Icon.svelte';
	import Button from '../button/Button.svelte';
	import { custom_event } from 'svelte/internal';
	import { resizer } from '$lib/uses/resizer/resizer';

	const dataListContextStore = getContext<Writable<DataListStoreType>>('dataListContext');
	const inHeader = getContext<Writable<CellType[]>>('dataListHead');
	const rowContext = getContext<Writable<RowType>>('dataListRow');

	export let element: HTMLDivElement | null = null;

	export let style: string | undefined = undefined;
	/** if data has been provided, then cell got a fieldName and coumnId is defined */
	export let dataField: string | undefined = undefined;
	/** typeof the dataField. Used when exists Datalist.$$props.dataTypes */
	export let dataFieldType: string | undefined = undefined;
	export let columnId: string | number | undefined = dataField ?? crypto.randomUUID();
	/** set noWrap = true to have ellipsis on this cell content*/
	export let noWrap: boolean = true;

	let addStyle: string;
	let colIndex: number | undefined = undefined;
	let columnsDef: CellType | undefined = undefined;

	if (!$dataListContextStore.columnsDef?.[dataField ?? columnId]) {
		$dataListContextStore.columnsDef[dataField ?? columnId] = {};
	}
	columnsDef = $dataListContextStore.columnsDef?.[dataField ?? columnId];

	onMount(async () => {
		colIndex = element ? [...element.parentElement.children].indexOf(element) : undefined;

		if (inHeader) {
			// set width and style from config if present (with appField)
			if (columnsDef?.style || columnsDef?.width) {
				if (columnsDef?.style) {
					element.style = columnsDef.style;
				}
				if (columnsDef?.width) {
					element.style.width = columnsDef.width;
					element.style.maxWidth = columnsDef.width;
					element.style.minWidth = columnsDef.width;
				}
			} else {
				// find header.col by index
				colIndex = [...element.parentElement.children].indexOf(element);
			}
			// register HTML element for reference
			columnsDef.htmlElement = element;
			columnsDef.dataField = dataField ?? columnId;
		}

		return () => {
			columnId = undefined;
		};
	});

	const sortState: string[] = ['none', 'asc', 'desc'];

	$: sorticon =
		$dataListContextStore.sortBy.activeSortByField === dataField
			? $dataListContextStore?.config?.sortingIcons?.default[
					sortState.indexOf($dataListContextStore?.sortBy?.activeSortByOrder)
			  ]
			: 'dots-horizontal';

	$: showChip = $dataListContextStore.sortBy.activeSortByField === dataField;

	$: width =
		$dataListContextStore?.columnsDef?.[dataField ?? columnId]?.htmlElement?.offsetWidth + 'px';

	$: if (
		element &&
		!inHeader &&
		$dataListContextStore?.columnsDef?.[dataField ?? columnId]?.htmlElement
	) {
		element.style.width = width;
		element.style.maxWidth = width;
		element.style.minWidth = width;
	}

	$: if (Boolean(element) && !inHeader && !dataField) {
		const field = Object.keys($dataListContextStore.columnsDef)[colIndex];
		const fieldDef = $dataListContextStore.columnsDef[field];
		const widthHtml = fieldDef.htmlElement.offsetWidth  + 'px';
		
		element.style.width = widthHtml;
		element.style.maxWidth = widthHtml;
		element.style.minWidth = widthHtml;
	}

	const onSort = (columnId: string, order: 'asc' | 'desc' | 'none') => {
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
		if (dataField && $dataListContextStore.columnsDef[dataField]) return dataField;
		let columnId = dataField ?? crypto.randomUUID();
		// register colmun in store
		$dataListContextStore.columns.push({ index, columnId, width, dataField, style });
		return columnId;
	}

	function findColIdAtIndex(index: number) {
		columnId = dataOp.filterListFirst($dataListContextStore.columns, index, 'index').columnId;
	}

	// not pure
	const useResizer = (node: HTMLElement, opt?: any) => {
		if (inHeader) resizer(node, opt);
	};

	function resizeStart() {}

	function resizeOn(data: CustomEvent<{ width: any }>) {
		$dataListContextStore.columnsDef[columnId].width = data.detail.width + 'px';
	}
	function resizeEnd() {}
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
	{...$$restProps}
>
	{#if inHeader}
		<div
			on:click={() => {
				onSort(columnId);
			}}
			style:width={$dataListContextStore.columnsDef[columnId]?.width}
			class="cellHeader"
		>
			<div class="cellHeaderContent">
				{columnId}
				<slot />
			</div>
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
