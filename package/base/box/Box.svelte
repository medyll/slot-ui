<script>import TitleBar from '../titleBar/TitleBar.svelte';
import { createEventForwarder } from '../../engine/engine';
import { createEventDispatcher, get_current_component, null_to_empty } from 'svelte/internal';
const dispatch = createEventDispatcher();
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let isOpen = true;
export let hasMenu = false;
export let title = undefined;
export let icon = undefined;
export let content = undefined;
export let buttonZone = undefined;
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
        <slot name="iconSlot" slot="iconSlot"></slot>
    </TitleBar>
    <div class="boxContent flex-main pad-2">
        <slot name="contentSlot">
            <slot >{@html null_to_empty(content)}</slot>
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
