<svelte:options accessors />

<script lang="ts">
	import Icon from '$lib/base/icon/Icon.svelte';
	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	export let style: string | undefined = undefined;
	/** show or hide the backdrop */
	export let isOpen: boolean = false;
	/** if in loading state, it will show a loading icon or $$slots.loadingSlot */
	export let isLoading = false;
	/** css position mode of the backdrop */
	export let flow: 'absolute' | 'fixed' | 'relative' = 'fixed';
</script>

{#if isOpen}
	<div
		on:click
		bind:this={element}
		class="backdropRoot    {className}"
		style="position:{flow};{style}"
	>
		<div class="backdropContent pos-abs  h-full w-full">
			{#if isLoading}
				<div class="flex-h flex-align-middle-center">
					<slot name="backdropLoading">
						<Icon icon="mdi:loading" fontSize="large" rotate />
					</slot>
				</div>
			{:else}
				<slot />
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	@import "../../styles/slotui-vars.css";
	@import "../../styles/presets.scss";
	.backdropRoot {
		z-index: 10000;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		.backdropContent {
			z-index: 10001;
			position: absolute;
			height: 100%;
			width: 100%;
			background-color: var(--backdrop-background-color, var(--theme-color-foreground-alpha));
			backdrop-filter: blur(5px);
		}
	}
</style>
