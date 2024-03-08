<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import Divider from '$lib/base/divider/Divider.svelte';
	import Button from '$lib/base/button/Button.svelte';
	/** @restProps {button} */

	type LevelType = 'success' | 'info' | 'error' | 'warning' | 'alert' | 'discrete';

	const alertActions: Record<'open' | 'toggle' | 'close', Function> = {
		open,
		toggle,
		close
	};

	type Props = {
		element: HTMLDivElement;
		class: String;
		/** type of levels 
		@type {'success' | 'info' | 'error' | 'warning' | 'alert' | 'discrete'}
		*/
		level: LevelType;
		/** message to be shown */
		message: string | undefined;
		/** make the alert draggable */
		isDraggable: boolean;
		/** show or hide the alert */
		isOpen: boolean;
		/** component actions
		 * @type {Record<'open'|'toggle' | 'close', Function>}
		 */
		actions: Record<'open' | 'toggle' | 'close', Function>;
		children: Snippet;
	};

	let {
		element,
		class: className,
		level,
		message,
		isDraggable,
		isOpen,
		actions = alertActions,
		children
	} = $props<Props>();

	const handleClick = (event: PointerEvent) => {
		if (event?.target?.attributes['data-close']) {
			event.stopPropagation();
			actions.close();
			new CustomEvent('alert:closed');
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
						{@render children()}
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
