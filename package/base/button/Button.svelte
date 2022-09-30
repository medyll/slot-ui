<script>import { createEventForwarder } from '../../engine/engine';
import { get_current_component, get_slot_changes, null_to_empty } from 'svelte/internal';
import { popper } from '../../ui/popper/usePopper.js';
import { crossfade, fade, scale } from 'svelte/transition';
import Divider from '../divider/Divider.svelte';
import Menu from '../../ui/menu/Menu.svelte';
import Popper from '../../ui/popper/Popper.svelte';
import Icon from '../icon/Icon.svelte';
import { autofocus } from '../../uses/autofocus/autofocus';
export let presetDefault = 'bordered contained';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
let buttonType = 'button';
export { buttonType as type };
/** icon as a parameter*/
export let icon = undefined;
/** icon as a parameter*/
export let iconFamily = 'mdi';
/** icon color as a parameter*/
export let iconColor = '#666';
/** paramters for usePopper */
export let usePopper = undefined;
/** show loading state */
export let loading = false;
/** show chip */
export let showChip = false;
/** show / hide popper, when $$slots.popper exists */
export let popperOpen = false;
;
/** button style contained */
export let contained = undefined;
/** button style bordered */
export let bordered = undefined;
/** button style link */
export let link = undefined;
/** button style link */
export let naked = undefined;
/** with of the button using  presets */
export let size = 'auto';
/** density of the button, using preset values */
export let density = 'default';
/** add ellipsis on overflowed text */
export let nowrap = false;
/** height of the button, using preset values */
export let height = 'default';
/**  button selected */
export let selected = false;
/**  give focus to button on display */
export let focus = false;
/** action button css style */
export let actionStyle = undefined;
/** whole container css style */
export let containerStyle = undefined;
export let primary = undefined;
export let secondary = undefined;
/** reverse the order of the button zone*/
export let reverse = false;
if (contained || bordered || link || naked)
    presetDefault = '';
