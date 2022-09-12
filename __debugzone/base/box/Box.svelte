<script lang="ts">
	import TitleBar from '../titleBar/TitleBar.svelte';
	import { createEventForwarder } from '../../engine/engine.js';
	import { createEventDispatcher, get_current_component, null_to_empty } from 'svelte/internal';
	import Icon from '../icon/Icon.svelte';

	const dispatch = createEventDispatcher();

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());


	/** is the content visible */
	export let isOpen: boolean = true;
	/** used to activate the slotui.TitleBar component */
	export let hasMenu: boolean = false;
	/** text to be shown in the title bar */
	export let title: string | undefined = undefined;
	/** alternative to iconSlot, icon to be used with the internat iconify component */
	export let icon: string | undefined = undefined;
	export let iconFamily: string | undefined = undefined;
	/** alternative to contentSlot,  content to be shown in the main area */
	export let content: string | undefined = undefined;
	/** alternative to buttonZoneSlot, content to be shown in the bottom button zone */
	export let buttonZone: string | undefined = undefined;

  /** component actions */
	export const actions: any = {
		open: () => {
			isOpen = true;
		},
		toggle: () => {
			isOpen = !isOpen;
		},
		close: () => {
			isOpen = !isOpen;
		}
	};

	const handleClick = (event: PointerEvent) => {
		if (event?.target?.attributes['data-close']) {
			event.stopPropagation();
			actions.close();
			dispatch('box:closed');
		}
	};

	export let onClose: () => void;
</script>

<div class="boxRoot shad-3 flex-v {className}" use:forwardEvents>
	<TitleBar {hasMenu} {onClose}>
		<slot name="titleSlot" slot="titleSlot">{null_to_empty(title)}</slot>
		<slot name="iconSlot" slot="iconSlot">
			{#if icon}
				<Icon {icon} {iconFamily} />
			{/if}
		</slot>
	</TitleBar>
	<div class="boxContent flex-main pad-2">
		<slot name="contentSlot">
			<slot>{@html null_to_empty(content)}</slot>
		</slot>
	</div>
	<div class="boxButtonZone">
		<slot name="buttonZoneSlot">{@html null_to_empty(buttonZone)}</slot>
	</div>
</div>

<style global lang="scss">
	@import 'Box';
</style>
