<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '$lib/base/icon/Icon.svelte';
	import type { SvelteComponent } from 'svelte';
	import Button from '$lib/base/button/Button.svelte';

	let className: string | undefined = undefined;
	/**  className off the root component  */
	export { className as class };
	/**  css style off the root component  */
	export let style: string | undefined = undefined;
	/** element root HTMLDivElement props  */
	export let element: HTMLDivElement | null = null;

	/** displayed title of the cartouche */
	export let primary: string = '';
	/** displayed sub title of the cartouche */
	export let secondary: string | undefined = undefined;

	export let icon: string | undefined = undefined;
	/** can be set as a prop or as a className */
	export let stacked: boolean = false;
	export const component: SvelteComponent | undefined = undefined;
	export let componentProps: Record<string, any> = {};

	/** State of content is preserved while visibility is toggled */
	export let keepCartoucheContent: boolean = false;
	/** show the title divider line */
	export let showTitleDivider: boolean = false;
	/** show the default border style */
	export let bordered: boolean = true;

	export let isOpen: boolean = false;
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

	$: chevronIcon = !isOpen ? 'chevron-down' : 'chevron-up';
</script>

<div
	class:stacked
	bind:this={element}
	class="cartouche {className}"
	data-bordered={bordered ?? false}
	{style}
>
	<div class="cartoucheControl" on:click={actions.toggle}>
		{#if icon || $$slots.cartoucheIcon}
			<div class="icon pad-l-1">
				<slot name="cartoucheIcon">
					<Icon {icon} />
				</slot>
			</div>
		{/if}
		<div class="cartoucheLabel pad-l-1">
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
				class="cartoucheAction"
			>
				<slot name="cartoucheButtons" />
			</div>
		{/if}
		<div class="chevron">
			<Button naked icon={chevronIcon} />
		</div>
	</div>
	{#if isOpen || keepCartoucheContent}
		<div aria-expanded={isOpen} class="cartoucheContent" transition:slide|global>
			{#if component}
				<svelte:component this={component} {...componentProps} />
			{/if}
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	@import 'Cartouche';
</style>
