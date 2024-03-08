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
		element?: HTMLDivElement;
		class?: String;
		/** type of levels 
		@type {'success' | 'info' | 'error' | 'warning' | 'alert' | 'discrete'}
		*/
		level?: LevelType;
		/** message to be shown */
		message?: string;
		/** make the alert draggable */
		draggable?: boolean;
		/** show or hide the alert */
		isOpen?: boolean;
		/** component actions
		 * @type {Record<'open'|'toggle' | 'close', Function>}
		 */
		actions?: Record<'open' | 'toggle' | 'close', Function>;
		children?: Snippet;
		topButtonSlot?: Snippet;
		messageSlot?: Snippet;
		buttonZoneSlot?: Snippet;
		buttonCloseSlot?: Snippet;
	};

	let {
		element,
		class: className,
		level = 'info',
		message,
		draggable = false,
		isOpen,
		actions = alertActions,
		children,
		topButtonSlot,
		messageSlot,
		buttonZoneSlot,
		buttonCloseSlot
	} = $props<Props>();

	const handleClick = (event: Event) => {
		if (event?.target?.getAttribute('data-close')) {
			event.stopPropagation();
			actions.close();
			new CustomEvent('alert:closed');
		}
	};

	$effect(() => {
		if (element) {
			element.addEventListener('click', handleClick, true);
		}
		return () => {
			if (element) {
				element.removeEventListener('click', handleClick);
			}
		};
	});

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

<!-- on:click={handleClick} -->
{#if isOpen}
	<div {draggable} bind:this={element} transition:fade|global class="alert shad-4 {className}">
		<div class="pad-1 ftdr border-b-2 border-color-scheme-{level}">
			<div class="flex-h flex-align-middle">
				<div class="pad-1">
					<div class="dot bg-themed-scheme-{level}" />
				</div>
				<div class="pad-1 flex-main flex-h flex-align-middle">
					<div class="flex-main">
						{#if children}
							{@render children()}
						{:else}
							{message}
						{/if}
					</div>
					{#if topButtonSlot}
						{@render topButtonSlot()}
					{/if}
					<div data-close>
						{#if buttonCloseSlot}
							{@render buttonCloseSlot()}
						{:else}
							<Button
								size="auto"
								icon="window-close"
								naked
								onclick={() => {
									isOpen = !isOpen;
								}}
							/>
						{/if}
					</div>
				</div>
			</div>
			{#if messageSlot}
				<Divider />
				<div class="pad-1">
					{@render messageSlot()}
				</div>
			{/if}
		</div>
		{#if buttonZoneSlot}
			<div class="pad-tb-1 pad-ii-2 flex-h flex-align-right" role="button">
				{@render buttonZoneSlot()}
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	@import 'Alert';
</style>
