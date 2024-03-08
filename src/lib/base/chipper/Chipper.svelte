<svelte:options accessors={true} runes={true} />

<script lang="ts">
	type ChipperProps = {
		/** className off the root component */
		class?: string;
		/** css style off the root component */
		style?: string;
		/** element root HTMLDivElement props */
		element?: HTMLDivElement | null;
		/** position of the chipper
		@type {'top' | 'bottom' | 'left' | 'right'}
		*/
		position: 'top' | 'bottom' | 'left' | 'right';
		/** theme color of the chip
		@type {'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark'}
		*/
		bgTheme?: string;
		/** css color code for the chip */
		color?: string;
		/** text or html is slot is not used */
		content?: string;
		/** show or hide the chip */
		showChip: boolean;
	};

	let {
		class: className = '',
		style = '',
		element = null,
		position = 'bottom',
		bgTheme = 'primary',
		color = '',
		content = '',
		showChip = true
	} = $props<ChipperProps>();

	const cssColor = $derived(color ?? (bgTheme ? `var(--sld-color-${bgTheme})` : ''));
</script>

<div
	bind:this={element}
	style="{style};position:relative;"
	class="chipperRoot gap-tiny {className} "
>
	<slot>
		{#if content}
			<div class="chipperContent">{@html content ?? ''}</div>
		{/if}
	</slot>
	<chip class="chipperChip" data-position={position} style:--css-button-chip-color={cssColor}>
		{#if showChip}
			<slot name="chipperChip">
				<div class="defaultChip" />
			</slot>
		{/if}
	</chip>
</div>

<style lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';

	.chipperRoot {
		position: relative;

		.chipperContent {
			padding: 0.5rem;
		}

		.chipperChip {
			display: block;
			position: absolute;
			z-index: 2;
			border-radius: 16px;
			transition: all 0.25s;
			max-height: 100%;
			background-color: var(--css-button-chip-color, var(--sld-color-primary));

			&[data-position='left'] {
				top: 2px;
				left: 2px;
				height: 100%;
				width: 3px;
			}

			&[data-position='right'] {
				top: 2px;
				right: 2px;
				height: 130px;
				width: 3px;
			}

			&[data-position='top'] {
				height: 4px;
				top: 2px;
				left: 50%;
				transform: translate(-50%, 0);
				width: 50%;
			}

			&[data-position='bottom'] {
				height: 4px;
				bottom: 2px;
				left: 50%;
				transform: translate(-50%, 0);
				width: 50%;
			}

			.defaultChip,
			[slot='chipperChip'] {
				display: block;
				height: 100%;
				width: 100%;
				min-height: 3px;
				background-color: var(--css-button-chip-color, var(--sld-color-primary));
			}
		}
	}
</style>
