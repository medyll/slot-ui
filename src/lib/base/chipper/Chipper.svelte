<script lang="ts">
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | undefined = undefined;
</script>

<div bind:this={element} class="pos-rel gap-tiny {className}">
	<slot />
	<chip />
</div>

<style lang="scss">
	chip {
		position: absolute;
		z-index: 2;
		height: 3px;
		left: 50%;
		transform: translate(-50%, 0);
		width: 50%;
		background-color: var(--css-button-chip-color, var(--theme-color-primary));
		border-radius: 16px;
		bottom: 2px;
	}
</style>
