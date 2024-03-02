<svelte:options accessors={true} />

<script lang="ts">
	import { getContext, onMount } from 'svelte';

	import Divider from '$lib/base/divider/Divider.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';
	import type { IMenuItemProps, IMenuProps } from './types.js';
	import type { ElementProps } from '$lib/types/index.js';
	import type { Writable } from 'svelte/store';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | undefined = undefined;
	/*  end slotUi exports*/

	export let text: string | undefined = undefined;
	/** text props, shown on the right side of the menuItem*/
	export let action: string | undefined = undefined;
	export let icon: IMenuItemProps['icon'] | undefined = undefined;
	export let iconColor: string | undefined = undefined;
	export let iconSize: ElementProps['sizeType'] | undefined = 'small';
	export let divider: IMenuItemProps['divider'] = false;
	export let dividerBefore: IMenuItemProps['divider'] = false;
	export let data: Record<string, any> = { empty: 'menu item data' };
	/** highlight menu item when selected*/
	export let selected: boolean | undefined = undefined;
	export let onMenuItemClick: Function = () => {};
	/** position in the list */
	export let itemIndex: number | undefined = undefined;

	let mounted: boolean = false;
	const menuStateContext = getContext<Writable<IMenuProps>>('menuStateContext');

	/** internal use component instance*/
	export let component: any = null;
	export let outer = true;

	if (icon || $$slots.iconSlot) {
		$menuStateContext.hasIcon = true;
	}

	if (selected) {
		$menuStateContext.selectedIndex = itemIndex;
	}

	onMount(() => {
		mounted = true;
		$menuStateContext.menuItemsInstances?.push(component);
		// if no data and no listItem, create index
		if (!itemIndex) {
			itemIndex = $menuStateContext.menuItemsInstances?.length - 1;
		}

		//element.addEventListener("click", handleClick);
		return () => {
			//element.removeEventListener("click", handleClick);
		};
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

{#if outer}
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
{/if}

<style global lang="scss">
	@import 'menu';
</style>
