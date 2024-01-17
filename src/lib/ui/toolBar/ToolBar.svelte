<svelte:options accessors />

<script lang="ts">
	/* common slotUi exports*/
	import { createEventForwarder } from '$lib/engine/eventForwarder.js';
	import { get_current_component } from 'svelte/internal';
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	export let style: string | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/* end slotUi exports*/

	export let color = '#fff';
	export let vertical = false;
</script>

<div
	bind:this={element}
	use:forwardEvents
	class:vertical
	class="toolbar {className}"
	style="{style};--color: {color}"
>
	<slot />
	<slot name="separator" />
</div>

<style lang="scss" global>
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';

	.toolbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: attr(--color);
		padding: var(--slotui-toolbar-padding, var(--box-density-1, 0.5rem));
		gap: 0.5rem;
		divider {
			border: 1px solid red;
			height: 1rem;
		}
	}

	.toolbar.vertical {
		flex-direction: column;
		divider {
			border: 1px solid green;
			width: 1rem;
		}
	}
</style>
