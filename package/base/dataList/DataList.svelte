<script>import { setContext } from 'svelte';
import { createEventForwarder } from '../../engine/engine';
import { each, get_current_component } from 'svelte/internal';
import Virtualize from '../virtualize/Virtualize.svelte';
import { writable } from 'svelte/store';
import { browser } from '$app/env';
import { slotUiComponentList } from '../../sitedata/componentList';
import DataListRow from './DataListRow.svelte';
import DataListCell from './DataListCell.svelte';
import { dataOp } from '../../engine/utils';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
export let style = undefined;
/** is the datalist sortable */
export let isSortable = true;
/** order on which the sorted list is sorted */
export let sortByOrder = 'none';
/** binding, used when multiple buttons*/
export let activeCommonSortField = '';
export let data = [];
let sortedData = data;
const sortState = ['none', 'asc', 'desc'];
export let sortingIcons = {
    default: ['dots-horizontal', 'sort-bool-ascending', 'sort-bool-descending'],
    numeric: ['dots-horizontal', 'sort-bool-ascending', 'sort-bool-descending'],
};
/** context store for dataList config*/
const dataListStore = writable({
    config: {
        isSortable,
        defaultSortByField: undefined,
        defaultSortByOrder: sortByOrder,
        sortingIcons
    },
    sortBy: {
        activeSortByField: undefined,
        activeSortByOrder: 'none',
    },
    data,
    columns: []
});
let dataListContext = setContext('dataListContext', dataListStore);
function doSort(e) {
    const next = sortState.indexOf(e.detail.order ?? sortByOrder) + 1;
    let toggleOrder = sortState?.[next] ? sortState[next] : sortState[0];
    if (e.detail.field) {
        activeCommonSortField = e.detail.field;
        sortByOrder = toggleOrder ?? 'none';
        if (e.detail.order === 'none') {
            sortedData = data;
        }
        else {
            sortedData = dataOp.sortBy(data, e.detail.field, toggleOrder);
        }
        // update context
        $dataListContext.sortBy.activeSortByField = e.detail.field;
        $dataListContext.sortBy.activeSortByOrder = toggleOrder;
    }
}
</script>

<div
	use:forwardEvents
	on:datalist:sort:clicked={doSort}
	bind:this={element}
	class="dataList  {className}"
	{style}
	tabindex="0"
>	{#if element}
		<Virtualize height="100%" items={sortedData} let:item>
			<svelte:fragment slot="virtualizeHeaderSlot">
				<slot name="head" />
			</svelte:fragment>
			{#if item}
				{#if $$slots.default}
					<slot {item} />
				{:else}
					<DataListRow data={item}>
						{#each Object.keys(item) as inItem}
							<DataListCell dataField={inItem}>{item?.[inItem]}</DataListCell>
						{/each}
					</DataListRow>
				{/if}
			{/if}
		</Virtualize>
	{/if}
	<slot name="foot" />
</div>

<style global>:global([data-theme=dark]) {
  --border-color: rgba(255, 255, 255, 0.1);
}

:global([data-theme=light]) {
  --border-color: rgba(0, 0, 0, 0.1);
}

:global(.dataList) {
  height: 100%;
  position: relative;
}
:global(.dataList) :global(.dataListHead) {
  display: flex;
  margin-bottom: 0.5rem;
  align-items: stretch;
  height: 32px;
  background-color: var(--theme-color-paper-alpha-low);
  backdrop-filter: blur(1px);
  border-radius: var(--radius-tiny);
}
:global(.dataList) :global(.dataListHead) :global(.dataListCell) {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-right: 1px solid var(--border-color);
}
:global(.dataList) :global(.dataListHead) :global(.dataListCell[data-sortable=true]) {
  cursor: pointer;
}
:global(.dataList) :global(.dataListHead) :global(.dataListCell[data-sortable=true]:hover) {
  background-color: var(--theme-color-primary-alpha);
}
:global(.dataList) :global(.dataListHead) :global(.dataListCell) :global(.cellHeader) {
  display: flex;
  align-items: center;
  min-width: 0;
  width: 100%;
}
:global(.dataList) :global(.dataListHead) :global(.dataListCell) :global(.cellHeader) :global(.cellHeaderContent) {
  flex: 1;
  overflow: hidden;
  padding: 0 8px;
}
:global(.dataList) :global(.dataListRow) {
  display: flex;
  border-bottom: 1px solid var(--border-color);
}
:global(.dataList) :global(.dataListRow) :global(.dataListCell) {
  padding: 8px;
  color: var(--theme-color-text);
  border-right: 1px solid var(--border-color);
}</style>
