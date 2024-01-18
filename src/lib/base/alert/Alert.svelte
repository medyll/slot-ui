<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte/internal';
	import Divider from '$lib/base/divider/Divider.svelte';
	import Button from '$lib/base/button/Button.svelte';
	/** @restProps {button} */
	const dispatch = createEventDispatcher();
	/*  common slotUi exports*/

	let className = '';
	/**
	 *  className off the root component
	 */
	export { className as class };
	/**
	 *  element root HTMLDivElement props
	 */
	export let element: HTMLDivElement | null = null;
	/*  end slotUi exports*/

	type LevelType = 'success' | 'info' | 'error' | 'warning' | 'alert' | 'discrete';

	/** type of levels 
		@type {'success' | 'info' | 'error' | 'warning' | 'alert' | 'discrete'}
	*/
	export let level: LevelType = 'info';
	/** message to be shown */
	export let message: string | undefined = undefined;
	/** make the alert draggable */
	export let isDraggable: boolean = false;
	/** show or hide the alert */
	export let isOpen: boolean = true;
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
			dispatch('alert:closed');
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
</script>

{#if isOpen}
	<div
		bind:this={element}
		transition:fade|global
		class="alert shad-4 {className}"
		on:click={handleClick}
		role="button"
	>
		<div class="pad-1 ftdr border-b-2 border-color-scheme-{level}">
			<div class="flex-h flex-align-middle">
				<div class="pad-1">
					<div class="dot bg-themed-scheme-{level}" />
				</div>
				<div class="pad-1 flex-main flex-h flex-align-middle">
					<div class="flex-main">
						<slot>{message}</slot>
					</div>
					<slot name="topButtonSlot" />
					<Button
						size="auto"
						icon="window-close"
						naked
						on:click={() => {
							isOpen = !isOpen;
						}}
					/>
				</div>
			</div>
			{#if $$slots.messageSlot}
				<Divider />
				<div class="pad-1">
					<slot name="messageSlot" />
				</div>
			{/if}
		</div>
		{#if $$slots.buttonZoneSlot}
			<div class="pad-tb-1 pad-ii-2 flex-h flex-align-right">
				<slot name="buttonZoneSlot" />
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	@import 'Alert';
</style>
