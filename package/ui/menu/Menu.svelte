<script>import { setContext } from 'svelte';
import MenuItem from './MenuItem.svelte';
import { createMenuStore } from './store.js';
import { createEventForwarder } from '../../engine/engine.js';
import { custom_event, get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let menuList = [];
export let density = 'tight';
export let style = undefined;
/** menu can have no border */
export let bordered = true;
const menuStore = createMenuStore();
setContext('menuStateContext', menuStore);
$menuStore.density = density;
function onMenuClick(e) {
    // onMenuItemClick && onMenuItemClick(e.detail);
    const event = custom_event('menu:clicked', e.detail, { bubbles: true });
    element.dispatchEvent(event);
}
function sayHello() { }
</script>

<ul use:forwardEvents bind:this={element} role="menu" class="density-{density} menu {className}" {style} 
class:bordered
on:menu:item:clicked={onMenuClick} >
	{#if menuList}
		{#each menuList as menuItem}
			<slot item={menuItem} {menuItem}>
				<MenuItem {...menuItem} /> 
			</slot>
		{/each}
	{/if}
	<slot />
</ul>

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
