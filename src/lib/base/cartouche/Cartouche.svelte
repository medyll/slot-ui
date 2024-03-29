<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '$lib/base/icon/Icon.svelte';
	import { createEventForwarder } from '$lib/engine/eventForwarder.js';
	import { get_current_component } from 'svelte/internal'; 
	import type { SvelteComponent } from 'svelte';
	import Button from '$lib/base/button/Button.svelte';

	/** @restProps {button | a} */

	let className = '';
	export { className as class };
	export let style: string = '';
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());

	/** displayed title of the cartouche */
	export let primary: string | undefined = undefined;
	/** displayed sub title of the cartouche */
	export let secondary: string | undefined = undefined;

	export let icon: string | undefined = undefined;
	/** can be set as a prop or as a className */
	export let stacked: boolean = false;
	export let component: SvelteComponent | undefined = undefined;
	export let componentProps: Record<string, any> = {};

	/** show the title divider line */
	export let showTitleDivider: boolean = false;
	/** show the default border style */
	export let bordered: boolean = true;

	export let isOpen: boolean = false;
	/** use to control cartouche */
	export const actions = {
		open: () => {
			isOpen = true;
		},
		toggle: () => {
			isOpen = !isOpen;
		}
	};

	$: chevronIcon = !isOpen ? 'chevron-down' : 'chevron-up';
</script>

<div
	class:stacked
	bind:this={element}
	class="cartoucheHolder {className}"
	data-bordered={bordered ?? false}
	use:forwardEvents
	{style}
>
	<div class="cartouche" on:click={actions.toggle}>
		{#if icon || $$slots.cartoucheIcon}
			<div class="icon pad-l-1">
				<slot name="cartoucheIcon">
					<Icon {icon} />
				</slot>
			</div>
		{/if}
		<div class="cartoucheLabel  pad-l-1">
			{#if primary || $$slots.primarySlot}
				<slot name="primarySlot">{primary}</slot>
				<div><slot name="secondarySlot">{secondary ?? ''}</slot></div>
			{/if}
		</div>
		<div class={showTitleDivider ? 'divider' : ''} style="flex:1" />
		{#if $$slots.cartoucheButtons}
			<div
				on:click={(event) => {
					event.preventDefault();
					event.stopPropagation();
				}}
				class="cartoucheAction" >
				<slot name="cartoucheButtons" />
			</div>
		{/if}
		<div class="chevron">
			<Button naked icon={chevronIcon} />
		</div>
	</div>
	{#if isOpen}
		<div class="cartoucheContent" transition:slide>
			{#if component}
				<svelte:component this={component} {...componentProps} />
			{/if}
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	@import 'Cartouche';

	.cartoucheHolder { 
		&.stacked {
			border-radius: 0;
			&:first-child {
				border-top-left-radius: 6px;
				border-top-right-radius: 6px;
			}
			&:last-child {
				border-bottom-left-radius: 6px;
				border-bottom-right-radius: 6px;
			}
		}
	}
</style>
