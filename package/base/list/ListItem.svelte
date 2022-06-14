<svelte:options accessors={true} />

<script>import { getContext } from 'svelte';
import { fade, slide } from 'svelte/transition';
import { createEventDispatcher, custom_event, get_current_component, null_to_empty } from 'svelte/internal';
import { createEventForwarder } from '../../engine/engine';
import Icon from '../icon/Icon.svelte';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let icon = null;
export let primary = null;
export let secondary = null;
export let action = null;
export let selected;
export let showIcon = true;
export let transition = undefined;
// data to hold
export let data = {};
export let density = 'default';
let listStateContext = getContext('listStateContext');
const handleClick = () => () => {
    const event = custom_event('listclicked', data, { bubbles: true });
    element.dispatchEvent(event);
};
const handleDblClick = () => () => {
    const event = custom_event('list:dblclicked', data, { bubbles: true });
    element.dispatchEvent(event);
};
function doTransition() {
    return transition;
}
let isActive = false;
$: if ($listStateContext?.selectorField) {
    isActive = listStateContext.selector($listStateContext.selectorField, data);
}
</script>

<li
	bind:this={element}
	class="listItem density-{density} {className}"
	class:isActive
	on:click={handleClick()}
	on:dblclick={handleDblClick()}
>
	<span class="listItemChip" />
	{#if showIcon}
		<div class="listItemIcon">
			<slot name="icon">
				{#if icon}<div><Icon {icon} /></div>{/if}
			</slot>
		</div>
	{/if}
	<div class="listItemContent" title="{secondary}">
		<div>
			<slot name="primary">
				{null_to_empty(primary)}
			</slot>
		</div>
		<div class="itemSecondary">
			<slot name="secondary">
				{null_to_empty(secondary)}
			</slot>
		</div>
	</div>
	<div class="listItemAction">
		<slot name="action">
			{null_to_empty(action)}
		</slot>
	</div>
</li>

<style global>:global(li.listItemTitle),
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
  background-color: var(--slotui-listitem-active-background, var(--theme-color-primary-alpha-high, black));
  box-shadow: var(--slotui-listitem-active-boxshadow, var(shad-3));
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
}</style>
