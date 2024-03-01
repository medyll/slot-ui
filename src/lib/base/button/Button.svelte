<script lang="ts">
	/** @restProps { button} */
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper.js';
	import type { ElementProps } from '$lib/types/index.js';
	import Divider from '$lib/base/divider/Divider.svelte';
	import Menu from '$lib/ui/menu/Menu.svelte';
	import Popper from '$lib/ui/popper/Popper.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';
	import { autofocus } from '$lib/uses/autofocus/autofocus.js';

	let presetDefault = 'bordered contained';
	/*  common slotUi exports  */
	let className = '';
	export { className as class };
	export let element: HTMLButtonElement | null = null; //
	export let style: string | null = null;
	/*  end slotUi exports*/
	let buttonType = 'button';
	export { buttonType as type };
	/** icon as a parameter */
	export let icon: string | undefined = undefined;
	/** icon as a parameter*/
	export let iconFamily: string | undefined = 'mdi';
	/** icon color as a parameter*/
	export let iconColor: string = '#666';
	let red;
	/** endIcon as a parameter */
	export let endIcon: string | undefined = undefined;
	/** endIcon color as a parameter*/
	export let endIconColor: string = '#666';
	/**
	 * endIcon
	 * @type {'auto' | 'tiny' | 'small' | 'medium' | 'large' | 'full'}
	 */
	export let endIconSize: string = 'small';

	/** background color theme */
	export let bgTheme: string | undefined = undefined;
	/** paramters for usePopper */
	export let usePopper: UsePopperProps | undefined = undefined;
	/** show loading state */
	export let loading: boolean = false;
	/** show chip */
	export let showChip: boolean = false;
	/** show / hide popper, when $$slots.popper exists */
	export let popperOpen: boolean = false;
	/** button style contained */
	export let contained: boolean | undefined = undefined;
	/** button style bordered */
	export let bordered: boolean | undefined = undefined;
	/** button style link */
	export let link: boolean | undefined = undefined;
	/** button style link */
	export let naked: boolean | undefined = undefined;

	/**
	 * with of the button using  presets
	 * @type {'auto' | 'tiny' | 'small' | 'medium' | 'large' | 'full'}
	 */
	export let size: ElementProps['sizeType'] | 'full' = 'auto';
	/**
	 * density of the button, using preset values
	 * @type {'default' | 'dense' | 'extra-dense'}
	 */
	export let density: ElementProps['density'] = 'default';
	/** add ellipsis on overflowed text */
	export let nowrap: boolean = false;

	/**
	 * height of the button, using preset values
	 * @type {'auto' | 'tiny' | 'small' | 'medium' | 'large' | 'full'}
	 */
	export let height: string = 'default';
	/**  button selected */
	export let selected: boolean = false;
	/**  give focus to button on display */
	export let focus: boolean = false;

	/** action button css style */
	export let actionStyle: string | undefined = undefined;
	/** whole container css style */
	export let htmlRootStyle: string | undefined = undefined;

	export let primary: string | undefined = undefined;
	export let secondary: string | undefined = undefined;

	/** reverse the order of the button zone*/
	export let reverse: boolean = false;

	/** aspect ratio of the button */
	export let ratio: string = 'auto';

	// slots
	export let buttonStart: string | undefined = undefined;
	if (contained || bordered || link || naked) presetDefault = '';

	let containerRef;
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

	function useAutoFocus(node: HTMLElement) {
		if (focus) return autofocus(node);
	}

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

<div bind:this={containerRef} style="position:relative;display:flex;{htmlRootStyle}">
	<button
		class={className}
		class:loading
		bind:this={element}
		use:popper={usePopper}
		use:useAutoFocus
		on:click
		on:clickAway={() => {
			popperOpen = false;
		}}
		data-height={height}
		type={buttonType}
		{density}
		{nowrap}
		{link}
		{bordered}
		{contained}
		{naked}
		{selected}
		{presetDefault}
		{...$$restProps}
		data-width={size}
		style:background="var(--sld-color-{bgTheme})"
		style:color={bgTheme ? 'white' : ''}
		style:aspect-ratio={ratio}
	>
		<div class="innerButton">
			{#if $$slots.buttonStart || icon}
				<div class="buttonStart">
					<slot name="buttonStart">
						{#if icon}
							<Icon fontSize="small" {icon} color={iconColor} {iconFamily} />
						{/if}
					</slot>
				</div>
			{/if}
			{#if $$slots.default ?? primary}
				<div class="central">
					<slot>{primary ?? ''}</slot>
				</div>
			{/if}
			{#if $$slots.buttonEnd || endIcon}
				<div class="action">
					<slot name="buttonEnd">
						<Icon fontSize="small" icon={endIcon} color={endIconColor} />
					</slot>
				</div>
			{/if}
		</div>
		{#if loading}
			<div
				on:click={(event) => {
					event.preventDefault();
					event.stopPropagation();
				}}
				class="loadingButtonZone"
			>
				<div class="flex-h flex-align-middle gap-tiny">
					<div>
						<slot name="buttonLoadingIcon">
							<Icon icon="loading" rotate />
						</slot>
					</div>
					<div>loading</div>
				</div>
			</div>
		{/if}
		{#if showChip}
			<span class="chip" />
		{/if}
	</button>
	{#if element && $$slots.buttonPopper}
		<svelte:self
			contained
			style="position:relative;height:100%;{actionStyle}"
			on:click={(event) => {
				event.preventDefault();
				popperOpen = !popperOpen;
			}}
			size="tiny"
			icon="chevron-{popperOpen ? 'up' : 'down'}"
			iconSize="small"
			class="actionButton"
		/>
		{#if popperOpen}
			<Popper code="button" {...actionArgs} parentNode={element}>
				<slot name="buttonPopper" />
			</Popper>
		{/if}
	{/if}
</div>
{#if secondary}
	<div style={`display:block;width:${element?.style?.width}px`}>
		<Divider />
		{@html secondary}
	</div>
{/if}

<style lang="scss">
	@import './Button.scss';
</style>
