<script>import { slide } from 'svelte/transition';
import Icon from '../icon/Icon.svelte';
import { createEventForwarder } from '../../engine/eventForwarder';
import { get_current_component } from 'svelte/internal';
import { elem } from '../../engine/elem.js';
import Button from '../button/Button.svelte';
/** @restProps {button | a} */
let className = '';
export { className as class };
export let style = '';
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/** displayed title of the cartouche */
export let primary = undefined;
/** displayed sub title of the cartouche */
export let secondary = undefined;
export let icon = undefined;
/** can be set as a prop or as a className */
export let stacked = false;
export let component = undefined;
export let componentProps = {};
/** show the title divider line */
export let showTitleDivider = false;
/** show the default border style */
export let bordered = true;
export let isOpen = false;
/** use to control cartouche */
export const actions = {
    open: () => {
        isOpen = true;
    },
    toggle: () => {
        isOpen = !isOpen;
    }
};
let chevronIcon;
$: chevronIcon = !isOpen ? 'chevron-down' : 'chevron-up';
</script>

<div
	class:stacked
	bind:this={element}
	class="cartoucheHolder {className}"
	{style}
	data-bordered={bordered ?? false}
	use:forwardEvents
>
	<div class="cartouche" on:click={actions.toggle}>
		{#if icon || $$slots.cartoucheIconSlot}
			<div class="icon pad-l-1">
				<slot name="cartoucheIconSlot">
					<Icon {icon} />
				</slot>
			</div>
		{/if}
		<div class="cartoucheLabel  pad-l-1">
			{#if primary || $$slots.primarySlot}
				<slot name="primarySlot">{primary}</slot>
				<div><slot name="secondarySlot">{secondary ?? ''}</slot></div>
			{/if}
		</div>
		<div class={showTitleDivider ? 'divider' : ''} style="flex:1" />
		{#if $$slots.cartoucheActionSlot}
			<div
				on:click={(event) => {
					event.preventDefault();
					event.stopPropagation();
				}}
				class="cartoucheAction"
			>
				<slot name="cartoucheActionSlot" />
			</div>
		{/if}
		<div class="chevron">
			<Button naked icon={chevronIcon} />
		</div>
	</div>

	{#if isOpen}
		<div class="cartoucheContent" transition:slide>
			{#if component}
				<svelte:component this={component} {...componentProps} />
			{/if}
			<slot />
		</div>
	{/if}
</div>

<style>.cartoucheHolder {
  border-radius: 6px;
  overflow: hidden;
}
.cartoucheHolder[data-bordered=true] {
  border: 1px solid var(--theme-color-foreground-alpha-high);
}
.cartoucheHolder .cartoucheContent {
  overflow: hidden;
  background-color: var(--theme-color-background);
}

.cartouche {
  display: flex;
  gap: 8px;
  background-color: var(--theme-color-background);
  align-items: center;
  padding: 0.25rem;
}
.cartouche:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
.cartouche .cartoucheLabel {
  cursor: pointer;
}
.cartouche .chevron {
  cursor: pointer;
}
.cartouche .divider {
  border-bottom: 1px solid var(--theme-color-foreground-alpha);
}

.cartoucheHolder.stacked {
  border-radius: 0;
}
.cartoucheHolder.stacked:first-child {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.cartoucheHolder.stacked:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}</style>
