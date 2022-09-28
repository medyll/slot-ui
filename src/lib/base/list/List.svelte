<script lang="ts">
	import type { LisItemProps } from './types';
	import ListItem from './ListItem.svelte';
	import { setContext } from 'svelte';
	import { createListStore } from './store';
	import type { ElementProps } from '$typings/index.js';
	import { compute_slots, get_current_component, null_to_empty } from 'svelte/internal';
	import Icon from '../icon/Icon.svelte';
	import ListTitle from './ListTitle.svelte';
	import { createEventForwarder } from '../../engine/engine';
	import Virtualize from '../virtualize/Virtualize.svelte';
	import type { Data } from '$lib/data/grouper/Grouper.svelte';
	import { dataOp, propsProxy } from '$lib/engine/utils';
	import Divider from '../divider/Divider.svelte';
	import type { SorterFieldType } from '$lib/data/sorter/types';
	import Sorterer from '$lib/data/sorter/Sorterer.svelte';

	// set store
	const listStore = createListStore();
	setContext('listStateContext', listStore);

	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());

	/** formated listItems list  */
	export let listItems: LisItemProps[] | undefined = undefined;
	/** provided raw data, used if no listItems list is provided  */
	export let data: Data[] | undefined = undefined;
	/** Row from data for primary, used if props.data is provided  */
	export let dataFieldPrimary: string | ((data: Data) => void) | undefined = undefined;
	/** Row from data for secondary, used if props.data is provided  */
	export let dataFieldSecondary: string | ((data: Data) => void) | undefined = undefined;
	/** Row from data for secondary, used if props.data is provided  */
	export let dataFieldIcon: string | ((data: Data) => void) | undefined = undefined;

	export let height: string = '100%';
	export let style: string = '';
	export let showIcon: boolean = true;
	export let virtualize: boolean = false;
	export let selectorField: any;
	/** show divider between listItems */
	export let showDivider: boolean = false;
	/** props for Divider, if present*/
	export let dividerProps: Record<string, any> = {};
	/** Sorterer component inclusion. Inferred */
	export let sorterer: SorterFieldType[] | undefined = undefined;
	/** set selected data by dataKey value*/
	export let selectedDataKey: string | undefined = undefined;
	/** set selected data by data object */
	export let setSelectedData: Record<string, any> = {};
	/** set selected data by selectedItem object */
	export let setSelectedItem: Record<string, any> = {};

	export let onItemClick: (args: Record<string, any>) => void = ({}) => {};
	/** @deprecated use primary title  */
	export let title: string = '';
	/** displayed as H5*/
	export let primary: string | undefined = undefined;
	/** secondary title */
	export let secondary: string | undefined = undefined;
	/** icon for the  title  zone*/
	export let icon: string | undefined = undefined;
	/** fieldName by wich we will group */
	export let groupBy: string | undefined = undefined;
	let groupedData: any;
	/** List will not be clickable and will gain opacity */
	export let disabled: boolean = false;
	export let density: ElementProps['density'] = 'default';

	/** binding for selectedData */
	export let activeData = $listStore.activeData;
	/** sortedData if props.sorterer*/
	let sortedData: any[];

	let virtualHeight: number | undefined = undefined;

	$listStore.density = density;
	listStore.setSelectorField(selectorField);

	$: if (setSelectedData) {
		listStore.setActiveData(setSelectedData);
	}

	$: if (setSelectedItem) {
		// listStore.setActiveData(setSelectedData);
	}

	if (groupBy) {
		// if groupBy, we'll use  props.data or props.lisTitem.data
		if (data) {
			groupedData = dataOp.groupBy(data, groupBy);
		} else {
		}
	}

	// if data, build some list items
	$: if (data) {
		if (dataFieldPrimary || dataFieldSecondary) {
			listItems = propsProxy(
				[
					['primary', dataFieldPrimary ?? '"'],
					['secondary', dataFieldSecondary ?? '"'],
					['icon', dataFieldIcon ?? '"']
				],
				data
			);
		} else {
			try{
				listItems = data.map((dta: Data) => {
				return {
					primary: dta?.name ?? dta.code,
					secondary: dta?.id,
					data: dta
				};
			});
			}catch (e) {console.log(e)}
			
		}
	}

	// $: console.log({ sortedData, data });

	/** on listItem clicked, we set activeData to e.LisItemProps*/
	function onListItemClick(e: CustomEvent<LisItemProps>) {
		if (disabled) {
			e.stopPropagation();
			return;
		}

		//e?.currentTarget?.scrollIntoView();

		listStore.setActiveData(e.detail?.data); // should be  e.detail.data
		listStore.setActiveItem(e.detail);

		onItemClick && onItemClick(e.detail);
	}

	function onListItemClick_Deprecated(e: CustomEvent<LisItemProps>) {
		if (disabled) {
			e.stopPropagation();
			return;
		}

		listStore.setActiveData(e.detail); // should be  e.detail.data

		onItemClick && onItemClick(e.detail);
	}

	function navigateList(e: KeyboardEvent) {
		if (![38, 40].includes(e.keyCode)) return;

		let tt = 0;
		if (listItems) {
			// if selectorField
			// if listItem.primary
			// seek listItem with same primary as activeData
			if ($listStore.activeItem?.['primary']) {
				tt = dataOp.findObjectIndex(listItems, $listStore.activeItem['primary'], 'primary');
			}
			// seek listItem with same data.selectorField as activeData
			if (selectorField && $listStore.activeItem?.data?.[selectorField]) {
				tt = dataOp.findObjectIndex(
					listItems,
					$listStore.activeItem.data[selectorField],
					'data.' + selectorField
				);
			}
		} else if (data) {
			if (selectorField) {
				tt = dataOp.findObjectIndex(data, $listStore.activeData[selectorField], selectorField);
			}
		}

		if (tt === -1) return;

		const dir = e.keyCode === 38 ? tt - 1 : tt + 1;

		if (listItems && listItems[dir]) {
			$listStore.activeItem = listItems[dir];
			$listStore.activeData = listItems[dir]?.data;
		} else if (data) {
		}
	}

	// vars for display rules
	let showTitleZone = $$slots.title || title || primary || secondary; // || sorterer;
