<svelte:options accessors />

<script>import { get_current_component } from 'svelte/internal';
import BottomBar from '../bottomBar/BottomBar.svelte';
import IconButton from '../button/IconButton.svelte';
import Button from '../button/Button.svelte';
import Icon from '../icon/Icon.svelte';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
/*  end slotUi exports*/
/** title of the drawer */
export let primary = undefined;
/** sub-title of the drawer */
export let secondary = undefined;
/** icon of the drawer */
export let icon = undefined;
/** Should the drawer be open */
export let isOpen = true;
/** Should the closer icon be hidden */
export let hideCloseIcon = false;
/**
 * position
 * @type 'wide' | 'inplace'
 */
export let flow = 'fixed'; // fixed,relative,absolute
export let stickTo = 'left';
export let showOpenerIcon = false;
/** @deprecated use actions.toggle */
export function toggle(visibleSate) {
    isOpen = visibleSate !== undefined ? visibleSate : !isOpen;
}
/** should be used  */
export const actions = {
    toggle: (visibleSate) => {
        isOpen = visibleSate !== undefined ? visibleSate : !isOpen;
    }
};
/** default width of the drawer in vertical mode */
export let defaultWidth = '288px';
/** minimum width of the drawer in vertical mode and closed state */
export let defaultVisibleArea = '0px';
/** default height of the drawer in horizontal mode */
export let defaultHeight = '288px';
export let style = '';
let dspStyle = undefined;
const stickToStyle = {
    right: 'right:0;top:0;height:100%;height:100%;',
    left: 'left:0;top:0;bottom:0;height:100%;height:100%;',
    top: `left:0;right:0;top:0;height:${defaultHeight};`,
    bottom: `left:0;right:0;bottom:0;height:${defaultHeight};`
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
$: widthStyle = isOpen ? defaultWidth : defaultVisibleArea;
$: sens = 'chevron-' + sensSuffix;
$: finalStyle = `display:${dspStyle};position:${flow};${stickToStyle[stickTo]};${dimKeyVary}:${widthStyle};${style};`;
</script>

<div
	data-open={isOpen}
	bind:this={element}
	class="drawer flex-v h-full {className}"
	style={finalStyle}  
>
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
		{#if $$slots.topSlot || Boolean(primary) || Boolean(icon) || $$slots.iconSlot }
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
					<slot name="topSlot" />
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
		<div class="content" style="position:relative;flex:1;overflow:hidden">
			<slot />
		</div>
		{#if $$slots.bottomSlot}
			<BottomBar density="tight">
				<slot name="bottomSlot" />
			</BottomBar>
		{/if}
	{/if}
</div>

<style global>:global(.drawer) {
  color: var(--css-drawer-color, inherit);
  background-color: var(--slotui-drawer-bg-color, var(--theme-color-paper-alpha-low));
  backdrop-filter: var(--slotui-drawer-backdrop-blur, blur(0px));
  z-index: 3000;
  box-shadow: var(--box-shad-3);
  border-left: 1px solid var(--slotui-drawer-border-color, var(--theme-color-primary-alpha));
  overflow: visible;
  display: flex;
  flex-direction: column;
  transition: all 0.1s;
}
:global(.drawer) :global(.opener) {
  position: absolute;
  z-index: 8600;
}
:global(.drawer) :global(.header) {
  border-bottom: 1px solid var(--theme-color-foreground-alpha-high);
  min-height: 48px;
  display: flex;
  align-items: center;
}
:global(.drawer) :global(.header) :global(.title) {
  font-size: large;
}
:global(.drawer) :global(.content) {
  flex: 1;
  position: relative;
}</style>
