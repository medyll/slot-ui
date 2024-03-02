<script lang="ts">
	import TitleBar from '$lib/base/titleBar/TitleBar.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	export let style: string = '';

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
	<div class="boxRoot shad-3 flex-v {className}" {style} {...$$restProps}>
		<TitleBar {hasMenu} {...closer}>
			<slot name="titleBarTitle" slot="titleBarTitle">{title ?? ''}</slot>
			<slot name="titleBarIcon" slot="titleBarIcon">
				{#if icon}
					<Icon {icon} {iconFamily} />
				{/if}
			</slot>
		</TitleBar>
		<div class="boxContent flex-main">
			<slot>{@html content ?? ''}</slot>
		</div>
		<div class="boxButtonSlot">
			<slot name="boxBottomZone">{@html bottomZone ?? ''}</slot>
		</div>
	</div>
{/if}

<style global lang="scss">
	@import 'Box';
</style>
