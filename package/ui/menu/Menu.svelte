<script>import { setContext } from 'svelte';
import MenuItem from './MenuItem.svelte';
import { createMenuStore } from './store';
import { createEventForwarder } from '../../engine/engine';
import { custom_event, get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let menuList;
export let density = 'tight';
export let onMenuItemClick = () => {
    console.log('not imlepented');
};
const menuStore = createMenuStore();
setContext('menuStateContext', menuStore);
$menuStore.density = density;
function onMenuClick(e) {
    onMenuItemClick && onMenuItemClick(e.detail);
    const event = custom_event('popper:close', {}, { bubbles: true });
    element.dispatchEvent(event);
}
function sayHello() { }
</script>

<ul bind:this={element} role="menu" class="density-{density} menu" on:menu:item:clicked={onMenuClick}>
	{#if menuList}
		{#each menuList as menuItem}
			<slot {menuItem}>
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
  background-color: var(--theme-color-background);
  color: var(--theme-color-text);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}
:global(.menu.density-tight) :global(.menuItem) {
  padding: 0.5rem 0;
  margin: 0.125rem 0;
}
:global(.menu.density-default) :global(.menuItem) {
  padding: 1rem 0;
  margin: 0.25rem 0;
}
:global(.menu.density-kind) :global(.menuItem) {
  padding: 1.5rem 0;
  margin: 0.5rem 0;
}
:global(.menu) :global(.menuItem) {
  border-radius: 6px;
  overflow: hidden;
  display: flex;
}
:global(.menu) :global(.menuItem:hover) {
  background-color: rgba(255, 255, 255, 0.3);
}
:global(.menu) :global(.menuItem) :global(.menuItemIcon) {
  width: 24px;
  max-width: 24px;
  text-align: center;
  overflow: hidden;
}
:global(.menu) :global(.menuItem) :global(.menuItemText) {
  padding: 0 0.25rem;
}
:global(.menu) :global(.menuItem.density-tight) {
  padding: 0.5rem 0;
  margin: 0.125rem 0;
}
:global(.menu) :global(.menuItem.density-default) {
  padding: 1rem 0;
  margin: 0.25rem 0;
}
:global(.menu) :global(.menuItem.density-kind) {
  padding: 1.5rem 0;
  margin: 0.5rem 0;
}</style>
