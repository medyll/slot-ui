<script lang="ts">
	import { setContext } from 'svelte';
	import type { MenuItemProps } from './types.js';
	import type { ElementProps } from '$typings/index.js';
	import MenuItem from './MenuItem.svelte';
	import { createMenuStore } from './store.js';
	import { createEventForwarder } from '$lib/engine/engine.js';
	import { custom_event, get_current_component } from 'svelte/internal';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let menuList: MenuItemProps[] = [];
	export let density: ElementProps['density'] = 'tight';
	export let style:string |undefined = undefined;
	/* export let onMenuItemClick: Function = () => {
		console.log('not imlepented');
	}; */

	const menuStore = createMenuStore();
	setContext('menuStateContext', menuStore);
// density
	$menuStore.density = density;

	function onMenuClick(e: CustomEvent<any>) {
		// onMenuItemClick && onMenuItemClick(e.detail);
		const event = custom_event('menu:clicked', e.detail, { bubbles: true });
		element.dispatchEvent(event); 
	}

	function sayHello() {}
</script>

<ul use:forwardEvents bind:this={element} role="menu" class="density-{density} menu" {style} 
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

<style lang="scss" global>
	@import 'menu';
</style>
