<script>import { setContext } from 'svelte';
import { createEventForwarder } from '../../engine/engine.js';
import { custom_event, each, get_current_component } from 'svelte/internal';
import Virtualize from '../virtualizer/Virtualizer.svelte';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import DataListRow from './DataListRow.svelte';
import DataListCell from './DataListCell.svelte';
import { dataOp } from '../../engine/utils.js';
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
/** set noWrap = true to have ellipsis on all cells content*/
export let noWrap = true;
/** represents your data types used to display values */
export let dataTypes = undefined;
/** data to loop  trought */
export let data = [];
/** used only if data is provided */
export let idField = undefined;
let sortedData;
$: sortedData = data;
const sortState = ['none', 'asc', 'desc'];
export let sortingIcons = {
    default: ['dots-horizontal', 'sort-bool-ascending', 'sort-bool-descending'],
    numeric: ['dots-horizontal', 'sort-bool-ascending', 'sort-bool-descending']
};
/** context store for dataList config and state */
let dataListStore = writable({
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
    idField,
    columns: [],
    data
});
let dataListContext = setContext('dataListContext', dataListStore);
function doSort(e) {
    const next = sortState.indexOf(e.detail.order ?? sortByOrder) + 1;
    let toggleOrder = sortState?.[next] ? sortState[next] : sortState[0];
    // let toggleOrder = order === 'asc' ? 'desc' : 'asc';
    if (toggleOrder === 'none')
        toggleOrder = 'asc';
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
>
	{#if element}
		<Virtualize height="100%" data={sortedData} let:item>
			<svelte:fragment slot="virtualizeHeaderSlot">
				<slot name="head" />
			</svelte:fragment>
			{#if item}
				{#if $$slots.default}
					<slot {item} />
				{:else}
					<DataListRow data={item}>
						{#each Object.keys(item) as inItem}
							<DataListCell dataField={inItem}>
								{item?.[inItem]}
							</DataListCell>
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
}
:global(.dataList) :global(.dataListHead) :global(.dataListCell) {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-right: 1px solid var(--border-color);
  position: relative;
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
:global(.dataList) :global(.dataListRow:hover) {
  background-color: var(--theme-color-paper);
}
:global(.dataList) :global(.dataListRow[data-selected=true]) {
  background-color: var(--theme-color-primary);
}
:global(.dataList) :global(.dataListRow[data-selected=true]) :global(.dataListCell) {
  color: white;
}
:global(.dataList) :global(.dataListRow) :global(.dataListCell) {
  padding: 8px;
  color: var(--theme-color-text);
  border-right: 1px solid var(--border-color);
}
:global(.dataList) :global(.dataListRow) :global(.dataListCell[data-noWrap=true]) {
  display: box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical; */
}</style>
