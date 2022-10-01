<svelte:options accessors />

<script>import Icon from '../icon/Icon.svelte';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
export let style = undefined;
/** show or hide the backdrop */
export let isOpen = false;
/** if in loading state, it will show a loading icon or $$slots.loadingSlot */
export let isLoading = false;
/** css position mode of the backdrop */
export let flow = 'fixed';
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
					<slot name="loadingSlot">
						<Icon icon="mdi:loading" fontSize="large" rotate />
					</slot>
				</div>
			{:else}
				<slot />
			{/if}
		</div>
	</div>
{/if}

<style>.backdropRoot {
  z-index: 10000;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.backdropRoot .backdropContent {
  z-index: 10001;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--backdrop-background-color, var(--theme-color-foreground-alpha));
  backdrop-filter: blur(5px);
}</style>
