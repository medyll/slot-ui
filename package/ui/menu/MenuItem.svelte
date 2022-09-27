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
export let text = undefined;
/** text props, shown on the right side of the menuItem*/
export let action = undefined;
export let icon = undefined;
export let iconColor = undefined;
export let iconSize = 'small';
export let divider = false;
export let dividerBefore = false;
export let data = { empty: 'menu item data' };
/** highlight menu item when selected*/
export let selected = false;
export let onMenuItemClick = () => { };
const menuStateContext = getContext('menuStateContext');
if (icon || $$slots.iconSlot) {
    $menuStateContext.hasIcon = true;
}
const handleClick = (data) => () => {
    const event = custom_event('menu:item:clicked', data, { bubbles: true });
    if (element)
        element.dispatchEvent(event);
    onMenuItemClick(data);
};
</script>

{#if dividerBefore}
	<li>
		<slot name="divider"><Divider density="tight" expansion="centered" /></slot>
	</li>
{/if}
<li
	class="menuItem {className}"
	class:selected
	role="menuitem"
	bind:this={element}
	use:forwardEvents
	on:click={handleClick(data)}
>
	{#if $menuStateContext?.hasIcon}
		<div class="menuItemIcon">
			<slot name="iconSlot">
				<Icon {icon} color={iconColor} fontSize={iconSize} /></slot
			>
		</div>
	{/if}
	<div class="menuItemText">
		<slot>
			<slot name="textSlot">{null_to_empty(text)}</slot>
		</slot>
	</div>
	{#if $$slots.actionSlot || action}
		<div class="menuItemActions">
			<slot name="actionSlot" >{action}</slot>
		</div>
	{/if}
</li>
{#if divider}
	<li>
		<slot name="divider"><Divider density="tight" expansion="centered" /></slot>
	</li>
{/if}

<style global>:global(.menu) {
  margin: 0;
  min-width: 150px;
  padding: 0.25rem;
  cursor: pointer;
  display: inline-block;
  background-color: var(--theme-color-background);
  color: var(--theme-color-text);
}
:global(.menu.bordered) {
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

:global(.menuItem) {
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
:global(.menuItem:hover) {
  background-color: var(--theme-color-paper, rgba(255, 255, 255, 0.3));
}
:global(.menuItem.selected) {
  background-color: var(--theme-color-paper, rgba(255, 255, 255, 0.9));
  box-shadow: var(--box-shad-1);
}
:global(.menuItem) :global(.menuItemIcon) {
  width: 24px;
  max-width: 24px;
  text-align: center;
  overflow: hidden;
}
:global(.menuItem) :global(.menuItemText) {
  flex: 1;
  padding-left: 0.25rem;
}
:global(.menuItem) :global(.menuItemActions) {
  display: block;
}
:global(.menuItem.density-tight) {
  padding: 0.25rem 0;
}
:global(.menuItem.density-default) {
  padding: 0.5rem 0;
}
:global(.menuItem.density-kind) {
  padding: 1rem 0;
}</style>
