<script >import TitleBar from '../titleBar/TitleBar.svelte';
import { createEventForwarder } from '../../engine/engine';
import { createEventDispatcher, get_current_component } from 'svelte/internal';
const dispatch = createEventDispatcher();
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let isOpen = true;
export let hasMenu = false;
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

<div class="boxRoot shad-16 flex-v {className}" use:forwardEvents>
    <TitleBar {hasMenu} {onClose}>
        <slot name="titleSlot" slot="titleSlot"/>
        <slot name="iconSlot" slot="iconSlot"></slot>
    </TitleBar>
    <div class="boxContent flex-main pad-2">
        <slot name="contentSlot">
            <slot/>
        </slot>
    </div>
    <div class="boxButtonZone pad-2">
        <slot name="buttonZoneSlot"/>
    </div>
</div>

<style global >:global(.boxRoot) {
  min-height: 160px;
  min-width: 320px;
  background-color: var(--theme-color-background);
  border-bottom: 1px solid var(--theme-border_color);
  border-radius: 6px; }
  :global(.boxRoot) :global(.boxButtonZone) {
    text-align: right; }
</style>
