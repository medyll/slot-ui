<script>import { setContext } from 'svelte';
import { createEventForwarder } from '../../engine/engine';
import { each, get_current_component } from 'svelte/internal';
import Virtualize from '../virtualize/Virtualize.svelte';
import { writable } from 'svelte/store';
import { browser } from '$app/env';
import { slotUiComponentList } from '../../sitedata/componentList';
import DataListRow from './DataListRow.svelte';
import DataListCell from './DataListCell.svelte';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
export let style = undefined;
export let data = [];
const dataListStore = writable([]);
setContext('dataListContext', dataListStore);
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

<style global>:global(.dataList) {
  height: 100%;
  position: relative;
}
:global(.dataList) :global(.dataListHead) {
  display: flex;
  margin-bottom: 0.5rem;
}
:global(.dataList) :global(.dataListHead) :global(.dataListCell) {
  padding: 8px;
  overflow: hidden;
}
:global(.dataList) :global(.dataListRow) {
  display: flex;
  border-bottom: 1px solid #ccc;
  border-radius: 6px;
  margin: 0.25rem 0;
}
:global(.dataList) :global(.dataListRow) :global(.dataListCell) {
  padding: 8px;
  color: var(--theme-color-text);
}</style>