// for action
let actionArgs;
let actionComponent = Menu;
let actionComponentProps = {};
let actionContent = '';
if (contained || bordered || link) {
    presetDefault = '';
}
else {
    link = presetDefault.includes('link');
    bordered = presetDefault.includes('bordered');
    contained = presetDefault.includes('contained');
}
function useAutoFocus(node) {
    if (focus)
        return autofocus(node);
}
$: if (usePopper) {
    usePopper.disabled = false;
    usePopper.parentNode = element;
}
else {
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

<container style="position:relative;display:flex;{containerStyle}">
	<button
		class={'w-' + size + ' ' +className}
		class:loading
		bind:this={element}
		use:popper={usePopper}
		use:forwardEvents
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
	>
		<div class="innerButton">
			{#if $$slots.startButtonSlot || icon}
				<div class="startButtonSlot">
					<slot name="startButtonSlot">
						{#if icon}
							<Icon fontSize="small" {icon} style="color:{iconColor}" {iconFamily} />
						{/if}
					</slot>
				</div>
			{/if}
			{#if $$slots.default ?? primary}
				<div class="central"><slot>{null_to_empty(primary)}</slot></div>
			{/if}
			{#if $$slots.actionIcon}
				{#key $$slots.actionIcon}
					<div
						class="action"
						on:click={(e) => {
							e.stopPropagation();
							e.preventDefault();
						}}
					>
						<slot name="actionIcon" />
					</div>
				{/key}
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
						<slot name="loadingIconButtonSlot">
							<div><Icon icon="loading" rotate /></div>
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
	{#if element && $$slots.popper}
		<svelte:self
			contained
			style="position:absolute;right:-20px;height:100%;{actionStyle}"
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
				<slot name="popper" />
			</Popper>
		{/if}
	{/if}
</container>
{#if secondary}
	<div style={`display:block;width:${element?.style?.width}px`}>
		<Divider />
		{@html secondary}
	</div>
{/if}

<style>* {
  box-sizing: border-box;
}

.actionButton {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  width: var(--w-tiny);
  cursor: pointer;
}
.actionButton:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

/* button *, .button *, input[type='button'] * {
	pointer-events: none;
} */
.button,
button,
button[contained=true],
input[type=button],
input[type=submit] {
  vertical-align: middle;
  font-size: var(--slotui-button-font-size, 11px);
  border-radius: var(---slotui-button-radius, var(--box-radius-tiny, 4px));
  border: 0.5px solid transparent;
  color: var(--theme-color-foreground);
  padding: 0;
  transition: all 0.2s;
}
.button::before, .button::after,
button::before,
button::after,
button[contained=true]::before,
button[contained=true]::after,
input[type=button]::before,
input[type=button]::after,
input[type=submit]::before,
input[type=submit]::after {
  content: "";
  position: absolute;
  transition: all 0.3s;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.button[disabled],
button[disabled],
button[contained=true][disabled],
input[type=button][disabled],
input[type=submit][disabled] {
  color: var(--color-gray-800);
  border-color: none;
  opacity: 0.4;
}
.button:hover,
button:hover,
button[contained=true]:hover,
input[type=button]:hover,
input[type=submit]:hover {
  transform: scale(1.05);
  box-shadow: var(--box-shad-3);
}
.button:active, .button:focus,
button:active,
button:focus,
button[contained=true]:active,
button[contained=true]:focus,
input[type=button]:active,
input[type=button]:focus,
input[type=submit]:active,
input[type=submit]:focus {
  outline: 0;
}
.button:active,
button:active,
button[contained=true]:active,
input[type=button]:active,
input[type=submit]:active {
  transform: scale(0.97);
  border: 0.5px solid var(--theme-color-primary) !important;
  box-shadow: var(--box-shad-4);
}
.button:focus,
button:focus,
button[contained=true]:focus,
input[type=button]:focus,
input[type=submit]:focus {
  border: 0.5px solid var(--theme-color-primary);
  box-shadow: var(--box-shad-3);
}
.button[data-height=tiny],
button[data-height=tiny],
button[contained=true][data-height=tiny],
input[type=button][data-height=tiny],
input[type=submit][data-height=tiny] {
  height: calc(1rem - var(--slotui-border-bottom-size, 2px));
  padding: 0;
}
.button[data-height=small],
button[data-height=small],
button[contained=true][data-height=small],
input[type=button][data-height=small],
input[type=submit][data-height=small] {
  height: calc(1.9rem - var(--slotui-border-bottom-size, 2px));
}
.button[data-height=default],
button[data-height=default],
button[contained=true][data-height=default],
input[type=button][data-height=default],
input[type=submit][data-height=default] {
  height: calc(2.5rem - var(--slotui-border-bottom-size, 2px));
}
.button[data-height=large],
button[data-height=large],
button[contained=true][data-height=large],
input[type=button][data-height=large],
input[type=submit][data-height=large] {
  height: calc(4rem - var(--slotui-border-bottom-size, 2px));
}
.button[borderless=true],
button[borderless=true],
button[contained=true][borderless=true],
input[type=button][borderless=true],
input[type=submit][borderless=true] {
  border: 0px solid none;
}

.button,
button {
  position: relative;
  overflow: hidden;
  /** variant presets */
}
.button[nowrap],
button[nowrap] {
  color: " ";
}
.button[selected=true],
button[selected=true] {
  box-shadow: var(--box-shad-3);
  border: 0.5px solid var(--theme-color-paper-alpha-low);
  background-color: transparent;
  font-weight: bold;
}
.button[bordered=true],
button[bordered=true] {
  color: var(--theme-color-foreground);
  border: 0.5px solid var(--theme-color-border);
  box-shadow: var(--box-shad-1);
  background-color: transparent;
}
.button[bordered=true]:hover,
button[bordered=true]:hover {
  border: 0.5px solid var(--theme-color-primary);
}
.button[contained=true],
button[contained=true] {
  color: var(--theme-color-foreground);
  background-color: var(--theme-color-paper-alpha-low, rgba(255, 255, 255, 0.1)) !important;
}
.button[contained=true]:hover,
button[contained=true]:hover {
  background-color: var(--theme-color-primary, rgba(255, 255, 255, 0.1)) !important;
  color: white;
}
.button[contained=true]:focus,
button[contained=true]:focus {
  outline: 0;
  background-color: var(--theme-color-background-alpha);
}
.button[link=true],
button[link=true] {
  color: var(--theme-color-primary);
  background-color: transparent;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  cursor: pointer;
}
.button[link=true]:hover,
button[link=true]:hover {
  text-decoration: underline;
}
.button[naked=true],
button[naked=true] {
  color: inherit;
  background-color: transparent !important;
  border: 0.5px solid transparent;
  cursor: pointer;
}
.button[naked=true]:hover, .button[naked=true]:active, .button[naked=true]:focus,
button[naked=true]:hover,
button[naked=true]:active,
button[naked=true]:focus {
  background-color: transparent !important;
  border: 0.5px solid transparent;
  color: inherit;
}
.button.loading .loadingButtonZone,
button.loading .loadingButtonZone {
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
  background-color: var(--css-background-color, var(--theme-color-paper));
  color: var(--css-background-color, var(--theme-color-secondary));
  backdrop-filter: blur(3px);
}
.button .innerButton,
button .innerButton {
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  min-width: auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.button .innerButton .startButtonSlot,
button .innerButton .startButtonSlot {
  padding: 0 var(--box-density-preset-small, 0.25rem);
  display: flex;
  justify-content: center;
  align-items: center;
}
.button .innerButton .central,
button .innerButton .central {
  flex: 1;
  min-width: auto;
  width: auto;
  display: inline;
  vertical-align: bottom;
  padding: 0 0.5rem;
}
.button .innerButton .action,
button .innerButton .action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  width: var(--w-tiny);
  padding: 0 0.5rem;
  cursor: pointer;
}
.button .innerButton .action:hover,
button .innerButton .action:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.button .chip,
button .chip {
  position: absolute;
  z-index: 2;
  height: 3px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50%;
  background-color: var(--css-button-chip-color, var(--theme-color-primary));
  border-radius: 16px;
  bottom: 2px;
}</style>
