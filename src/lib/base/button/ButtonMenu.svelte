<svelte:options accessors={true} />

<script lang="ts">
	import { openPopper } from '../../ui/popper/actions.js';
	import IconButton from './IconButton.svelte';
	import Menu from '../../ui/menu/Menu.svelte';
	import type { SvelteComponent } from 'svelte';
	import type { PopperPositionType } from '$lib/ui/popper/types.js';
	import type { IMenuItemProps, IMenuProps } from '$lib/ui/menu/types.js';
	import type { ElementProps } from '$lib/types/index.js';
	import type { UsePopperProps } from '$lib/ui/popper/usePopper.js';

	export let icon: string = 'list';
	export let menuData: IMenuItemProps[] = [];
	export let actionComponent: SvelteComponent | any = Menu;
	export let menuProps: IMenuProps = {
		menuList: menuData,
		menuItemsList: menuData,
		onMenuItemClick: () => {
			console.log('redfered');
		}
	};
	/*  menuPosition
	 * @type {"TC" | "TL" | "TR" | "BC" | "BL" | "BR"}
	 */
	export let menuPosition: PopperPositionType = 'BC';

	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null as HTMLElement;
	/*  end slotUi exports*/

	let componentProps = menuProps
		? menuProps
		: {
				menuList: menuData,
				menuItemsList: menuData,
				onMenuItemClick: () => {}
			};

	const onActionClick = (event: MouseEvent) => {
		event.stopPropagation();
		openPopper('settingActions', {
			parentNode: event.currentTarget as HTMLElement,
			component: actionComponent,
			componentProps: componentProps ?? {},
			position: menuPosition
		});
	};

	// on:menu:item:clicked
	// on:click={onActionClick}
	let openPoppOpt: UsePopperProps;

	$: openPoppOpt = {
		parentNode: element,
		component: actionComponent,
		componentProps: componentProps ?? {},
		position: 'BC',
		disabled: false
	};

	// usePopperOpt={openPoppOpt}
</script>

<!-- {@debug componentProps} -->

<IconButton
	class={'ButtonMenu ' + className}
	bind:element
	icon="faEllipsisH"
	iconFontSize="small"
	on:click={onActionClick}
>
	<slot />
</IconButton>

<style lang="scss">
	@import 'ButtonMenu';
</style>
