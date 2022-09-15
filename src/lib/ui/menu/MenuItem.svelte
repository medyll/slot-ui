<svelte:options accessors={true} />

<script lang="ts">
	import { getContext } from 'svelte';
	import { custom_event, get_current_component, null_to_empty } from 'svelte/internal';

	import Divider from '$lib/base/divider/Divider.svelte';
	import { createEventForwarder } from '$lib/engine/engine.js';
	import type { MenuItemProps } from './types.js';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | undefined = undefined;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let text: MenuItemProps['text'];
	export let icon: MenuItemProps['icon'] | undefined = undefined;
	export let divider: MenuItemProps['divider'] = false;
	export let data: Record<string, any> = { empty: 'menu item data' };

	export let onMenuItemClick: Function = () => {};

	const menuStateContext = getContext<any>('menuStateContext');

	if (icon || $$slots.iconSLot) {
		$menuStateContext.hasIcon = true;
	}

	const handleClick = (data: any) => () => {
		const event = custom_event('menu:item:clicked', data, { bubbles: true });
		if (element) element.dispatchEvent(event);
		onMenuItemClick(data);
	};

	// cons
</script>

<li
	class="menuItem"
	role="menuitem"
	bind:this={element}
	use:forwardEvents
	on:click={handleClick(data)}
>
	{#if $menuStateContext?.hasIcon}
		<div class="menuItemIcon">
			<slot name="iconSLot">{null_to_empty(icon)}</slot>
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

<style global lang="scss">
	@import 'menu';
</style>
