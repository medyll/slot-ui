<script lang="ts">
	import type { SvelteComponentDev } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { openPopper } from '../../ui/popper/actions';
	import IconButton from './IconButton.svelte';
	import Menu from '../../ui/menu/Menu.svelte';
	import { createEventForwarder } from '../../engine/engine';
	import type { SvelteComponent } from 'svelte';
	import type { PopperPositionType } from '$lib/ui/popper/Popper.svelte';

	export let icon: string = 'list';
	export let menuData: Record<string, any> = {};
	export let actionComponent: SvelteComponent | any = Menu;
	export let menuProps: Record<string, any> = { menuList: menuData };
	export let menuPosition: PopperPositionType = 'BL';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLButtonElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	let componentProps = menuProps ? menuProps : { menuList: menuData };

	const onActionClick = (event: MouseEvent) => {
		event.stopPropagation();

		openPopper('settingActions', {
			parentNode: event.target as HTMLElement,
			component: actionComponent,
			componentProps: componentProps ?? {},
			position: menuPosition
		});
	};
</script>

<IconButton
	class={'ButtonMenu ' + className}
	{element}
	icon="faEllipsisH"
	iconFontSize="small"
	on:click={onActionClick}
>
	<slot />
</IconButton>

<style lang="scss">
	@import 'ButtonMenu';
</style>