</script>

<ul
	bind:this={element}
	class="density-{density} {className}"
	on:listclicked={onListItemClick_Deprecated}
	on:list:dblclicked={onListItemClick_Deprecated}
	on:listitem:clicked={onListItemClick}
	on:listitem:dblclicked={onListItemClick}
	style="position:relative;height:{height};margin:0;padding:0!important;{style};opacity:{disabled
		? 0.6
		: 1};overflow:{virtualize ? 'hidden' : 'auto'};"
	use:forwardEvents
	tabindex="0"
	on:keydown={navigateList}
>
	{#if $$slots.commandBarSlot}
		<slot name="commandBarSlot" />
	{/if}
	{#if virtualize}
		<Virtualize height="100%" items={listItems} let:item> 
			<svelte:fragment slot="virtualizeHeaderSlot"> 
				{#if showTitleZone}
					<slot name="title">
						<ListTitle primary={primary ?? title} {secondary} {icon}>
							{#if sorterer}<Sorterer {sortedData} fields={sorterer} data={listItems} />{/if}
						</ListTitle>
					</slot>
				{/if}
			</svelte:fragment>
			{#if item}
				<slot listItem={item}>
					<ListItem class="" {showIcon} {density} data={item.data}>
						<span slot="icon"><Icon fontSize="tiny" icon={item?.icon} /></span>
						<span slot="primary">{null_to_empty(item?.primary)}</span>
						<span slot="secondary">{null_to_empty(item?.secondary)}</span>
						<span slot="action">{null_to_empty(item?.action)}</span>
					</ListItem>
				</slot>
			{/if}
		</Virtualize>
	{:else}
		{#if showTitleZone}
			<slot name="title">
				<ListTitle primary={primary ?? title} {secondary} {icon} />
			</slot>
		{/if} 
		{#if listItems} 
			{#each listItems as item}
				<slot listItem={item}>
					<ListItem
						style="content-visibility:hidden;"
						{showIcon}
						{density}
						{showDivider}
						{dividerProps}
						data={item.data}
						icon={item?.icon}
					>
						<span slot="icon" />
						<span slot="primary">{null_to_empty(item?.primary)}</span>
						<span slot="secondary">{null_to_empty(item?.secondary)}</span>
						<span slot="action">{null_to_empty(item?.action)}</span>
					</ListItem>
				</slot>
			{/each}
		{:else} 
		<slot></slot>
		{/if}
	{/if}
</ul>

<style   lang="scss">
	@import 'List';

</style>
