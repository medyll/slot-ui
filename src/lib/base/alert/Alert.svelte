<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher, get_current_component } from 'svelte/internal';
	import type { ElementProps } from '$typings/index.js';
	import Divider from '$lib/base/divider/Divider.svelte';
	import IconButton from '$lib/base/button/IconButton.svelte'; 
	import Button from '$lib/base/button/Button.svelte';

	const dispatch = createEventDispatcher();

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null; 
	/*  end slotUi exports*/

	type LevelType = 'success' | 'info' | 'error' | 'warning' | 'alert' | 'discrete';
	type action = ElementProps['action'];

	/** type of levels */
	export let level: LevelType = 'info';
	export let action = () => {};
	export let data = {};
	export let text: string | undefined = undefined;
	export let message: string | undefined = undefined;
	export let isDragable: boolean = false;

	export let isOpen: boolean = true;

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
			dispatch('alert:closed');
		}
	};
</script>

{#if isOpen}
	<div 
		bind:this={element}
		transition:fade
		class="alert shad-4 {className}"
		on:click={handleClick}
	>
		<div class="pad-1 ftdr  border-b-2 border-color-scheme-{level}">
			<div class="flex-h flex-align-middle ">
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
