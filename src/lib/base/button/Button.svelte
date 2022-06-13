<script lang="ts">
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component, get_slot_changes, null_to_empty } from 'svelte/internal';
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper';
	import { crossfade, fade, scale } from 'svelte/transition';
	import type { ElementProps } from 'src/types';
	import Divider from '../divider/Divider.svelte';
	import Menu from '$lib/ui/menu/Menu.svelte';
	import Popper from '$lib/ui/popper/Popper.svelte';
	import Icon from '@iconify/svelte';

	export let presetDefault = 'bordered contained';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLButtonElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	/** paramters for usePopper */
	export let usePopper: UsePopperProps = { disabled: true } as UsePopperProps;
	/** show loading state */
	export let loading: boolean = false;
	/** show chip */
	export let showChip: boolean = false;

	/** button style contained */
	export let contained: boolean = presetDefault.includes('contained');
	/** button style bordered */
	export let bordered: boolean = presetDefault.includes('bordered');
	/** button style link */
	export let link: boolean = presetDefault.includes('link');

	/** with of the button using  presets */
	export let size: ElementProps['sizeType'] | 'full' = 'medium';
	/** density of the button, using preset values */
	export let density: ElementProps['density'] = 'default';
	/** add ellipsis on overflowed text */
	export let nowrap: boolean = false;
	/** height of the button, using preset values */
	export let height: string = 'default';

	export let primary: string | undefined = undefined;
	export let secondary: string | undefined = undefined;
	export let action: string | undefined = undefined;

	/** reverse the order of the button zone*/
	export let reverse: boolean = false;

	// for action
	let actionArgs: any;
	let actionComponent = Menu;
	let actionComponentProps = {};
	let actionContent = '';

	// seet use popper
	$: usePopper.parentNode = element;

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

<div><Icon icon="user" /></div>
<button
	class={className + ' w-' + size}
	class:loading
	bind:this={element}
	use:popper={usePopper}
	use:forwardEvents
	class:size={'w-' + size}
	{density}
	{nowrap}
	{height}
	{link}
	{bordered}
	{contained}
	disabled={loading}
	{...$$restProps}
>
	<div class="innerButton">
		{#if $$slots.startButtonSlot}
			<div class="startButtonSlot">
				<slot name="startButtonSlot" />
			</div>
		{/if}
		<div class="central"><slot>{null_to_empty(primary)}</slot></div>
		{#if $$slots.actionIcon}
			<div class="action">
				<slot name="actionIcon" />
				<!-- <Icon icon="chevron-right" fontSize="tiny" /> -->
			</div>
		{/if}
	</div>
	{#if loading}
		<div transition:fade>
			<div
				on:click={(event) => {
					event.stopPropagation();
					event.preventDefault();
				}}
				class="loadingButtonZone"
			>
				<div class="flex-h flex-align-middle gap-tiny">
					<div>
						<slot name="loadingIconButtonSlot"
							><div><Icon icon="spin" class="fa-spinner" /></div></slot
						>
					</div>
					<div>loading</div>
				</div>
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
		{@html secondary}
	</div>
{/if}
{#if element && $$slots.popper}
	<!-- <Popper {...actionArgs} parentNode={element}>
		<span slot="button">button</span>
		<slot name="popper">
			{#if actionArgs?.component}
				<svelte:component this={actionArgs.component} {...actionArgs.componentProps} />
			{/if}
		</slot>
	</Popper> -->
{/if}

<style lang="scss">
	button,
	button[contained='true'],
	input[type='button'],
	input[type='submit'] {
		vertical-align: middle;
		font-size: var(--slotui-button-font-size, 11px);
		// padding: var(--box-density-small, 0.5rem) 0.75rem;
		border-radius: var(---slotui-button-radius, var(--box-radius-tiny, 4px));
		border: 0.5px solid transparent;
		// padding: auto var(--box-density-preset-tiny);
		color: var(--theme-color-foreground);

		&[disabled] {
			color: var(--color-gray-800);
		}
		&:active,
		&:focus {
			outline: 0;
		}
	}
	button {
		position: relative;
		overflow: hidden;
		/** height presets */
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
		/** variant presets */
		&[bordered='true'] {
			color: var(--theme-color-foreground);
			border: 0.5px solid var(--theme-color-border);
			background-color: transparent;
			&:hover {
				border: 0.5px solid var(--theme-color-primary);
			}
			&:active,
			&:focus {
				box-shadow: var(--box-shad-3);
				border: 0.5px solid var(--theme-color-primary);
			}
		}
		&[contained='true'] {
			color: var(--theme-color-foreground);
			background-color: var(--color-gray-800-alpha-low, rgba(255, 255, 255, 0.1));
			&:hover {
				background-color: var(--theme-color-background);
			}
			&:active,
			&:focus {
				outline: 0;
				background-color: var(--theme-color-background-alpha);
				color: var(--theme-color-background);
				box-shadow: var(--box-shad-3);
			}
		}
		&[link='true'] {
			color: var(--theme-color-primary);
			background-color: transparent;
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
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
				background-color: var(--css-bacground-color, var(--theme-color-paper-alpha-low));
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
			justify-content: center;
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
				display: block;
				top: 0;
				bottom: 0;
				right: 0;
				background-color: rgba(255, 255, 255, 0.1);
				//width: var(--w-tiny);
				padding: 0 0.25rem;

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
