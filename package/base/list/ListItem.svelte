<svelte:options accessors={true}/>

<script>import { getContext } from 'svelte';
import { createEventDispatcher, custom_event, get_current_component } from 'svelte/internal';
import { createEventForwarder } from '../../engine/engine';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let icon;
export let primary;
export let secondary;
export let action;
export let selected;
// data to hold
export let data = {};
export let density = 'default';
let ref;
let listStateContext = getContext('listStateContext');
const dispatch = createEventDispatcher();
const handleClick = () => () => {
    const event = custom_event('listclicked', data, { bubbles: true });
    ref.dispatchEvent(event);
};
let isActive = false;
$: if ($listStateContext?.selectorField) {
    isActive = listStateContext.selector($listStateContext.selectorField, data);
}
</script>

<li
        bind:this={ref}
        class="listItem density-{density}"
        class:isActive
        on:click={handleClick()}>
    <span class="listItemChip"/>
    <div class="listItemIcon">
        <slot name="icon"/>
    </div>
    <div class="listItemContent">
        <div>
            <slot name="primary"/>
        </div>
        <div class="itemSecondary">
            <slot name="secondary"/>
        </div>
    </div>
    <div class="listItemAction">
        <slot name="action"/>
    </div>
</li>


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
}

:global(.listItem.density-tight) {
  padding: 0.5rem 0;
  margin: 0.125rem 0;
}

:global(.listItem.density-default) {
  padding: 1rem 0;
  margin: 0.25rem 0;
}

:global(.listItem.density-kind) {
  padding: 1.5rem 0;
  margin: 0.5rem 0;
}

:global(.listItemIcon) {
  text-align: center;
  padding: 0 0.5rem;
  width: 2rem;
  overflow: hidden;
  opacity: 0.8;
}</style>
