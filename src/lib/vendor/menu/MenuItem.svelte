<script lang="ts">
	import { getContext } from 'svelte';
	import { null_to_empty } from 'svelte/internal';

	import type { menuListItemType } from './types';

	export let text: menuListItemType['text'];
	export let icon: menuListItemType['icon'] | undefined;

	const menuStateContext = getContext<any>('menuStateContext');

	if (icon || $$slots.menuItemIconSlot) {
		$menuStateContext.hasIcon = true;
	}
</script>

<li role="menuitem" class="menuItem">
	{#if $menuStateContext.hasIcon}
		<div class="menuItemIcon">
			<slot name="menuItemIconSlot">{null_to_empty(icon)}</slot>
		</div>
	{/if}
	<div class="menuItemText">
		<slot>
			<slot name="menuItemTextSlot">{text}</slot>
		</slot>
	</div>
</li>

<style lang="scss" global>
	@import 'style';
</style>
