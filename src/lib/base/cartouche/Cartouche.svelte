<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '../icon/Icon.svelte';
	import { createEventForwarder } from '../../engine/eventForwarder';
	import { get_current_component } from 'svelte/internal';
	import { elem } from '../../engine/elem';
	import type { SvelteComponent } from 'svelte';
	import Divider from '../divider/Divider.svelte';

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

	let chevronIcon: 'chevron-down' | 'chevron-up';
	$: chevronIcon = !isOpen ? 'chevron-down' : 'chevron-up';

	// $: if (element) console.log(elem(element).next());
</script>

<div
	class:stacked
	bind:this={element}
	class="cartoucheHolder {className}"
	{style}
	use:forwardEvents
>
	<div class="cartouche pad-tb-2" on:click={actions.toggle}>
		{#if icon || $$slots.cartoucheIconSlot}
			<div class="icon pad-l-1"><slot name="cartoucheIconSlot">
        <Icon {icon} />
      </slot></div>
		{/if}
		<div class="cartoucheLabel  pad-l-1">
			{#if primary || $$slots.primarySlot}
      <slot name="primarySlot">{primary}</slot>
      <div><slot name="secondarySlot">{secondary ?? ''}</slot></div>
			{/if}
		</div>
		<div
			on:click={(event) => {
				event.preventDefault();
				event.stopPropagation();
			}}
			class="cartoucheAction"
		>
			<slot name="cartoucheActionSlot" />
		</div>
		<div class="chevron">
			<Icon fontSize="tiny" icon={chevronIcon} />
		</div>
	</div>
	<Divider extension="padded" density="none" shadow />
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
