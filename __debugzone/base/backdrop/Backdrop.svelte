<script lang="ts">
	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;

	/** if in loading state, it will show a loading icon or $$slots.loadingSlot */
	export let loading = false;
</script>

<div bind:this={element} class="backdropRoot h-full w-full pos-fix top-0 zI-10 {className}">
	<div class="backdropContent pos-abs  h-full w-full">
		{#if loading}
			<div class="pos-abs  h-full w-full flex-h flex-align-middle-center  zI-10">
				<slot name="loadingSlot">
					<i class="fa fa-spinner fa-spin fa-4x theme-text-primary-complement" />
				</slot>
			</div>
		{:else}
			<slot />
		{/if}
	</div>
</div>

<style lang="scss">
	.backdropRoot {
		position: absolute;
		z-index: 1000;
		height: 100%;
		width: 100%;

		.backdropContent {
			background-color: var(--theme-color-foreground-alpha);
			backdrop-filter: blur(5px);
		}
	}
</style>
