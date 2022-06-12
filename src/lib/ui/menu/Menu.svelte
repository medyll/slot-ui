<script lang="ts">
	import { setContext } from 'svelte';
	import type { MenuItemProps } from './types';
	import type { ElementProps } from '../../../types';
	import MenuItem from './MenuItem.svelte';
	import { createMenuStore } from './store';
	import { createEventForwarder } from '$lib/engine/engine';
	import { get_current_component } from 'svelte/internal';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let menuList: MenuItemProps[];
	export let density: ElementProps['density'] = 'tight';
	export let onMenuItemClick: Function = () => {
		console.log('not imlepented');
	};

	const menuStore = createMenuStore();
	setContext('menuStateContext', menuStore);

	$menuStore.density = density;

	function onMenuClick(e: CustomEvent<any>) {	 
		onMenuItemClick && onMenuItemClick(e.detail);
	}
</script>

<ul role="menu" class="density-{density} menu" on:menu:item:clicked={onMenuClick}>
	{#if menuList}
		{#each menuList as menuItem}
			<slot {menuItem}>
				<MenuItem {...menuItem} />
			</slot>
		{/each}
	{/if}
	<slot />
</ul>

<style lang="scss" global>
	@import 'style';
</style>
