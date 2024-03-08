<svelte:options accessors={true} runes={true} />

<script lang="ts">
	type ProgressProps = {
		/** className off the root component */
		class?: string;

		/** css style off the root component */
		style?: string;

		/** element root HTMLDivElement props */
		element?: HTMLDivElement | null;

		/** base value for the progress */
		percentBase?: number;

		/** current value of the progress */
		value: number;

		/** can be vertical or horizontal */
		direction: 'vertical' | 'horizontal';
	};

	let {
		class: className = '',
		style = '',
		element = null,
		percentBase = 100,
		value = 0,
		direction = 'horizontal'
	} = $props<ProgressProps>();

	const title = `${value} / ${percentBase}`;

	let attr = direction === 'vertical' ? 'height' : 'width';
	let attrTickness = direction === 'vertical' ? 'width' : 'height';
	const precWidth = $derived((value / percentBase) * 100);
</script>

<div bind:this={element} class="progressRoot {className} w-large" {style} {title}>
	<div class="progressRail" style="{attr}:{precWidth}%;{attrTickness}:0.5rem"></div>
</div>

<style lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
	.progressRoot {
		border: 1px solid var(--sld-color-secondary-alpha-mid);
		border-radius: var(--sld-radius-tiny);
		padding: 1px;
		.progressRail {
			background: var(--sld-color-primary);
			border-radius: var(--sld-radius-tiny);
			border: 1px solid var(--sld-color-primary-alpha);
			transition-delay: 250ms;
			transition: all 0.25s;
			max-width: 100%;
		}
	}
</style>
