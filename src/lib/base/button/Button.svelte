<script lang="ts">
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component, get_slot_changes, null_to_empty } from 'svelte/internal';
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper';
	import { crossfade, fade, scale } from 'svelte/transition';
	import type { ElementProps } from 'src/types';
	import Divider from '../divider/Divider.svelte';
	import Menu from '$lib/ui/menu/Menu.svelte';
	import Popper from '$lib/ui/popper/Popper.svelte';

	export let presetDefault = 'contained';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLButtonElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let usePopper: UsePopperProps = { code: 'string', disabled: true } as UsePopperProps;
	export let loading: boolean = false;
	export let showChip: boolean = false;

	export let contained: boolean = presetDefault === 'contained';
	export let bordered: boolean = presetDefault === 'bordered';
	export let link: boolean = presetDefault === 'link';

	export let size: ElementProps['sizeType'] | 'full' = 'medium';
	export let density: ElementProps['density'] = 'default';
	export let nowrap: boolean = false;
	export let height: string = 'default';

	export let primary: string | undefined = undefined;
	export let secondary: string | undefined = undefined;
	export let action: string | undefined = undefined;

	// for action
	let actionArgs: any;
	let actionComponent = Menu;
	let actionComponentProps = {};
	let actionContent = '';

	$: actionArgs = {
		code: 'node',
		parentNode: element,
		component: actionComponent,
		componentProps: actionComponentProps ?? {},
		position: 'BL',
		content: actionContent,
		disabled: false
	};
</script>

<button
	{...$$restProps}
	class={className + ' w-' + size}
	class:loading
	bind:this={element}
	use:popper={usePopper}
	use:forwardEvents
	class:size={'w-' + size}
	{density}
	{nowrap}
	{height}
	{contained}
	{bordered}
	{link}
>
	<div class="innerButton">
		{#if $$slots.startButtonSlot}
			<div class="startButtonSlot">
				<slot name="startButtonSlot" />
			</div>
		{/if}
		<div class="central"><slot>{null_to_empty(primary)}</slot></div>
		{#if $$slots.action}
			<div class="action">
				<slot name="action" />
			</div>
		{/if}
	</div>
	{#if loading}
		<div>
			<div transition:scale class="loadingButtonZone">
				<slot name="loadingIconButtonSlot">loading</slot>
			</div>
		</div>
	{/if}
	{#if showChip}
		<span class="chip" />
	{/if}
</button>
{#if secondary}
	<br />
	<div style={`display:inline-block;width:${element?.style?.width}px`}>
		<Divider />
		{secondary}
	</div>
{/if}
{#if secondary}
	<Popper {...actionArgs}>
		<slot name="popper">
			{#if actionArgs?.component}
				<svelte:component this={actionArgs.component} {...actionArgs.componentProps} />
			{/if}
		</slot>
	</Popper>
{/if}

<style lang="scss">
	button {
		font-size: 11px;
		color: var(--theme-color-foreground);
		border: 0.5px solid var(--theme-color-border);
		// padding: var(--box-density-small, 0.5rem) 0.75rem;
		border-radius: var(--box-radius-tiny, 4px);
		background-color: var(--color-gray-800-alpha-low, rgba(255, 255, 255, 0.1));
		padding: auto var(--box-density-preset-tiny);
		&:hover {
			background-color: var(--color-gray-800);
		}

		&:active {
			background-color: var(--theme-color-text);
			color: var(--theme-color-background);
			box-shadow: var(--box-shad-10);
		}

		&[disabled] {
			color: var(--color-gray-800);
		}

		/* &.w-tiny{
            padding:var(--box-density-small,0.75rem)
        } */
	}
	button {
		position: relative;
		overflow: hidden;
		&[height='tiny'] {
			height: 1rem;
		}
		&[height='small'] {
			height: 1.5rem;
		}
		&[height='default'] {
			height: 2rem;
		}
		&[height='large'] {
			height: 4rem;
		}
		&[nowrap] {
			color: 'red';
		}
		&.loading {
			& .loadingButtonZone {
				z-index: 10;
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				left: 0;
				max-height: 100%;
				overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: space-around;
				background-color: var(--css-bacground-color, var(--theme-color-paper-alpha-high));
				backdrop-filter: blur(3px);
			}
		}
		.innerButton {
			width: 100%;
			overflow: hidden;
			position: relative;
			z-index: 1;
			display: flex;
			min-width: auto;
			align-items: center;
			.startButtonSlot {
				padding: 0 var(--box-density-preset-small, 0.25rem);
			}
			.central {
				flex: 1;
				min-width: auto;
				width: auto;
				&[nowrap] {
				}
			}
			.action {
				position: absolute;
				display: block;
				top: 0;
				bottom: 0;
				right: 0;
				background-color: rgba(255, 255, 255, 0.1);
				width: 30%;
				padding: 0.5rem;

				&:hover {
					background-color: rgba(255, 255, 255, 0.5);
				}
			}
		}
		.chip {
			position: absolute;
			z-index: 2;
			height: 2px;
			left: 50%;
			transform: translate(-50%, 0);
			width: 50%;
			background-color: var(--css-button-chip-color, var(--theme-color-primary));
			border-radius: 16px;
			bottom: 3px;
		}
	}
</style>
