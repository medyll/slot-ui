<script lang="ts">
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | undefined = undefined;

	export let style: string | undefined = undefined;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
	/** sho or hide the chip */
	export let showChip: boolean = true;
</script>

<div bind:this={element} style="{style};" class="pos-rel gap-tiny {className} {position}">
	<slot />
	<chip data-position={position}>
		{#if showChip}
			<slot name="chipperSlot">
				<div class="defaultChip" />
			</slot>
		{/if}
	</chip>
</div>

<style lang="scss">
	@import "../../styles/slotui-vars.css";
	@import "../../styles/presets.scss";
	chip {
		position: absolute;
		z-index: 2;
		border-radius: 16px;
		transition: all 0.25s;
		&[data-position='left'] {
			left: 2px;
			height: 100%;
			width: 3px;
		}
		&[data-position='right'] {
			right: 2px;
			height: 100%;
			width: 3px;
		}
		&[data-position='top'] {
			top: 2px;
			left: 50%;
			transform: translate(-50%, 0);
			width: 50%;
		}
		&[data-position='bottom'] {
			bottom: 2px;
			left: 50%;
			transform: translate(-50%, 0);
			width: 50%;
		}
		.defaultChip {
			min-height: 3px;
			background-color: var(--css-button-chip-color, var(--theme-color-primary));
		}
	}
</style>
