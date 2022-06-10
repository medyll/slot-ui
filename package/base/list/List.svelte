<script>import ListItem from './ListItem.svelte';
import { setContext } from 'svelte';
import { createListStore } from './store';
import { get_current_component, null_to_empty } from 'svelte/internal';
import Icon from '../icon/Icon.svelte';
import ListTitle from './ListTitle.svelte';
import { createEventForwarder } from '../../engine/engine';
import Virtualize from '../virtualize/Virtualize.svelte';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let listItems;
export let direction = 'vertical';
export let height = '100%';
export let style = '';
export let showIcon = true;
export let noVirtualize = false;
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

<ul bind:this={element} class="density-{density}"
    on:listclicked={onListItemClick}
    style="position:relative;height:{height};margin:0;padding:0;{style}"
    use:forwardEvents>
    {#if $$slots.title || title}
        <slot name="title">
            <ListTitle primary={title}/>
        </slot>
    {/if}
    {#if listItems}
        {#if !noVirtualize}
            {#if $$slots.default }
                <Virtualize height="100%" items={listItems} let:item>
                    <slot listItem={item}/>
                </Virtualize>
            {:else}
                <Virtualize itemHeight="35px" height="100%" items={listItems} let:item>
                    <ListItem density={density} data={item.data}>
                        <span slot="icon"><Icon fontSize="tiny" icon={item?.icon}/></span>
                        <span slot="primary">{null_to_empty(item?.primary)}</span>
                        <span slot="secondary">{null_to_empty(item?.secondary)}</span>
                        <span slot="action">{null_to_empty(item?.action)}</span>
                    </ListItem>
                </Virtualize>
            {/if}
        {:else}
            {#each listItems as item  }
                <slot listItem={item}>
                    <ListItem density={density} data={item.data}>
                        <span slot="icon"><Icon fontSize="tiny" icon={item?.icon}/></span>
                        <span slot="primary">{null_to_empty(item?.primary)}</span>
                        <span slot="secondary">{null_to_empty(item?.secondary)}</span>
                        <span slot="action">{null_to_empty(item?.action)}</span>
                    </ListItem>
                </slot>
            {/each}
        {/if}
    {/if}
</ul>

<style global>:global(li.listItemTitle),
:global(li.listItem) {
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  margin: 0 0.25rem;
}
:global(li.listItemTitle) :global(.listItemContent),
:global(li.listItem) :global(.listItemContent) {
  flex: 1;
  padding: 0 0.5rem;
}
:global(li.listItemTitle) :global(.listItemContent) :global([slot=secondary]),
:global(li.listItem) :global(.listItemContent) :global([slot=secondary]) {
  opacity: 0.8;
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
  margin: 0.125rem 0.5rem;
}
:global(li.listItemTitle.density-default),
:global(li.listItem.density-default) {
  padding: 1rem 0;
  margin: 0.25rem 0.5rem;
}
:global(li.listItemTitle.density-kind),
:global(li.listItem.density-kind) {
  padding: 1.5rem 0;
  margin: 0.5rem 0.5rem;
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

