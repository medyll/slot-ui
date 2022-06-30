<script lang="ts">
	import { setContext } from 'svelte';
	import { createEventForwarder } from '../../engine/engine';
	import { each, get_current_component } from 'svelte/internal';
	import Virtualize from '../virtualize/Virtualize.svelte';
	import { writable, type Writable } from 'svelte/store';
	import { browser } from '$app/env';
	import { slotUiComponentList } from '$lib/sitedata/componentList';
	import DataListRow from './DataListRow.svelte';
	import DataListCell from './DataListCell.svelte';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());

	export let style: string | undefined = undefined;

	export let data: any[] = [];

	const dataListStore = writable([]);
	setContext<Writable<any[]>>('dataListContext', dataListStore);
</script>

<div use:forwardEvents bind:this={element} class="dataList  {className}" {style}>
	{#if element}
		<Virtualize height="100%" items={data} let:item>
			<svelte:fragment slot="virtualizeHeaderSlot">
				<slot name="head">virtualizeHeaderSlot</slot>
			</svelte:fragment>
			{#if item}
				{#if $$slots.default}
					<slot {item} />
				{:else}
					<DataListRow>
						{#each Object.keys(item) as inItem}
							<DataListCell>{item?.[inItem]}</DataListCell>
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
		--border-color: rgba(255,255,255,0.1)
	}
	[data-theme='light'] {
		--border-color: rgba(0,0,0,0.1);
	}
	.dataList {
		height: 100%;
		position: relative;
		.dataListHead {
			display: flex;
			margin-bottom: 0.5rem;
			.dataListCell {
				padding: 8px;
				overflow: hidden;
			}
		}

		.dataListRow {
			display: flex;
			border-bottom: 1px solid var(--border-color);

			//border-radius: 6px;
			margin: 0.25rem 0;

			.dataListCell {
				padding: 8px;
				color: var(--theme-color-text);
			}
		}
	}
</style>
