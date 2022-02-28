<script lang="ts">
	import type { SvelteComponentDev } from 'svelte/internal';
	import { openPopper } from '$lib/vendor/popper/actions';
	import IconButton from '$lib/vendor/button/IconButton.svelte';
	import Menu from '$lib/vendor/menu/Menu.svelte';
	import {createEventForwarder} from '$lib/engine/engine';
	import {get_current_component} from 'svelte/internal';

	export let icon: string = 'faList';
	export let actionComponent: SvelteComponentDev;
	export let actionComponentProps: any;

	/*  common slotUi exports*/
	let className = '';
	export {className as class};
	export let element: HTMLButtonElement | null = null;
	const forwardEvents                          = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	const onActionClick = (event: PointerEvent) => {
		event.stopPropagation();
		console.log(event.target);
		openPopper('settingActions', {
			parentNode: event.target as HTMLElement,
			component: Menu,
			componentProps: actionComponentProps ?? {},
			position: 'BL'
		});
	};
</script>

<IconButton
	icon="faEllipsisH"
	iconFontSize="small"
	on:click={onActionClick}
	class={className}
	{element}
/>

<style lang="scss"  >
	@import './ButtonAction.scss';
</style>
