<script>import { createEventForwarder } from '../../engine/engine';
import { get_current_component, get_slot_changes, null_to_empty } from 'svelte/internal';
import { popper } from '../../ui/popper/usePopper';
import { crossfade, fade, scale } from 'svelte/transition';
import Divider from '../divider/Divider.svelte';
import Menu from '../../ui/menu/Menu.svelte';
import Popper from '../../ui/popper/Popper.svelte';
import Icon from '../icon/Icon.svelte';
export let presetDefault = 'bordered contained';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
/** icon as a parameter*/
export let icon = undefined;
/** paramters for usePopper */
export let usePopper = undefined;
/** show loading state */
export let loading = false;
/** show chip */
export let showChip = false;
/** button style contained */
export let contained = presetDefault.includes('contained');
/** button style bordered */
export let bordered = presetDefault.includes('bordered');
/** button style link */
export let link = presetDefault.includes('link');
/** with of the button using  presets */
export let size = 'medium';
/** density of the button, using preset values */
export let density = 'default';
/** add ellipsis on overflowed text */
export let nowrap = false;
/** height of the button, using preset values */
export let height = 'default';
export let primary = undefined;
export let secondary = undefined;
export let action = undefined;
/** reverse the order of the button zone*/
export let reverse = false;
// for action
let actionArgs;
let actionComponent = Menu;
let actionComponentProps = {};
let actionContent = '';
if (contained || bordered || link) {
    presetDefault = '';
}
const onActionClick = (event) => {
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

<button
	class={className + ' w-' + size}
	class:loading
	bind:this={element}
	use:popper={usePopper}
	use:forwardEvents
	on:click
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
		{#if $$slots.startButtonSlot || icon}
			<div class="startButtonSlot">
				<slot name="startButtonSlot">
					{#if icon}
						<Icon fontSize="small" {icon} />
					{/if}
				</slot>
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
							><div><Icon icon="spinner" class="fa-spinner" /></div>
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
	<br />
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

<style>button,
button[contained=true],
input[type=button],
input[type=submit] {
  vertical-align: middle;
  font-size: var(--slotui-button-font-size, 11px);
  border-radius: var(---slotui-button-radius, var(--box-radius-tiny, 4px));
  border: 0.5px solid transparent;
  color: var(--theme-color-foreground);
  padding: 0;
}
button[disabled],
button[contained=true][disabled],
input[type=button][disabled],
input[type=submit][disabled] {
  color: var(--color-gray-800);
}
button:active, button:focus,
button[contained=true]:active,
button[contained=true]:focus,
input[type=button]:active,
input[type=button]:focus,
input[type=submit]:active,
input[type=submit]:focus {
  outline: 0;
}

button {
  position: relative;
  overflow: hidden;
  /** height presets */
  /** variant presets */
}
button[height=tiny] {
  height: 1rem;
}
button[height=small] {
  height: 1.5rem;
}
button[height=default] {
  height: 2rem;
}
button[height=large] {
  height: 4rem;
}
button[nowrap] {
  color: "red";
}
button[bordered=true] {
  color: var(--theme-color-foreground);
  border: 0.5px solid var(--theme-color-border);
  background-color: transparent;
}
button[bordered=true]:hover {
  border: 0.5px solid var(--theme-color-primary);
}
button[bordered=true]:focus {
  box-shadow: var(--box-shad-3);
  border: 0.5px solid var(--theme-color-primary);
}
button[contained=true] {
  color: var(--theme-color-foreground);
  background-color: var(--color-gray-800-alpha-low, rgba(255, 255, 255, 0.1)) !important;
}
button[contained=true]:hover {
  background-color: var(--theme-color-background);
}
button[contained=true]:focus {
  outline: 0;
  background-color: var(--theme-color-background-alpha);
  box-shadow: var(--box-shad-3);
}
button[link=true] {
  color: var(--theme-color-primary);
  background-color: transparent;
  cursor: pointer;
}
button[link=true]:hover {
  text-decoration: underline;
}
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
  background-color: var(--css-bacground-color, var(--theme-color-paper-alpha-low));
  backdrop-filter: blur(3px);
}
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
button .innerButton .startButtonSlot {
  padding: 0 var(--box-density-preset-small, 0.25rem);
}
button .innerButton .central {
  flex: 1;
  min-width: auto;
  width: auto;
  display: inline;
  vertical-align: bottom;
}
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
button .innerButton .action:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
button .chip {
  position: absolute;
  z-index: 2;
  height: 2px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50%;
  background-color: var(--css-button-chip-color, var(--theme-color-primary));
  border-radius: 16px;
  bottom: 3px;
}</style>
