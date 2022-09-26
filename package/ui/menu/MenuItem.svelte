<svelte:options accessors={true} />

<script>import { getContext } from 'svelte';
import { custom_event, get_current_component, null_to_empty } from 'svelte/internal';
import Divider from '../../base/divider/Divider.svelte';
import Icon from '../../base/icon/Icon.svelte';
import { createEventForwarder } from '../../engine/engine.js';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = undefined;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let text;
export let icon = undefined;
export let iconColor = undefined;
export let iconSize = 'small';
export let divider = false;
export let data = { empty: 'menu item data' };
/** highlight menu item when selected*/
export let selected = false;
export let onMenuItemClick = () => { };
const menuStateContext = getContext('menuStateContext');
if (icon || $$slots.iconSLot) {
    $menuStateContext.hasIcon = true;
}
const handleClick = (data) => () => {
    const event = custom_event('menu:item:clicked', data, { bubbles: true });
    if (element)
        element.dispatchEvent(event);
    onMenuItemClick(data);
};
</script>

<li
	class="menuItem"
	class:selected
	role="menuitem"
	bind:this={element}
	use:forwardEvents
	on:click={handleClick(data)}
>
	{#if $menuStateContext?.hasIcon}
		<div class="menuItemIcon">
			<slot name="iconSLot">
				<Icon {icon} color={iconColor} fontSize={iconSize} /></slot
			>
		</div>
	{/if}
	<div class="menuItemText">
		<slot>
			<slot name="textSlot">{text}</slot>
		</slot>
	</div>
	{#if $$slots.actionSlot}
		<div class="menuItemActions">
			<slot name="actionSlot" />
		</div>
	{/if}
</li>
{#if divider}
	<li>
		<Divider density="tight" expansion="centered" />
	</li>
{/if}

<style global>:global(.menu) {
  margin: 0;
  min-width: 150px;
  padding: 0.25rem;
  cursor: pointer;
  background-color: var(--theme-color-background);
  color: var(--theme-color-text);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}
:global(.menu.density-tight) :global(.menuItem) {
  padding: 0.25rem 0;
}
:global(.menu.density-default) :global(.menuItem) {
  padding: 0.5rem 0;
}
:global(.menu.density-kind) :global(.menuItem) {
  padding: 1rem 0;
}
:global(.menu) :global(.menuItem) {
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
:global(.menu) :global(.menuItem:hover) {
  background-color: var(--theme-bg-paper, rgba(255, 255, 255, 0.3));
}
:global(.menu) :global(.menuItem.selected) {
  background-color: var(--theme-bg-paper, rgba(255, 255, 255, 0.3));
}
:global(.menu) :global(.menuItem) :global(.menuItemIcon) {
  width: 24px;
  max-width: 24px;
  text-align: center;
  overflow: hidden;
}
:global(.menu) :global(.menuItem) :global(.menuItemText) {
  flex: 1;
  padding-left: 0.25rem;
}
:global(.menu) :global(.menuItem) :global(.menuItemActions) {
  display: block;
}
:global(.menu) :global(.menuItem.density-tight) {
  padding: 0.25rem 0;
}
:global(.menu) :global(.menuItem.density-default) {
  padding: 0.5rem 0;
}
:global(.menu) :global(.menuItem.density-kind) {
  padding: 1rem 0;
}</style>
