<svelte:options accessors />

<script lang="ts">
	import BottomBar from '../bottomBar/BottomBar.svelte';
	import IconButton from '../button/IconButton.svelte';
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component } from 'svelte/internal';
	import Button from '../button/Button.svelte';
	import Icon from '../icon/Icon.svelte';

	type DrawerTitleType = string | undefined;
	export type toggle = () => void;

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	/** title of the drawer */
	export let primary: DrawerTitleType = undefined;
	/** sub-title of the drawer */
	export let secondary: DrawerTitleType = undefined;
	/** icon of the drawer */
	export let icon: string | undefined = undefined;

	/** Should the drawer be open */
	export let isOpen: boolean = true;
	/** Should the closer icon be hidden */
	export let hideCloseIcon: boolean = false;

	/**
	 * position
	 * @type 'wide' | 'inplace'
	 */
	export let flow: 'fixed' | 'relative' | 'absolute' = 'relative'; // fixed,relative,abolute
	export let stickTo: 'right' | 'left' | 'top' | 'bottom' = 'left';
	export let showOpenerIcon: boolean = false;

	export function toggle(visibleSate?: boolean) {
		isOpen = visibleSate !== undefined ? visibleSate : !isOpen;
	}

	export let style: string = '';
	let dspStyle: string | undefined = undefined;

	const stickToStyle = {
		right: 'right:0;top:0;height:100%;height:100%;',
		left: 'left:0;top:0;bottom:0;height:100%;height:100%;',
		top: 'left:0;right:0;top:0;height: 288px;',
		bottom: 'left:0;right:0;bottom:0;height: 288px;'
	};

	const openerIconStyle = {
		right: 'left:-16px;top:8px;',
		left: 'right:-16px;top:8px;',
		top: 'bottom:-16px;right:8px;',
		bottom: 'top:-16px;right:8px;'
	};

	let sensSuffix = '';
	$: switch (stickTo) {
		case 'top':
			sensSuffix = isOpen ? 'up' : 'down';
			break;
		case 'right':
			sensSuffix = isOpen ? 'right' : 'left';
			break;
		case 'bottom':
			sensSuffix = isOpen ? 'down' : 'up';
			break;
		case 'left':
			sensSuffix = isOpen ? 'left' : 'right';
			break; 
	}

	$: dimKeyVary = ['top', 'bottom'].includes(stickTo) ? 'height' : 'width';

	$: dspStyle = isOpen ? 'flex' : 'flex';
	$: widthStyle = isOpen ? '288px' : '24px';
	
	$: sens = 'chevron-' + sensSuffix
	$: pos = !isOpen ? '-32' : '0';

	$: style = `display:${dspStyle};position:${flow};${stickToStyle[stickTo]};${dimKeyVary}:${widthStyle};`;
</script>

<div data-open={isOpen} bind:this={element} class="drawer   {className}" {style} use:forwardEvents>
	<div class="opener" style={openerIconStyle[stickTo]}>
		{#if showOpenerIcon}
			<IconButton
				--css-button-radius="50%"
				style="width:32px;height:32px"
				icon={sens}
				iconFamily="fa-solid"
				iconFontSize="small"
				on:click={() => {
					toggle();
				}}
			/>
		{/if}
	</div>
	{#if isOpen}
		{#if $$slots.topBarSlot || Boolean(primary) || Boolean(icon) || $$slots.iconSlot || !hideCloseIcon}
			<div class="header flex-h">
				{#if Boolean(icon) || $$slots.iconSlot}
					<div class="pad-ii-1">
						<slot name="iconSlot">
							<Icon {icon} />
						</slot>
					</div>
				{/if}
				<div class="flex-main   flex-align-middle ">
					<div class="flex-v gap-tiny">
						{#if primary}
							<div style="font-size:18px;" class="pad-l-1">{primary}</div>
						{/if}
						{#if secondary}
							<div class="pad-l-1">{secondary}</div>
						{/if}
					</div>
					<slot name="topBarSlot" />
				</div>
				{#if !hideCloseIcon && !showOpenerIcon}
					<div>
						<Button
							on:click={() => {
								toggle();
							}}
							iconFontSize="small"
							icon="window-close"
							naked
						/>
					</div>
				{/if}
			</div>
		{/if}
		<div class="content">
			<div style="height;100%;overflow:auto;">
				<slot />
			</div>
		</div>
		{#if $$slots.drawerBottomBarSlot}
			<BottomBar>
				<slot name="drawerBottomBarSlot" />
			</BottomBar>
		{/if}
	{/if}
</div>

<style global lang="scss">
	@import 'Drawer';
</style>
