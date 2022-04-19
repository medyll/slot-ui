
<script >import ListItem from './ListItem.svelte';
import { setContext } from 'svelte';
import { createListStore } from './store';
import { get_current_component, null_to_empty } from 'svelte/internal';
import { toFa } from '../../engine/utils';
import Icon from '../icon/Icon.svelte';
import ListTitle from './ListTitle.svelte';
import VirtualList from '@sveltejs/svelte-virtual-list';
import { createEventForwarder } from '../../engine/engine';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let listItems;
export let direction = 'vertical';
export let style = '';
export let selectorField;
export let onItemClick;
export let title;
export let density = 'default';
const listStore = createListStore();
setContext('listStateContext', listStore);
$listStore.density = density;
listStore.setSelectorField(selectorField);
function onListItemClick(e) {
    listStore.setActiveData(e.detail);
    onItemClick && onItemClick(e.detail);
}
</script>

<ul class="density-{density}" on:list:listItem:clicked={onListItemClick} bind:this={element} style="{style}">
    {#if $$slots.title || title}
        <slot name="title">
            <ListTitle primary={title}/>
        </slot>
    {/if}
    {#if listItems}
        <VirtualList items={listItems} let:item>
            <slot listItem={item}>
                <ListItem density={density} data={item.data}>
                    <span slot="icon"><Icon fontSize="tiny" icon={toFa(item.icon)}/></span>
                    <span slot="primary">{null_to_empty(item.primary)}</span>
                    <span slot="action">{null_to_empty(item.action)}</span>
                </ListItem>
            </slot>
        </VirtualList>
    {/if}
    {#if !listItems}
        <slot></slot>
    {/if}
</ul>

<style  global>:global(li.listItemTitle),
:global(li.listItem) {
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
}
:global(li.listItemTitle) :global(.listItemContent),
:global(li.listItem) :global(.listItemContent) {
  flex: 1;
  padding: 0 0.5rem;
}
:global(li.listItemTitle) :global(.listItemAction),
:global(li.listItem) :global(.listItemAction) {
  padding: 0 0.5rem;
}
:global(li.listItemTitle) :global(.listItemIcon),
:global(li.listItem) :global(.listItemIcon) {
  text-align: center;
  padding: 0 0.5rem;
  overflow: hidden;
}
:global(li.listItemTitle.density-tight),
:global(li.listItem.density-tight) {
  padding: 0.5rem 0;
  margin: 0.125rem 0;
}
:global(li.listItemTitle.density-default),
:global(li.listItem.density-default) {
  padding: 1rem 0;
  margin: 0.25rem 0;
}
:global(li.listItemTitle.density-kind),
:global(li.listItem.density-kind) {
  padding: 1.5rem 0;
  margin: 0.5rem 0;
}

:global(.listItemTitle) :global(.listItemContent) :global([slot=primary]) {
  color: red;
}

:global(li.listItem:hover) {
  background-color: rgba(255, 255, 255, 0.3);
}
:global(li.listItem.isActive) {
  background-color: rgba(255, 255, 255, 0.3);
}
:global(li.listItem.isActive) :global(.listItemChip) {
  position: absolute;
  height: 50%;
  width: 3px;
  background-color: maroon;
  border-radius: 8px;
  left: -1px;
}</style>

