<script>import { fade } from 'svelte/transition';
import Divider from '../divider/Divider.svelte';
import IconButton from '../button/IconButton.svelte';
import { createEventForwarder } from '../../engine/engine';
import { createEventDispatcher, get_current_component } from 'svelte/internal';
import Button from '../button/Button.svelte';
const dispatch = createEventDispatcher();
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/** type of levels */
export let level = 'info';
export let action = () => { };
export let data = {};
export let text = undefined;
export let message = undefined;
export let isDragable = false;
export let isOpen = true;
export const actions = {
    open: () => {
        isOpen = true;
    },
    toggle: () => {
        isOpen = !isOpen;
    },
    close: () => {
        isOpen = !isOpen;
    }
};
const handleClick = (event) => {
    if (event?.target?.attributes['data-close']) {
        event.stopPropagation();
        actions.close();
        dispatch('alert:closed');
    }
};
</script>

{#if isOpen}
	<div
		use:forwardEvents
		bind:this={element}
		transition:fade
		class="alert shad-4 {className}"
		on:click={handleClick}
	>
		<div class="pad-1 ftdr  border-b-2 border-color-scheme-{level}">
			<div class="flex-h flex-align-middle ">
				<div class="pad-1">
					<div class="dot bg-themed-scheme-{level}" />
				</div>
				<div class="pad-1 flex-main flex-h flex-align-middle">
					<div class="flex-main">
						<slot>{message}</slot>
					</div>
					<slot name="topButtonSlot" />
					<Button
						size="auto"
						icon="window-close"
						naked
						on:click={() => {
							isOpen = !isOpen;
						}}
					/>
				</div>
			</div>
			{#if $$slots.messageSlot}
				<Divider />
				<div class="pad-1">
					<slot name="messageSlot" />
				</div>
			{/if}
		</div>
		{#if $$slots.buttonZoneSlot}
			<div class="pad-tb-1 pad-ii-2 flex-h flex-align-right">
				<slot name="buttonZoneSlot" />
			</div>
		{/if}
	</div>
{/if}

<style>.alert {
  position: relative;
  min-width: 350px;
  display: inline-block;
  border-radius: 6px;
  border: 1px solid var(--theme-border_color);
  background-color: var(--theme-color-background);
  overflow: hidden;
}
.alert .dot {
  display: inline-block;
  padding: 0.25rem;
  border: 1px solid var(--theme-border_color);
  border-radius: 6px;
  margin-right: 1rem;
  transform: translate(-50%, 0);
}
.alert .close {
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 6px;
  margin: 0.25rem;
  padding: 0.25rem;
}</style>
