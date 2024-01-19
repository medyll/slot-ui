<script lang="ts">
	import Icon from '$lib/base/icon/Icon.svelte';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	export let style: string = '';
	/**    base     */
	export let percentBase: number = 100;
	/**   score */
	export let value: number = 0;

	/** can be vertical or horizontal */
	export let direction: 'vertical' | 'horizontal' = 'horizontal';

	const title = `${value} / ${percentBase}`;

	let attr = direction === 'vertical' ? 'height' : 'width';
	let attrTickness = direction === 'vertical' ? 'width' : 'height';
	$: precWidth = (value / percentBase) * 100;
</script>

<div bind:this={element} class="progressRoot {className} w-large" {style} {title}>
	<div class="progressRail" style="{attr}:{precWidth}%;{attrTickness}:0.5rem"></div>
</div>

<style lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
	.progressRoot {
		border: 1px solid var(--theme-color-secondary-alpha);
		border-radius: var(--radius-tiny);
		padding: 1px;
		.progressRail {
			background: var(--theme-color-primary);
			border-radius: var(--radius-tiny);
			border: 1px solid var(--theme-color-primary-alpha);
			transition-delay: 250ms;
			transition: all 0.25s;
			max-width: 100%;
		}
	}
</style>
