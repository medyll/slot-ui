<script>import TitleBar from '../titleBar/TitleBar.svelte';
import { createEventForwarder } from '../../engine/engine';
import { createEventDispatcher, get_current_component, null_to_empty } from 'svelte/internal';
import Icon from '../icon/Icon.svelte';
const dispatch = createEventDispatcher();
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
/** is the content visible */
export let isOpen = true;
/** used to activate the slotui.TitleBar component */
export let hasMenu = false;
/** text to be shown in the title bar */
export let title = undefined;
/** alternative to iconSlot, icon to be used with the internat iconify component */
export let icon = undefined;
export let iconFamily = undefined;
/** alternative to contentSlot,  content to be shown in the main area */
export let content = undefined;
/** alternative to buttonZoneSlot, content to be shown in the bottom button zone */
export let buttonZone = undefined;
/** component actions */
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
        dispatch('box:closed');
    }
};
export let onClose;
</script>

<div class="boxRoot shad-3 flex-v {className}" use:forwardEvents>
	<TitleBar {hasMenu} {onClose}>
		<slot name="titleSlot" slot="titleSlot">{null_to_empty(title)}</slot>
		<slot name="iconSlot" slot="iconSlot">
			{#if icon}
				<Icon {icon} {iconFamily} />
			{/if}
		</slot>
	</TitleBar>
	<div class="boxContent flex-main pad-2">
		<slot name="contentSlot">
			<slot>{@html null_to_empty(content)}</slot>
		</slot>
	</div>
	<div class="boxButtonZone">
		<slot name="buttonZoneSlot">{@html null_to_empty(buttonZone)}</slot>
	</div>
</div>

<style global>:global(.boxRoot) {
  min-height: 160px;
  min-width: 320px;
  background-color: var(--theme-color-background);
  border-bottom: 1px solid var(--theme-color-primary);
  border-radius: 6px;
  display: inline-block;
}
:global(.boxRoot) :global(.boxButtonZone) {
  display: flex;
  gap: --theme-gap-tiny;
  text-align: right;
  padding: 0.5rem;
  justify-content: end;
}</style>
