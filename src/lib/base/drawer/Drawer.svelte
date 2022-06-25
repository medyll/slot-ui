<svelte:options accessors />

<script lang="ts">
	import BottomBar from '../bottomBar/BottomBar.svelte';
	import IconButton from '../button/IconButton.svelte';
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component } from 'svelte/internal';
	import Button from '../button/Button.svelte';

	type DrawerTitleType = string | undefined;
	export type toggle = () => void;

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let primary: DrawerTitleType;

	/** Should the drawer be open */
	export let isOpen: boolean = true;
	/** Should the closer icon be hidden */
	export let hideCloseIcon: boolean = false;

	/**
	 * position
	 * @type 'wide' | 'inplace'
	 */
	export let position: 'wide' | 'inplace' = 'wide';
	export let stickTo: 'right' | 'left' = 'right';
	export let showOpenerIcon: boolean = false;

	export function toggle(visibleSate?: boolean) {
		isOpen = visibleSate !== undefined ? visibleSate : !isOpen;
	}

	export let style: string = '';
	let dspStyle: string | undefined = undefined;
	/* let widthStyle;
  let sens;
  let pos; */

	let positionStyle = position === 'wide' ? 'fixed' : 'relative';
	$: dspStyle = isOpen ? 'inherit' : 'none';
	$: widthStyle = isOpen ? '288px' : '0px';

	$: sens = !isOpen ? 'chevron-right' : 'chevron-left';
	$: pos = !isOpen ? '-32' : '0';

	$: style = `position:${positionStyle};width:${widthStyle}!important`;
</script>

<div
	data-open={isOpen}
	bind:this={element}
	class="drawer flex-v h-full {className}"
	{style}
	use:forwardEvents
>
	<div style="position: absolute;z-index:8600;right:{pos}px">
		{#if showOpenerIcon}
			<!-- <IconButton
                    --css-button-radius="6px"
                    style="width:32px;height:32px"
                    icon="{sens}"
                    iconFamily="fa-solid"
                    iconFontSize="small"
                    on:click={() => {
								toggle();
							}}
           /> -->
		{/if}
	</div>
	{#if isOpen}
		{#if $$slots.topBarSlot || Boolean(primary) || !hideCloseIcon}
			<div class="header flex-h">
				<div class="flex-main flex-h flex-align-middle ">
					{#if primary}
						<span style="font-size:18px;" class="pad-l-4">{primary}</span>
					{/if}
					<slot name="topBarSlot" />
				</div>
				{#if !hideCloseIcon}
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
		<div class="flex-main overflow-hidden">
			{#if $$slots.default}
				<slot />
			{/if}
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
