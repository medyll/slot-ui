<script lang="ts">
	import { setContext } from 'svelte';
	import type { MenuItemProps } from './types';
	import type { ElementProps } from '../../../types';
	import MenuItem from './MenuItem.svelte';
	import { createMenuStore } from './store';
	import Divider from "$lib/vendor/divider/Divider.svelte";

	export let menuList: MenuItemProps[];
	export let density: ElementProps['density'] = 'tight';

	const menuStore = createMenuStore();
	setContext('menuStateContext', menuStore);

  	$menuStore.density = density;

</script>

<ul role="menu" class="density-{density} menu">
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
