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
export let bordered = false;
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

<style >.menu {
  margin: 0;
  min-width: 150px;
  padding: 0.25rem;
  cursor: pointer;
  display: inline-block;
  background-color: var(--theme-color-background);
  color: var(--theme-color-text);
}
.menu.bordered {
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}
.menu.density-tight .menuItem {
  padding: 0.25rem 0;
}
.menu.density-default .menuItem {
  padding: 0.5rem 0;
}
.menu.density-kind .menuItem {
  padding: 1rem 0;
}

.menuItem {
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.menuItem:hover {
  background-color: var(--theme-color-paper, rgba(255, 255, 255, 0.3));
}
.menuItem.selected {
  background-color: var(--theme-color-paper, rgba(255, 255, 255, 0.9));
  box-shadow: var(--box-shad-1);
}
.menuItem .menuItemIcon {
  width: 24px;
  max-width: 24px;
  text-align: center;
  overflow: hidden;
}
.menuItem .menuItemText {
  flex: 1;
  padding-left: 0.25rem;
}
.menuItem .menuItemActions {
  display: block;
}
.menuItem.density-tight {
  padding: 0.25rem 0;
}
.menuItem.density-default {
  padding: 0.5rem 0;
}
.menuItem.density-kind {
  padding: 1rem 0;
}</style>
