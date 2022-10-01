<script lang="ts">
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | undefined = undefined;

	export let style: string | undefined = undefined;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'bottom'

	export let showChip:boolean = true
</script>

{#if showChip}
<div  bind:this={element} style="{style};" class="pos-rel gap-tiny {className} {position}">
	<slot />
	<chip data-position="{position}" />
</div>
{/if}

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
		transition: all 0.25s;
		&[data-position=top]{
			top:2px;
		}
		&[data-position=bottom]{
			bottom:2px;
		}
	}
</style>
