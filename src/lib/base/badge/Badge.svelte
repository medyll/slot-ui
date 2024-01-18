<script lang="ts">
	import { get_current_component } from 'svelte/internal';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	/*  end slotUi exports*/

	export let value: number;
	export let ceiling: number;
	/**
	 * position of the badge
	 * @type {{ x: 'left' | 'right' | 'center'; y: 'top' | 'bottom' | 'center' }}
	 */
	export let position: { x: 'left' | 'right' | 'center'; y: 'top' | 'bottom' | 'center' } = {
		x: 'right',
		y: 'top'
	};

	const xM = {
		left: 'left:0',
		right: 'right:0',
		center: 'left:50%;transformation:translate(-50%,0)'
	};
	const yM = {
		top: 'top:0',
		bottom: 'bottom:0',
		center: 'top:50%;transformation:translate(0,-50%)'
	};
</script>

{#if value > ceiling}
	<div bind:this={element} class="badge" style="{xM[position.x]};{yM[position.y]}">
		<slot>{value}</slot>
	</div>
{/if}

<style lang="scss">
	@import 'Badge';
</style>
