<svelte:options accessors={true} />

<script lang="ts">
	import { getContext } from 'svelte';
	import { custom_event, get_current_component, null_to_empty } from 'svelte/internal';

	import type { MenuItemProps } from './types';
	import Divider from '$lib/base/divider/Divider.svelte';
	import { createEventForwarder } from '$lib/engine/engine';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | undefined = undefined;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let text: MenuItemProps['text'];
	export let icon: MenuItemProps['icon'] | undefined = undefined;
	export let divider: MenuItemProps['divider'] = false;
	export let data: Record<string, any> = {empty:'menu item data'};

	export let onMenuItemClick: Function = ()=>{};

	const menuStateContext = getContext<any>('menuStateContext');

	if (icon || $$slots.menuItemIconSlot) {
		$menuStateContext.hasIcon = true;
	}

	const handleClick =
		(data: any ) =>
		() => {
			const event = custom_event('menu:item:clicked', data, { bubbles: true });
			if (element) element.dispatchEvent(event);
            onMenuItemClick(data)
		};
</script>

<li
	class="menuItem"
	role="menuitem"
	bind:this={element}
	use:forwardEvents
	on:click={handleClick(data)}
>
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
{#if divider}
	<li>
		<Divider expansion="none" />
	</li>
{/if}

<style global lang="scss">
	@import 'style';
</style>
