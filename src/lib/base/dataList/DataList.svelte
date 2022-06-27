<script lang="ts">
	import { setContext } from 'svelte';
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component } from 'svelte/internal';
	import Virtualize from '../virtualize/Virtualize.svelte';
	import { writable, type Writable } from 'svelte/store';
	import { browser } from '$app/env';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());

	export let style: string | undefined = undefined;

	export let items: any[] = [];

	const dataListStore = writable([]);
	setContext<Writable<any[]>>('dataListContext', dataListStore);
</script>

<div use:forwardEvents bind:this={element} class="dataList  {className}" {style}>
	{#if browser}
		<Virtualize height="100%" {items} let:item>
			<svelte:fragment slot="virtualizeHeaderSlot">
				<slot name="head">virtualizeHeaderSlot</slot>
			</svelte:fragment>
			<slot {item} />
		</Virtualize>
	{/if}
	<slot name="foot" />
</div>

<style global lang="scss">
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
			border-bottom: 1px solid #ccc;
			border-radius: 6px;
			margin: 0.25rem 0;

			.dataListCell {
				padding: 8px;
				color: var(--theme-color-text);
			}
		}
	}
</style>
