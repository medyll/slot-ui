<script lang="ts">
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component, get_slot_changes, null_to_empty } from 'svelte/internal';
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper';
	import { crossfade, fade, scale } from 'svelte/transition';
	import type { ElementProps } from 'src/types';
	import Divider from '../divider/Divider.svelte';
	import Menu from '$lib/ui/menu/Menu.svelte';
	import Popper from '$lib/ui/popper/Popper.svelte';
	import Icon from '../icon/Icon.svelte';

	export let presetDefault = 'bordered contained';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLButtonElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	let buttonType = 'button';
	export { buttonType as type };

	/** icon as a parameter*/
	export let icon: string | undefined = undefined;
	/** paramters for usePopper */
	export let usePopper: UsePopperProps | undefined = undefined;
	/** show loading state */
	export let loading: boolean = false;
	/** show chip */
	export let showChip: boolean = false;

	/** button style contained */
	export let contained: boolean | undefined = undefined;
	/** button style bordered */
	export let bordered: boolean | undefined = undefined;
	/** button style link */
	export let link: boolean | undefined = undefined;
	/** button style link */
	export let naked: boolean | undefined = undefined;

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

	if (contained || bordered || link) presetDefault = '';

	// for action
	let actionArgs: any;
	let actionComponent = Menu;
	let actionComponentProps = {};
	let actionContent = '';

	if (contained || bordered || link) {
		presetDefault = '';
	} else {
		link = presetDefault.includes('link');
		bordered = presetDefault.includes('bordered');
		contained = presetDefault.includes('contained');
	}

	const onActionClick = (event: MouseEvent) => {
		event.stopPropagation();
		/* openPopper('settingActions', {
			parentNode: event.currentTarget as HTMLElement,
			component: actionComponent,
			componentProps: componentProps ?? {},
			position: menuPosition
		}); */
	};

	$: if (usePopper) {
		usePopper.disabled = false;
		usePopper.parentNode = element;
	} else {
		usePopper = { disabled: true };
	}

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
	class={className + ' w-' + size}
	class:loading
	bind:this={element}
	use:popper={usePopper}
	use:forwardEvents
	on:click
	class:size={'w-' + size}
	data-height={height}
	disabled={loading}
	type={buttonType}
	{density}
	{nowrap}
	{link}
	{bordered}
	{contained}
	{naked}
	{presetDefault}
	{...$$restProps}
>
	<div class="innerButton">
		{#if $$slots.startButtonSlot || icon}
			<div class="startButtonSlot">
				<slot name="startButtonSlot">
					{#if icon}
						<Icon fontSize="small" {icon} />
					{/if}
				</slot>
			</div>
		{/if}
		{#if $$slots.default}
			<div class="central"><slot>{null_to_empty(primary)}</slot></div>
		{/if}
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
							><div><Icon icon="spinner" class="fa rotate" /></div>
						</slot>
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
	<div style={`display:inline-block;width:${element?.style?.width}px`}>
		<Divider />
		{@html secondary}
	</div>
{/if}
{#if element && $$slots.popper}
	<Popper {...actionArgs} parentNode={element}>
		<span slot="button">button</span>
		<slot name="popper">
			{#if actionArgs?.component}
				<svelte:component this={actionArgs.component} {...actionArgs.componentProps} />
			{/if}
		</slot>
	</Popper>
{/if}

<style lang="scss">
	@import '../../../lib/styles/presets.scss';
	.button,
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
		padding: 0;
		transition: all 0.2s;
		&::before,
		&::after {
			content: '';
			position: absolute;
			transition: all 0.3s;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
		}
		&[disabled] {
			color: var(--color-gray-800);
			border-color: var(--color-gray-800);
			opacity: 0.8;
		}
		&:hover {
			transform: scale(1.05);
			box-shadow: var(--box-shad-3);
		}
		&:active,
		&:focus {
			outline: 0;
		}
		&:active {
			transform: scale(0.9);
			border: 0.5px solid var(--theme-color-primary) !important;
			box-shadow: var(--box-shad-4);
		}
		&:focus {
			border: 0.5px solid var(--theme-color-primary);
			box-shadow: var(--box-shad-3);
		}
		@include input-sizes-presets;
	}
	.button,
	button {
		position: relative;
		overflow: hidden;
		&[nowrap] {
			color: ' ';
		}
		/** variant presets */
		&[bordered='true'] {
			color: var(--theme-color-foreground);
			border: 0.5px solid var(--theme-color-border);
			background-color: transparent;
			&:hover {
				border: 0.5px solid var(--theme-color-primary);
			}
		}
		&[contained='true'] {
			color: var(--theme-color-foreground);
			background-color: var(--theme-color-paper-alpha-low, rgba(255, 255, 255, 0.1)) !important;
			// background-color: var(--theme-color-primary-alpha, rgba(255, 255, 255, 0.1)) !important;
			&:hover {
				// background-color: var(--theme-color-paper) !important;
				background-color: var(--theme-color-primary, rgba(255, 255, 255, 0.1)) !important;
				color: white;
			}
			&:focus {
				outline: 0;
				background-color: var(--theme-color-background-alpha);
			}
		}
		&[link='true'] {
			color: var(--theme-color-primary);
			background-color: transparent;
			text-decoration: underline;
			text-underline-offset: 0.25rem;
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		}

		&[naked='true'] {
			color: inherit;
			background-color: transparent;
			border: 0.5px solid transparent;
			cursor: pointer;
			&:hover {
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
			height: 100%;
			.startButtonSlot {
				padding: 0 var(--box-density-preset-small, 0.25rem);
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.central {
				flex: 1;
				min-width: auto;
				width: auto;
				display: inline;
				vertical-align: bottom;
				padding: 0 0.5rem;
				&[nowrap] {
				}
			}
			.action {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				background-color: rgba(255, 255, 255, 0.1);
				width: var(--w-tiny);
				padding: 0 0.5rem;
				cursor: pointer;
				&:hover {
					background-color: rgba(255, 255, 255, 0.5);
				}
			}
		}
		.chip {
			position: absolute;
			z-index: 2;
			height: 4px;
			left: 50%;
			transform: translate(-50%, 0);
			width: 50%;
			background-color: var(--css-button-chip-color, var(--theme-color-primary));
			border-radius: 16px;
			bottom: 3px;
		}
	}
</style>
