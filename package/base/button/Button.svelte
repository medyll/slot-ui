<script>import { createEventForwarder } from '../../engine/engine';
import { get_current_component, get_slot_changes, null_to_empty } from 'svelte/internal';
import { popper } from '../../ui/popper/usePopper';
import { crossfade, fade, scale } from 'svelte/transition';
import Divider from '../divider/Divider.svelte';
import Menu from '../../ui/menu/Menu.svelte';
import Popper from '../../ui/popper/Popper.svelte';
import Icon from '@iconify/svelte';
export let presetDefault = 'contained';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
/** paramters for usePopper */
export let usePopper = { disabled: true };
/** show loading state */
export let loading = false;
/** show chip */
export let showChip = false;
/** button style contained */
export let contained = presetDefault === 'contained';
/** button style bordered */
export let bordered = presetDefault === 'bordered';
/** button style link */
export let link = presetDefault === 'link';
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
	{contained}
	{bordered}
	{link}
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
	<Popper {...actionArgs} parentNode={element}>
		<span slot="button">button</span>
		<slot name="popper">
			{#if actionArgs?.component}
				<svelte:component this={actionArgs.component} {...actionArgs.componentProps} />
			{/if}
		</slot>
	</Popper>
{/if}

<style>button {
  font-size: 11px;
  color: var(--theme-color-foreground);
  border: 0.5px solid var(--theme-color-border);
  border-radius: var(--box-radius-tiny, 4px);
  background-color: var(--color-gray-800-alpha-low, rgba(255, 255, 255, 0.1));
  padding: auto var(--box-density-preset-tiny);
  /* &.w-tiny{
            padding:var(--box-density-small,0.75rem)
        } */
}
button:hover {
  background-color: var(--color-gray-800);
}
button:active {
  background-color: var(--theme-color-text);
  color: var(--theme-color-background);
  box-shadow: var(--box-shad-10);
}
button[disabled] {
  color: var(--color-gray-800);
}

button {
  position: relative;
  overflow: hidden;
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
}
button .innerButton .startButtonSlot {
  padding: 0 var(--box-density-preset-small, 0.25rem);
}
button .innerButton .central {
  flex: 1;
  min-width: auto;
  width: auto;
}
button .innerButton .action {
  display: block;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0 0.25rem;
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
