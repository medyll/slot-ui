<svelte:options accessors={true} />

<script>import { setContext, getContext, hasContext } from 'svelte/internal';
import { createEventForwarder } from '../../engine/engine.js';
import { get_current_component } from 'svelte/internal';
import Virtualize from '../virtualizer/Virtualizer.svelte';
import { writable } from 'svelte/store';
import DataListRow from './DataListRow.svelte';
import { dataOp } from '../../engine/utils.js';
import DataListHead from './DataListHead.svelte';
import Icon from '../icon/Icon.svelte';
import Button from '../button/Button.svelte';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
export let style = undefined;
/** show or hide the dataList body */
export let hideBody = false;
/** show or hide the dataList headere */
export let showHeader = true;
/** is the datalist sortable */
export let isSortable = true;
/** order on which the sorted list is sorted */
export let sortByOrder = 'none';
/** group field on which data will be grouped, can use dot notation as dot path */
export let groupByField = undefined;
/** options used when props.groupByField is defined */
export let groupByOptions = {
    showMainHeader: true,
    showSubGroupsHeader: true,
    showEmptyGroup: false
};
/** field used for selection*/
export let selectorField = 'id';
/** field value used for selection*/
export let selectorFieldValue = undefined;
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
/** columns declaration */
export let columns = {};
export let virtualizer = false;
let hidedGroups = {};
let sortedData;
$: sortedData = data?.filter((x) => x);
export let sortingIcons = {
    default: ['mdi:dots-horizontal', 'mdi:sort-bool-ascending', 'mdi:sort-bool-descending'],
    numeric: ['mdi:dots-horizontal', 'mdi:sort-bool-ascending', 'mdi:sort-bool-descending']
};
if (hasContext('dataListContext')) {
    getContext('dataListContext');
}
else {
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
        groupBy: {
            groupByField,
            groupByOptions
        },
        idField,
        columns,
        hasColumnsProps: Boolean(Object.keys(columns).length),
        data
    });
    setContext('dataListContext', dataListStore);
}
function doSort(e) {
    if (e.detail.field) {
        activeCommonSortField = e.detail.field;
        sortByOrder = e.detail.order;
        if (e.detail.order === 'none') {
            sortedData = data;
        }
        else {
            sortedData = dataOp.sortBy(data, e.detail.field, e.detail.order);
        }
    }
}
function doSelect(e) {
    const selectedItem = e.detail;
    selectorFieldValue = selectedItem?.[selectorField];
    console.log(selectorField, e.detail);
}
function getGroupProps(content) {
    return {
        ...content,
        columns,
        style,
        groupByField: false,
        groupByOptions,
        showHeader: groupByOptions.showSubGroupsHeader,
        selectorField,
        selectorFieldValue
    };
}
$: groups = groupByField ? dataOp.groupBy(data, groupByField, { keepUngroupedData: Boolean(groupByOptions.showEmptyGroup) }) : {};
</script>

{#if groupByField}
	{#if groupByOptions?.showMainHeader}
		<DataListHead />
	{/if}
	<div bind:this={element} class="flex-v h-full">
		{#each Object.keys(groups) as red}
			{@const groupProps = getGroupProps({ data: groups[red] })}
			{@const item = groups[red]}
			<div class="flex-v h-full">
				<div class="">
					<slot name="groupTitleSlot" {item}>
						<div class="flex-h flex-align-middle pad gap-medium">
							<div><Icon icon="folder" /></div>
							<div class="flex-main">{groupByField} : {red}</div>
							<div>{groups[red]?.length}</div>
							<div class="pad-l border-l">
								<Button
									on:click={() => {
										hidedGroups[red] = !hidedGroups[red]
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
			<Virtualize height="350px" data={sortedData} let:item>
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

:global(.dataListHead) {
  display: flex;
  margin: 0.5rem 0;
  align-items: stretch;
  height: 32px;
  z-index: 100;
  background-color: var(--theme-color-paper-alpha-low);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-tiny);
  box-shadow: var(--box-shad-1);
  border: 1px solid var(--border-color);
}
:global(.dataListHead) :global(.dataListCell) {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-right: 1px solid var(--border-color);
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
:global(.dataListHead) :global(.dataListCell:last-of-type) {
  border-right: 1px solid transparent;
}
:global(.dataListHead) :global(.dataListCell[data-sortable=true]) {
  cursor: pointer;
}
:global(.dataListHead) :global(.dataListCell[data-sortable=true]:hover) {
  background-color: var(--theme-color-primary-alpha);
}
:global(.dataListHead) :global(.dataListCell) :global(.cellHeader) {
  display: flex;
  align-items: center;
  min-width: 0;
  width: 100%;
}
:global(.dataListHead) :global(.dataListCell) :global(.cellHeader) :global(.cellHeaderContent) {
  flex: 1;
  overflow: hidden;
  padding: 0 8px;
}
:global(.dataListRow) {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  /* border-radius: 6px;
  	margin: 0.25rem 0; */
}
:global(.dataListRow:last-of-type) {
  border-bottom: 1px solid transparent;
}
:global(.dataListRow:hover) {
  background-color: var(--theme-color-paper);
}
:global(.dataListRow[data-selected=true]) {
  background-color: var(--theme-color-primary);
}
:global(.dataListRow[data-selected=true]) :global(.dataListCell) {
  color: white;
}
:global(.dataListRow) :global(.dataListCell) {
  padding: 0.5rem 0.5rem;
  color: var(--theme-color-text);
  border-right: 1px solid var(--border-color);
}
:global(.dataListRow) :global(.dataListCell:last-of-type) {
  border-right: 1px solid transparent;
}
:global(.dataListRow) :global(.dataListCell[data-noWrap=true]) {
  display: box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* display: -webkit-box;
  	-webkit-line-clamp: 1;
  	-webkit-box-orient: vertical; */
}</style>
