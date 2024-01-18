<script lang="ts">
	import TitleBar from '$lib/base/titleBar/TitleBar.svelte';
	import { createEventForwarder } from '$lib/engine/eventForwarder.js';
	import { createEventDispatcher, get_current_component, null_to_empty } from 'svelte/internal';
	import Icon from '$lib/base/icon/Icon.svelte';

	const dispatch = createEventDispatcher();

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	export let style: string = '';
	const forwardEvents = createEventForwarder(get_current_component());

	/** is the content visible */
	export let isOpen: boolean = true;
	/** show a working closer icon */
	export let showCloseControl: boolean = true;
	/** used to activate the slotui.TitleBar component */
	export let hasMenu: boolean = false;
	/** text to be shown in the title bar */
	export let title: string | undefined = undefined;
	/** alternative to iconSlot, icon to be used with the internat iconify component */
	export let icon: string | undefined = undefined;
	export let iconFamily: string | undefined = undefined;
	/** alternative to contentSlot,  content to be shown in the main area */
	export let content: string | undefined = undefined;
	/** alternative to slot.bottomZone, content to be shown in the bottom button zone */
	export let bottomZone: string | undefined = undefined;

	/** component actions
	 * @type {Record<'open'|'toggle' | 'close', Function>}
	 */
	export const actions: Record<'open' | 'toggle' | 'close', Function> = {
		open,
		toggle,
		close
	};

	const handleClick = (event: PointerEvent) => {
		if (event?.target?.attributes['data-close']) {
			event.stopPropagation();
			actions.close();
			dispatch('box:closed');
		}
	};

	function open() {
		isOpen = true;
	}
	function toggle() {
		isOpen = !isOpen;
	}
	function close() {
		isOpen = false;
	}
	$: closer = !showCloseControl ? {} : { onClose: () => actions.close() };
</script>

{#if isOpen}
	<div class="boxRoot shad-3 flex-v {className}" {style} {...$$restProps} use:forwardEvents>
		<TitleBar {hasMenu} {...closer}>
			<slot name="titleBarTitle" slot="titleBarTitle">{null_to_empty(title)}</slot>
			<slot name="titleBarIcon" slot="titleBarIcon">
				{#if icon}
					<Icon {icon} {iconFamily} />
				{/if}
			</slot>
		</TitleBar>
		<div class="boxContent flex-main">
			<slot>{@html null_to_empty(content)}</slot>
		</div>
		<div class="boxButtonSlot">
			<slot name="boxBottomZone">{@html null_to_empty(bottomZone)}</slot>
		</div>
	</div>
{/if}

<style global lang="scss">
	@import 'Box';
</style>
