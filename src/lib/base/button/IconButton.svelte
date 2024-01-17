<script lang="ts">
	import { createEventForwarder } from '$lib/engine/eventForwarder.js';
	import { get_current_component } from 'svelte/internal';
	import type { ElementProps } from '$lib/types/index.js';
	import Button from './Button.svelte';
	import Icon from '../icon/Icon.svelte';
	/** @restProps {Button} */
	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let icon: ElementProps['icon'];
	export let iconFontSize: ElementProps['sizeType'] = 'small';
	export let style: string = '';
	export let ratio: string = '1/1';
	export let showShip: boolean = false;
	export let rotation: number = 0;
</script>

<!-- <Button   {ratio}  {iconFontSize}   {icon} {...$$restProps} {style} class={className} /> -->

<button
	data-iconButton
	bind:this={element}
	use:forwardEvents
	on:click
	{style}
	style:aspectRatio={ratio}
	class={className}
>
	<span>
		<span class="icon">
			<Icon {rotation} {icon} fontSize={iconFontSize} />
		</span>
		<slot />
	</span>
	{#if showShip}
		<span class="chip" />
	{/if}
</button>

<style>
	button {
		padding: 4px;
		position: relative;
		background-color: transparent;
		border: 1px solid var(--theme-color-primary-alpha, transprent);
		border-radius: var(--slotui-button-radius, 0);
	}
	button:hover {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
	}
	button span {
		display: flex;
		grid-gap: 4px;
	}
	button .chip {
		position: absolute;
		height: 6px;
		left: 50%;
		transform: translate(-50%, 0);
		width: 50%;
		background-color: blue;
		border-radius: 16px;
		bottom: 0px;
	}
</style>
