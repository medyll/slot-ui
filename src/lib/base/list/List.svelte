<script lang="ts">
	import type { LisItemProps } from './types';
	import ListItem from './ListItem.svelte';
	import { setContext } from 'svelte';
	import { createListStore } from './store';
	import type { ElementProps } from '../../../types';
	import { compute_slots, get_current_component, null_to_empty } from 'svelte/internal';
	import Icon from '../icon/Icon.svelte';
	import ListTitle from './ListTitle.svelte';
	import { createEventForwarder } from '../../engine/engine';
	import Virtualize from '../virtualize/Virtualize.svelte';
	import type { Data } from '$lib/data/grouper/Grouper.svelte';
	import { propsProxy } from '$lib/engine/utils';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	/** formated listItems list  */
	export let listItems: LisItemProps[] = [];
	/** provided raw data, used if no listItems list is provided  */
	export let data: Data[] | undefined = undefined;
	/** Row from data for primary, used if props.data is provided  */
	export let dataFieldPrimary: string | undefined = undefined;
	/** Row from data for secondary, used if props.data is provided  */
	export let dataFieldSecondary: string | undefined = undefined;

	export let height: string = '100%';
	export let style: string = '';
	export let showIcon: boolean = true;
	export let noVirtualize: boolean = false;
	export let selectorField;
	export let selectedDataKey: string | undefined = undefined;
	export let setSelectedData: Record<string, any> = {};
	export let setSelectedItem: Record<string, any> = {};

	export let onItemClick: (args: Record<string, any>) => void;
	/** @deprecated use primary title  */
	export let title: string;
	/** displayed as H5*/
	export let primary: string | undefined = undefined;
	/** secondary title */
	export let secondary: string | undefined = undefined;
	/** icon for the  title  zone*/
	export let icon: string | undefined = undefined;
	/** fieldName by wich we will group */
	export let groupBy: string | undefined = undefined;
	/** List will not be clickable and will gain opacity */
	export let disabled: boolean = false;
	export let density: ElementProps['density'] = 'default';

	const listStore = createListStore();
	setContext('listStateContext', listStore);

	$listStore.density = density;
	listStore.setSelectorField(selectorField);

	$: if (setSelectedData) {
		listStore.setActiveData(setSelectedData);
		console.log('selected', setSelectedData);
	}

	$: if (setSelectedItem) {
		// listStore.setActiveData(setSelectedData);
	}

	$: if (data) {
		// loop on
		// if props.dataFieldPrimary : propsProxy
		// else ...
		if (dataFieldPrimary || dataFieldSecondary) {
			listItems = propsProxy(
				[
					[dataFieldPrimary ?? '"', 'primary'],
					[dataFieldSecondary ?? '"', 'secondary']
				],
				data
			);
		} else {
			listItems = data.map((dta: Data) => {
				return {
					primary: dta?.name ?? dta.code,
					secondary: dta?.id,
					data: dta
				};
			});
		}
	}

	function onListItemClick(e: CustomEvent<LisItemProps>) {
		if (disabled) {
			e.stopPropagation();
			return;
		}
		listStore.setActiveData(e.detail);
		onItemClick && onItemClick(e.detail);
	}
</script>

<ul
	bind:this={element}
	class="density-{density}"
	on:listclicked={onListItemClick}
	on:list:dblclicked={onListItemClick}
	style="position:relative;height:{height};margin:0;padding:0;{style};opacity:${disabled ? 0.6 : 1}"
	use:forwardEvents
>
	{#if $$slots.title || title || primary || secondary}
		<slot name="title">
			<ListTitle primary={primary ?? title} {secondary} {icon} />
		</slot>
	{/if}
	{#if $$slots.commandBarSlot}
		<slot name="commandBarSlot" />
	{/if} 

	{#if listItems}
		{#if !noVirtualize}
			{#if $$slots.default}
				<Virtualize height="100%" items={listItems} let:item>
					<slot listItem={item} />
				</Virtualize>
			{:else}
				<Virtualize height="100%" items={listItems} let:item>
					<ListItem class="" {showIcon} {density} data={item.data}>
						<span slot="icon"><Icon fontSize="tiny" icon={item?.icon} /></span>
						<span slot="primary">{null_to_empty(item?.primary)}</span>
						<span slot="secondary">{null_to_empty(item?.secondary)}</span>
						<span slot="action">{null_to_empty(item?.action)}</span>
					</ListItem>
				</Virtualize>
			{/if}
		{:else}
			{#each listItems as item}
				<slot listItem={item}>
					<ListItem {showIcon} {density} data={item.data} icon={item?.icon}>
						<span slot="icon" />
						<span slot="primary">{null_to_empty(item?.primary)}</span>
						<span slot="secondary">{null_to_empty(item?.secondary)}</span>
						<span slot="action">{null_to_empty(item?.action)}</span>
					</ListItem>
				</slot>
			{/each}
		{/if}
	{/if}
</ul>

<style global lang="scss">
	@import 'List';
</style>
