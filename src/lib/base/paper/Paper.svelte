<svelte:options accessors={true} runes={true} />

<script lang="ts">
	import type { ElementProps } from '$lib/types/index.js';

	type PaperProps = {
		/** className off the root component */
		class?: string;

		/** css style off the root component */
		style?: string;

		/** element root HTMLDivElement props */
		element?: HTMLDivElement | null;

		/** margins applied to paper */
		density: ElementProps['density'];
	};

	let {
		class: className = '',
		style = '',
		element = null,
		density = 'default'
	} = $props<PaperProps>();

	let densityClass = {
		none: '',
		tight: 'pad-1 marg-1',
		default: 'pad-2 marg-2',
		kind: 'pad-3 marg-3'
	};
</script>

<div class="paper shad-8 {densityClass[density]} {className}" {style}>
	<slot />
</div>

<style lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
	.paper {
		color: var(--sld-color-foreground);
		background-color: var(--sld-color-paper);
		border-radius: 6px;
	}
</style>
