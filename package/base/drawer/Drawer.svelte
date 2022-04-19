<script >import BottomBar from '../bottomBar/BottomBar.svelte';
import IconButton from '../button/IconButton.svelte';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
export let title;
// any
export let isOpen = true;
export let hideCloseIcon = false;
export function toggle(visibleSate) {
    isOpen = visibleSate !== undefined ? visibleSate : !isOpen;
}
</script>

{#if isOpen}
    <div use:forwardEvents bind:this={element} class="drawer flex-v h-full">
        {#if $$slots.drawerMenuBar || Boolean(title)}
            <div class="header flex-h">
                <div class="flex-main flex-h flex-align-middle ">
                    {#if title}<span style="font-size:18px;" class="pad-l-4">{title}</span>{/if}
                    <slot name="drawerMenuBar"/>
                </div>
                {#if !hideCloseIcon}
                    <div>
                        <IconButton
                                on:click={() => {
								toggle();
							}}
                                iconFontSize="small"
                                icon="faWindowClose"
                        />
                    </div>
                {/if}
            </div>
        {/if}
        {#if $$slots.content}
            <div class="flex-main">
                <slot name="content">content</slot>
            </div>
        {/if}
        <BottomBar>
            bar bottom
        </BottomBar>
    </div>
{/if}

<style >.drawer {
  color: white;
  background-color: rgba(59, 59, 59, 0.99);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 350px;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 3000;
  right: 0;
}
.drawer .header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  min-height: 48px;
  display: flex;
  align-items: center;
}
.drawer .header .title {
  font-size: large;
}</style>
