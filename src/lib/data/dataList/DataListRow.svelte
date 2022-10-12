<svelte:options accessors={true} />

<script lang="ts">
	import sanitizeHtml from 'sanitize-html';
	import type { Data } from './$types';
	import {
	current_component,
		custom_event,
		getContext,
		get_current_component,
		null_to_empty,
		prevent_default,
		setContext
	} from 'svelte/internal';
	import { writable, type Writable } from 'svelte/store';
	import DataListCell from './DataListCell.svelte';
	import type { DataCellType, DataListStoreType } from './types.js';
	import type { RowType } from './types.js';
	import { dataOp } from '$lib/engine/utils.js';
	import { createEventForwarder } from '$lib/engine/engine.js';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | undefined = undefined;
	const forwardEvents = createEventForwarder(get_current_component());

	export let data: any;
	export let style: string = '';

	const dataStore = writable<RowType>({ data });
	setContext('dataListRow', dataStore);

	const dataListContext = getContext<Writable<DataListStoreType>>('dataListContext');

	function handleClick(item: Data) {
		const event = custom_event('datalist:click', item, { bubbles: true });
		if (element) element.dispatchEvent(event);
	}

	function handleSelect(item: Data) {
		const event = custom_event('datalist:select', item, { bubbles: true });
		if (element) element.dispatchEvent(event);
	}

	function fieldOrFunction(item: Data, field: string, defaultValue?: any): string {
		const resolved = dataOp.resolveDotPath(item, field);
		return typeof resolved === 'function' ? resolved(item) : resolved;
	}

	function checkGetter(columns: Record<string, DataCellType>, field: string, data: Data) {
		const ret = columns[field]?.getter ? columns[field]?.getter(data) : dataOp.resolveDotPath(data, field);
		// console.log(ret)
		// console.log(ret, columns[field])
		return sanitizeHtml(ret);
		//  fieldOrFunction(data?.[field], field)
	}

	$: cssVars = Object.values($dataListContext.columns ?? []).reduce((previous,current,currentIndex)=>{
		const witdh = current?.width ?? 'auto'
		return `${previous} minmax(${witdh},${witdh})`  
	},'--template-columns:')

</script>

<div
	use:forwardEvents
	bind:this={element}
	on:datalist:sort:clicked
	on:click={() => {
		if (data) handleClick(data);
		if (data) handleSelect(data);
	}}
	class="dataListRow {className}"
	style="{style};{cssVars}"
>
	{#if $$slots.default}
		<slot />
	{:else if $dataListContext.hasColumnsProps}
		{#each Object.keys($dataListContext.columns) as inItem}
			{@const field = $dataListContext.columns[inItem].field}
			{@const final = checkGetter($dataListContext.columns, field, data)}
			<!--  fieldOrFunction(data?.[field], field) -->
			<DataListCell title={final} {field}>
				{@html null_to_empty(
					sanitizeHtml(checkGetter({ ...$dataListContext.columns }, field, data))
				)}
			</DataListCell>
		{/each}
	{:else}
		{#each Object.keys(data) as inItem}
			<DataListCell field={inItem}>
				<slot />
			</DataListCell>
		{/each}
	{/if}
</div>


<style lang="scss">
	.dataListRow{
		display:flex;
		/* grid-template-columns: var(--template-columns);
		grid-auto-columns: min-content; */
		content-visibility: auto;
		contain-intrinsic-size: 30px 500px;
	}
</style>
