<svelte:options accessors={true} />

<script lang="ts">
	import { setContext, getContext, hasContext } from 'svelte/internal';
	import { createEventForwarder } from '../../engine/engine.js';
	import { get_current_component } from 'svelte/internal';
	import Virtualize from '../virtualizer/Virtualizer.svelte';
	import { writable, type Writable } from 'svelte/store';
	import DataListRow from './DataListRow.svelte';
	import type { DataListStoreType, DataCellType, groupByOptions } from './types.js';
	import { dataOp } from '$lib/engine/utils.js';
	import DataListHead from './DataListHead.svelte';
	import Icon from '../icon/Icon.svelte';
	import Button from '../button/Button.svelte';
	import type { Data } from '$lib/types/index.js';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());

	export let style: string | undefined = undefined;
	/** show or hide the dataList body */
	export let hideBody: boolean = false;
	/** show or hide the dataList headere */
	export let showHeader: boolean = true;
	/** is the datalist sortable */
	export let isSortable: boolean = true;
	/** order on which the sorted list is sorted */
	export let sortByOrder: 'asc' | 'desc' | 'none' | string = 'none';
	/** group field on which data will be grouped, can use dot notation as dot path */
	export let groupByField: string | string[] | undefined = undefined;
	/** options used when props.groupByField is defined */
	export let groupByOptions: groupByOptions = {
		showMainHeader: true,
		showSubGroupsHeader: true,
		showEmptyGroup: false
	};

	/** field used for selection*/
	export let selectorField: string = 'id';
	/** field value used for selection*/
	export let selectorFieldValue: any | undefined = undefined;
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
	/** columns declaration */
	export let columns: Record<string, DataCellType> = {};

	export let virtualizer: boolean = false;

	let hidedGroups: Data = {};

	let sortedData: any[];
	$: sortedData = data?.filter((x) => x);

	export let sortingIcons = {
		default: ['mdi:dots-horizontal', 'mdi:sort-bool-ascending', 'mdi:sort-bool-descending'],
		numeric: ['mdi:dots-horizontal', 'mdi:sort-bool-ascending', 'mdi:sort-bool-descending']
	};

	if (hasContext('dataListContext')) {
		getContext<Writable<DataListStoreType>>('dataListContext');
	} else {
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
			groupBy: {
				groupByField,
				groupByOptions
			},
			idField,
			columns,
			hasColumnsProps: Boolean(Object.keys(columns).length),
			data
		});

		setContext<Writable<DataListStoreType>>('dataListContext', dataListStore);
	}

	function doSort(e: CustomEvent<{ field: string; order: string }>) {
		if (e.detail.field) {
			activeCommonSortField = e.detail.field;
			sortByOrder = e.detail.order;

			if (e.detail.order === 'none') {
				sortedData = data;
			} else {
				sortedData = dataOp.sortBy(data, e.detail.field, e.detail.order);
			}
		}
	}

	function doSelect(e: CustomEvent<Data>) {
		const selectedItem = e.detail;
		selectorFieldValue = selectedItem?.[selectorField];
		console.log(selectorField, e.detail);
	}

	function getGroupProps(content: any) {
		return {
			...content,
			columns,
			style,
			groupByField: false,
			groupByOptions,
			showHeader: groupByOptions.showSubGroupsHeader,
			selectorField,
			selectorFieldValue,
			virtualizer
		};
	}

	$: groups = groupByField
		? dataOp.groupBy(data, groupByField, {
				keepUngroupedData: Boolean(groupByOptions.showEmptyGroup)
		  })
		: {};
</script>

{#if groupByField}
	{#if groupByOptions?.showMainHeader}
		<DataListHead />
	{/if}
	<div bind:this={element} class="flex-v h-full">
		{#each Object.keys(groups) as red}
			{@const groupProps = getGroupProps({ data: groups[red] })}
			{@const item = groups[red]}
			<div class="flex-v">
				<div class="">
					<slot name="groupTitleSlot" {item}>
						<div class="flex-h flex-align-middle pad gap-medium groupHead">
							<div class="iconGroup"><Icon class="iconGroup"   icon="cil:object-group" /></div>
							<div>{groupByField} : <span class="text-bold">{red}</span></div>
							<div class="flex-main border-b divider" />
							<div>{groups[red]?.length}</div>
							<div class="pad-l border-l iconGroup">
								<Button
									on:click={() => {
										hidedGroups[red] = !hidedGroups[red];
										// hideBody = !hideBody;
									}}
									icon={hidedGroups[red] ? 'chevron-up' : 'chevron-down'}
									naked
								/>
							</div>
						</div>
					</slot>
				</div>
				<div class="flex-main pos-rel" use:forwardEvents>
					{#if !hidedGroups[red]}
						<svelte:self {...groupProps}>
							<svelte:fragment slot="groupTitleSlot" />
						</svelte:self>
					{/if}
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div
		use:forwardEvents
		on:datalist:sorted={doSort}
		on:datalist:select={doSelect}
		bind:this={element}
		class="dataList  pos-rel {className}"
		{style}
		tabindex="0"
	>
		{#if element && virtualizer}
			<Virtualize style="border:1px solid red;height:100%;"  data={sortedData} let:item>
				<svelte:fragment slot="virtualizeHeaderSlot">
					<slot name="head">
						<DataListHead />
					</slot>
				</svelte:fragment>
				<slot {item}>
					<DataListRow data={item ?? {}} />
				</slot>
			</Virtualize>
		{/if}
		{#if !virtualizer && element}
			{#if showHeader}
				<slot name="head">
					<DataListHead />
				</slot>
			{/if}
			{#if !hideBody}
				{#each sortedData as item}
					<slot {item}>
						<DataListRow
							class={item[selectorField] === selectorFieldValue ? 'theme-bg-paper' : ''}
							data={item}
						/>
					</slot>
				{/each}
			{/if}
		{/if}
		<slot name="foot" />
	</div>
{/if}

<style global lang="scss">
	@import './DataList.scss';

	.groupHead {
		.iconGroup {
				color: #999;
			}
		&:hover {
			.iconGroup {
				color: var(--theme-color-primary);
			}
			.divider {
				border-color: var(--theme-color-primary, red);
			}
		}
	}
</style>
