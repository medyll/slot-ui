<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import type { ElementProps } from '../../../types';
	import Divider from '$lib/vendor/divider/Divider.svelte';
	import Icon from '$lib/ui/icon/Icon.svelte';
	import IconButton from '$lib/vendor/button/IconButton.svelte';
	import { draggable } from '@neodrag/svelte';

	type LevelType = 'success' | 'info' | 'error' | 'warning' | 'alert' | 'discrete';
	type action = ElementProps['action'];

	/** type of levels */
	export let level: LevelType = 'info';
	export let action;
	export let data;
	export let text: string;
	export let message: string;
	export let isDragable: boolean = false;

	export let isOpen: boolean = true;

	export const actions = {
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
		}
	};
</script>

{#if isOpen}
	<div transition:fade class="alert shad-4" on:click={handleClick}>
		<div class="pad-1 pad-ii-2 border-b-4 border-color-scheme-{level}">
			<div class="flex-h flex-align-top pad-tb-1">
        <div class="pad-1" ><div class="dot bg-themed-scheme-{level}" /></div>				
				<div class="pad-1" ><slot /></div>
			</div>
			{#if $$slots.messageSlot}
				<Divider />
				<div class="pad-1">
					<slot name="messageSlot">message</slot>
				</div>
			{/if}
		</div>
		{#if $$slots.action}
			<slot name="action" />
		{/if}
		{#if $$slots.buttonZoneSlot}
			<div class="pad-tb-1 pad-ii-2 flex-h flex-align-right">
				<slot name="buttonZoneSlot" />
			</div>
		{/if}
		<div class="close">
			<IconButton
				on:click={() => {
					isOpen = !isOpen;
				}}
				iconFontSize="small"
				icon="faWindowClose"
			/>
		</div>
	</div>
{/if}

<style lang="scss">
	.alert {
		position: relative;
		min-width: 350px;
		display: inline-block;
		border-radius: 6px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background-color: rgba(0, 0, 0, 0.5);
		overflow: hidden;

		.dot {
			display: inline-block;
			padding: 0.25rem;
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 6px;
      margin-right: 1rem;
		}
		.close {
			position: absolute;
			right: 0;
			top: 0;
			border-radius: 6px;
			margin: 0.25rem;
			padding: 0.25rem;
		}
	}
</style>
