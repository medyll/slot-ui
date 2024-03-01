<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="bar flex-h flex-align-middle {className}" {...$$restProps}>
	<slot name="taskBarLeft" />
	<div class="flex-main">
		<slot />
	</div>
	<slot name="taskBarRight" />
</div>

<style lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
	.bar {
		grid-gap: var(--box-density-1, 8px);
		background-size: auto;
		background-color: var(--css-taskbar-bg-color, rgba(255, 255, 255, 0.5));
		backdrop-filter: var(--css-taskbar-backdrop-blur, blur(20px));
		min-height: var(--css-taskbar-height, 48px);
		border-bottom: 1px solid var(--sld-color-foreground-alpha-high, rgba(255, 255, 255, 0.2));
		box-shadow: var(--css-taskbar-shadow, var(--box-shad-3));
		box-sizing: border-box;
	}
</style>
