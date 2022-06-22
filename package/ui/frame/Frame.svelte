<svelte:options accessors/>
<script>import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
import Drawer from '../../base/drawer/Drawer.svelte';
/** common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/** end slotUi exports*/
export let elementNav = null;
export let frameDrawerRef = null;
export let hideCloseIcon = true;
export let showOpenerIcon = true;
let defaultOpen = true;
export const actions = {
    openNavLeft: () => {
        defaultOpen = true;
    },
    toggleNavLeft: () => {
        defaultOpen = !defaultOpen;
    },
    closeNavLeft: () => {
        defaultOpen = !defaultOpen;
    }
};
// $: console.log(frameDrawerRef);
</script>
<div bind:this={element} class="pos-rel flex-v h-full overflow-hidden frame {className}" use:forwardEvents>
    <div>
        <slot name="frameHeaderSlot"></slot>
    </div>
    <div class="frameContainer flex-h flex-main overflow-hidden">
        <div bind:this={elementNav} class="navLeft flex-v h-full">
            {#if frameDrawerRef?.isOpen}
                <slot name="navLeftHeaderFrameSlot"></slot>
            {/if}
            <Drawer bind:this={frameDrawerRef}
                    hideCloseIcon={hideCloseIcon}
                    isOpen={defaultOpen}
                    position="inplace"
                    showOpenerIcon={showOpenerIcon}>
                <slot name="frameDrawerSlot"></slot>
            </Drawer>
        </div>
        <div class="h-full flex-main flex-v ">
            <div>
                <slot name="contentHeaderFrameSlot"></slot>
            </div>
            <div class="flex-main overflow-auto pos-rel ">
                <slot name="contentFrameSlot"></slot>
            </div>
        </div>
    </div>
</div>


<style>.frame {
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: var(--css-frame-bg-color, var(--theme-bg));
  backdrop-filter: var(--css-frame-backdrop-blur, blur(30px));
  overflow: hidden;
}
.frame .frameContainer .navLeft {
  z-index: 1;
  max-width: 288px;
  border-right: 1px solid var(--theme-color-primary);
  box-shadow: var(--box-shad-3);
}
.frame .frameContainer .content {
  flex: 1 auto;
  z-index: 0;
}</style>
