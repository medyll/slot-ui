<svelte:options accessors={true} />

<script lang="ts">
	import { getContext, onMount } from 'svelte';

	import Divider from '$lib/base/divider/Divider.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';
	import type { IMenuItemProps, IMenuProps } from './types.js';
	import type { CommonProps, ElementProps } from '$lib/types/index.js';
	import type { Writable } from 'svelte/store';

	let mounted: boolean = $state(false);
	const menuStateContext = getContext<Writable<IMenuProps>>('menuStateContext');

	type MenuItemProps = CommonProps & {
		/** className off the root component */
		class?: string;

		/** element root HTMLDivElement props */
		element?: HTMLElement | null;

		/** text displayed in the menu item */
		text?: string;

		/** text props, shown on the right side of the menuItem */
		action?: string;

		/** icon displayed in the menu item */
		icon?: IMenuItemProps['icon'];

		/** color of the icon */
		iconColor?: string;

		/** size of the icon */
		iconSize?: ElementProps['sizeType'];

		/** whether to show a divider after the menu item */
		divider?: IMenuItemProps['divider'];

		/** whether to show a divider before the menu item */
		dividerBefore?: IMenuItemProps['divider'];

		/** data associated with the menu item */
		data?: Record<string, any>;

		/** whether the menu item is selected */
		selected?: boolean;

		/** function to be called when the menu item is clicked */
		onMenuItemClick?: Function;

		/** position in the list */
		itemIndex?: number;
		/** component to be rendered in the menu item */
		component?: any;

		/** whether the menu item is outer */
		outer: boolean;
	};

	let {
		class: className = '',
		element = null,
		text = undefined,
		action = undefined,
		icon = undefined,
		iconColor = undefined,
		iconSize = 'small',
		divider = false,
		dividerBefore = false,
		data = { empty: 'menu item data' },
		selected = undefined,
		onMenuItemClick = () => {},
		itemIndex = undefined,
		component = null,
		outer = true,
		children = undefined
	} = $props() as MenuItemProps;

	if (icon || $$slots.iconSlot) {
		$menuStateContext.hasIcon = true;
	}

	if (selected) {
		$menuStateContext.selectedIndex = itemIndex;
	}

	$effect(() => {
		if (mounted) {
			$menuStateContext.menuItemsInstances?.push(component);
		}
	});

	const handleClick = () => () => {
		const event = new CustomEvent('menu:item:clicked', { detail: data, bubbles: true });
		if (element) element.dispatchEvent(event);
		// set selectedIndex if we have index
		// set selected style
		setSelected();
		onMenuItemClick(data);
	};

	const setSelected = () => {
		$menuStateContext.selectedIndex = itemIndex;
	};
</script>

{#if dividerBefore}
	<li>
		<slot name="divider"><Divider density="tight" expansion="centered" /></slot>
	</li>
{/if}
<li
	class="menuItem {className}"
	data-selected={($menuStateContext.selectedIndex
		? $menuStateContext.selectedIndex === itemIndex
		: undefined) ?? undefined}
	role="menuitem"
	bind:this={element}
	on:click={handleClick}
>
	{#if $menuStateContext?.hasIcon}
		<div class="menuItemIcon">
			<slot name="menuItemStart">
				<slot name="iconSlot">
					<Icon {icon} color={iconColor} fontSize={iconSize} />
				</slot>
			</slot>
		</div>
	{/if}
	<div class="menuItemText">
		{@render children?.()}
	</div>
	{#if $$slots.actionSlot || action}
		<div class="menuItemActions">
			<slot name="menuItemEnd"><slot name="actionSlot">{action}</slot></slot>
		</div>
	{/if}
</li>
{#if divider}
	<li>
		<slot name="menuItemDivider"><Divider density="tight" expansion="padded" /></slot>
	</li>
{/if}

<!-- {#if outer}
	<svelte:self bind:this={component} outer={false} />
{:else}
	{#if dividerBefore}
		<li>
			<slot name="divider"><Divider density="tight" expansion="centered" /></slot>
		</li>
	{/if}
	<li
		class="menuItem {className}"
		data-selected={($menuStateContext.selectedIndex
			? $menuStateContext.selectedIndex === itemIndex
			: undefined) ?? undefined}
		role="menuitem"
		bind:this={element}
		on:click={handleClick}
	>
		{#if $menuStateContext?.hasIcon}
			<div class="menuItemIcon">
				<slot name="menuItemStart">
					<slot name="iconSlot">
						<Icon {icon} color={iconColor} fontSize={iconSize} />
					</slot>
				</slot>
			</div>
		{/if}
		<div class="menuItemText">
			chil
			{@render children?.()}
			<slot>
				<slot name="menuItemText">{text ?? ''}</slot>
			</slot>
		</div>
		{#if $$slots.actionSlot || action}
			<div class="menuItemActions">
				<slot name="menuItemEnd"><slot name="actionSlot">{action}</slot></slot>
			</div>
		{/if}
	</li>
	{#if divider}
		<li>
			<slot name="menuItemDivider"><Divider density="tight" expansion="padded" /></slot>
		</li>
	{/if}
{/if} -->

<style global lang="scss">
	@import 'menu';
</style>
