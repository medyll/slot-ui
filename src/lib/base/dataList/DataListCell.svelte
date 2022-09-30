<script lang="ts">
	import type { DataCellType, DataListStoreType, RowType } from './types.js';
	import { dataOp } from '$lib/engine/utils.js';
	import { getContext, onMount, tick } from 'svelte/internal';
	import type { Writable } from 'svelte/store';
	import Button from '../button/Button.svelte';
	import { custom_event } from 'svelte/internal';
	import { resizer } from '$lib/uses/resizer/resizer.js';
	import type { Data } from '$lib/types/index.js';
	import { error } from '@sveltejs/kit';
	import Icon from '../icon/Icon.svelte';
	import Chipper from '../chipper/Chipper.svelte';

	const dataListContext = getContext<Writable<DataListStoreType>>('dataListContext');
	const inHeader = getContext<Writable<DataCellType[]>>('dataListHead');
	const rowContext = getContext<Writable<RowType>>('dataListRow');

	export let element: HTMLElement | undefined = undefined;

	export let style: string | undefined = undefined;
	/** if data has been provided, then cell got a fieldName and coumnId is defined */
	export let field: string | undefined = undefined;
	/** typeof the field. Used when exists Datalist.$$props.dataTypes */
	export let fieldType: string | undefined = undefined;
	export let columnId: string | number | undefined = field ?? crypto.randomUUID();
	/** set noWrap = true to have ellipsis on this cell content*/
	export let noWrap: boolean = true;
/** title */
export let title:string | undefined = undefined

	let colIndex: number;

	let minWidth = "114px";
	
	onMount(async () => {
		colIndex = element ? [...(element.parentElement?.children ?? [])].indexOf(element) : -1;
		// if inHeader take the width from
		// - the columns and dataField :  set it to the element
		// - the columns and element index :  set it to the element
		// - the element with : don't do nothing, but should ! throw error ?

		if (inHeader) {
			if ($dataListContext.hasColumnsProps && field) {
				await tick();
				//console.log('hasColumnsProps && field');
				if (!$dataListContext.columns[field]) {
					console.log('create')
					createColumnsDef(element, field, colIndex);
				}

				if (!$dataListContext.columns[field]?.width) { 
					console.log(element?.offsetWidth)
					updateColumnsDef(field, { width:   minWidth });
				}
			} else if ($dataListContext.hasColumnsProps) {
				await tick();
					console.log('no field')
				// grab and declare field from data
				field = getAutoFields($dataListContext.data)[colIndex];
			} else if (field) {
				// throw new Error('props.field found without column declaration : '+field);
				createColumnsDef(element, field, colIndex);
			} else {
				// create a dummy field for reference
				createColumnsDef(element, crypto.randomUUID(), colIndex);
			}
		}

		// if not in header set the width of element from
		// - the columns with dataField
		// - the columns with element index => set field
		// - there is always a columns

		if (!inHeader) {

			let def: DataCellType;
			if (field) def = $dataListContext?.columns[field];
			else def = Object.values($dataListContext?.columns)[colIndex];
 
		}

		return () => {
			columnId = undefined;
		};
	});

	const sortState: string[] = ['none', 'asc', 'desc'];
	let sorticon: string;
	let showChip: boolean;

	$: if (inHeader) {
		sorticon =
			$dataListContext.sortBy.activeSortByField === field
				? $dataListContext?.config?.sortingIcons?.default[
						sortState.indexOf($dataListContext?.sortBy?.activeSortByOrder)
				  ]
				: 'mdi:dots-horizontal';

		showChip = $dataListContext.sortBy.activeSortByField === field;
	}

	const createColumnsDef = async (
		element: HTMLElement | undefined,
		field: string,
		index: number
	) => {
		if (!element) return;
		await tick();
		$dataListContext.columns[field] = {
			field,
			style: (element.getAttribute('style') ?? ''),
			width: minWidth,
			order: Boolean(element.style?.order) ? eval(element.style.order) : index,
			index: index,
			columnId: field
		};
		$dataListContext.hasColumnsProps = true;
	};

	const updateColumnsDef = async (field: string, payload: Record<string, any>) => {
		await tick();
		$dataListContext.columns[field] = {
			...$dataListContext.columns[field],
			...payload
		};
		// $dataListContext.hasColumnsProps = true;
	}; 

	/**
	 * used if no columns and no props.field
	 * @param data
	 */
	const getAutoFields = (data: Record<string, any>[]): string[] => {
		return Object.keys(data[0]);
	};

	const onSort = (field: string) => {
		const event = custom_event('datalist:sort:clicked', { field }, { bubbles: true });
		if (element) element.dispatchEvent(event);
	};

	// not pure
	const useResizer = (node: HTMLElement, opt?: any) => {
		if (inHeader) resizer(node, opt);
	};

	function resizeStart() {}

	async function resizeOn(data: CustomEvent<{ width: any }>) {
		await tick()
		$dataListContext.columns[field].width = data.detail.width + 'px';
			
	}
	function resizeEnd() {}
</script>

{#if inHeader} 
	<div
		bind:this={element}
		data-sortable={true}
		data-column-id={columnId}
		data-noWrap={noWrap}
		class="dataListCell cellDimensions"
		use:useResizer
		on:resizer:start={resizeStart}
		on:resizer:resize={resizeOn}
		on:resizer:end={resizeEnd}
		style="{style ?? $dataListContext.columns[field]?.headerStyle ?? $dataListContext.columns[field]?.style};--cell-width:{$dataListContext.columns[field]?.width}"
		style:width={$dataListContext.columns[field]?.width}
		style:minWidth={$dataListContext.columns[field]?.width}
		style:maxWidth={$dataListContext.columns[field]?.width}
		{...$$restProps}
	>
		<div on:click={() => onSort(field)} class="cellHeader">
			<div class="cellHeaderContent">
				<slot />
			</div>
			{#if field && $dataListContext?.config?.isSortable}
				<div class="cellHeaderSorter" title={sorticon}>
					<!-- <Chipper class="pad-tb-1">
						<Icon naked icon={sorticon} {showChip} />
					</Chipper> -->
					<!-- <Icon naked icon={sorticon} {showChip} /> -->
					<Button naked icon={sorticon} {showChip} />
				</div>
			{/if}
		</div>
	</div>
	<!-- <div style="height:900px;margin-top:3rem" class="border-3" /> -->
{:else}
	<div
		bind:this={element}
		data-column-id={columnId}
		data-noWrap={noWrap}
		class="dataListCell cellDimensions"
		style="{style};--cell-width:{$dataListContext.columns[field]?.width}"
		{...$$restProps}
		{title}
	>
		<slot fieldData={$rowContext?.data?.[field] ?? {}} />
	</div>
{/if}

<style lang="scss">
	.dataListCell {
		// transition: all  0.1s; 
	}
</style>
