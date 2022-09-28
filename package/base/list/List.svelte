<script>import ListItem from './ListItem.svelte';
import { setContext } from 'svelte';
import { createListStore } from './store';
import { compute_slots, get_current_component, null_to_empty } from 'svelte/internal';
import Icon from '../icon/Icon.svelte';
import ListTitle from './ListTitle.svelte';
import { createEventForwarder } from '../../engine/engine';
import Virtualize from '../virtualize/Virtualize.svelte';
import { dataOp, propsProxy } from '../../engine/utils';
import Divider from '../divider/Divider.svelte';
import Sorterer from '../../data/sorter/Sorterer.svelte';
// set store
const listStore = createListStore();
setContext('listStateContext', listStore);
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/** formated listItems list  */
export let listItems = undefined;
/** provided raw data, used if no listItems list is provided  */
export let data = undefined;
/** Row from data for primary, used if props.data is provided  */
export let dataFieldPrimary = undefined;
/** Row from data for secondary, used if props.data is provided  */
export let dataFieldSecondary = undefined;
/** Row from data for secondary, used if props.data is provided  */
export let dataFieldIcon = undefined;
export let height = '100%';
export let style = '';
export let showIcon = true;
export let virtualize = false;
export let selectorField;
/** show divider between listItems */
export let showDivider = false;
/** props for Divider, if present*/
export let dividerProps = {};
/** Sorterer component inclusion. Inferred */
export let sorterer = undefined;
/** set selected data by dataKey value*/
export let selectedDataKey = undefined;
/** set selected data by data object */
export let setSelectedData = {};
/** set selected data by selectedItem object */
export let setSelectedItem = {};
export let onItemClick = ({}) => { };
/** @deprecated use primary title  */
export let title = '';
/** displayed as H5*/
export let primary = undefined;
/** secondary title */
export let secondary = undefined;
/** icon for the  title  zone*/
export let icon = undefined;
/** fieldName by wich we will group */
export let groupBy = undefined;
let groupedData;
/** List will not be clickable and will gain opacity */
export let disabled = false;
export let density = 'default';
/** binding for selectedData */
export let activeData = $listStore.activeData;
/** sortedData if props.sorterer*/
let sortedData;
let virtualHeight = undefined;
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
    }
    else {
    }
}
// if data, build some list items
$: if (data) {
    if (dataFieldPrimary || dataFieldSecondary) {
        listItems = propsProxy([
            ['primary', dataFieldPrimary ?? '"'],
            ['secondary', dataFieldSecondary ?? '"'],
            ['icon', dataFieldIcon ?? '"']
        ], data);
    }
    else {
        try {
            listItems = data.map((dta) => {
                return {
                    primary: dta?.name ?? dta.code,
                    secondary: dta?.id,
                    data: dta
                };
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}
// $: console.log({ sortedData, data });
/** on listItem clicked, we set activeData to e.LisItemProps*/
function onListItemClick(e) {
    if (disabled) {
        e.stopPropagation();
        return;
    }
    //e?.currentTarget?.scrollIntoView();
    listStore.setActiveData(e.detail?.data); // should be  e.detail.data
    listStore.setActiveItem(e.detail);
    onItemClick && onItemClick(e.detail);
}
function onListItemClick_Deprecated(e) {
    if (disabled) {
        e.stopPropagation();
        return;
    }
    listStore.setActiveData(e.detail); // should be  e.detail.data
    onItemClick && onItemClick(e.detail);
}
function navigateList(e) {
    if (![38, 40].includes(e.keyCode))
        return;
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
            tt = dataOp.findObjectIndex(listItems, $listStore.activeItem.data[selectorField], 'data.' + selectorField);
        }
    }
    else if (data) {
        if (selectorField) {
            tt = dataOp.findObjectIndex(data, $listStore.activeData[selectorField], selectorField);
        }
    }
    if (tt === -1)
        return;
    const dir = e.keyCode === 38 ? tt - 1 : tt + 1;
    if (listItems && listItems[dir]) {
        $listStore.activeItem = listItems[dir];
        $listStore.activeData = listItems[dir]?.data;
    }
    else if (data) {
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

<style global>:global(ul) {
  display: flex;
  flex-direction: columns;
}

:global(ul:focus) {
  outline: 0;
  outline-offset: -4px;
}

:global(li.listItemTitle),
:global(li.listItem) {
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  margin: 0 0.25rem;
  max-width: 100%;
}
:global(li.listItemTitle) :global(.listItemContent),
:global(li.listItem) :global(.listItemContent) {
  flex: 1;
  padding: 0 0.5rem;
  min-width: auto;
  overflow: hidden;
}
:global(li.listItemTitle) :global(.listItemContent) :global([slot=primary]),
:global(li.listItem) :global(.listItemContent) :global([slot=primary]) {
  text-overflow: ellipsis;
  display: block;
  width: 100%;
  overflow: hidden;
}
:global(li.listItemTitle) :global(.listItemContent) :global([slot=secondary]),
:global(li.listItem) :global(.listItemContent) :global([slot=secondary]) {
  opacity: 0.8;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
  overflow: hidden;
}
:global(li.listItemTitle) :global(.listItemAction),
:global(li.listItem) :global(.listItemAction) {
  padding: 0 0.5rem;
}
:global(li.listItemTitle) :global(.listItemIcon),
:global(li.listItem) :global(.listItemIcon) {
  text-align: center;
  width: 2rem;
  min-width: 2rem;
  overflow: hidden;
  opacity: 0.8;
}
:global(li.listItemTitle.density-tight),
:global(li.listItem.density-tight) {
  padding: 0.5rem 0;
}
:global(li.listItemTitle.density-default),
:global(li.listItem.density-default) {
  padding: 1rem 0;
}
:global(li.listItemTitle.density-kind),
:global(li.listItem.density-kind) {
  padding: 1.5rem 0;
}

:global(li.listItemTitle) {
  position: sticky;
  margin-top: 1px !important;
  top: 1px;
  background-color: var(--theme-color-background-alpha-low);
  backdrop-filter: blur(1px);
  z-index: 1;
}

:global(li.listItem:hover) {
  background-color: rgba(255, 255, 255, 0.3);
}
:global(li.listItem.isActive) {
  background-color: var(--slotui-listitem-active-background, var(--theme-color-primary-alpha-high, black));
  box-shadow: var(--slotui-listitem-active-boxshadow, var(shad-3));
}
:global(li.listItem.isActive) :global(.listItemChip) {
  position: absolute;
  height: 50%;
  width: 3px;
  background-color: var(--theme-color-primary);
  border-radius: 8px;
  left: -1px;
}</style>
