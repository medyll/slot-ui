<script >import { fade } from 'svelte/transition';
import Divider from '../divider/Divider.svelte';
import '$lib/ui/icon/Icon.svelte';
import IconButton from "../button/IconButton.svelte";
/** type of levels */
export let level = 'info';
export let action;
export let data;
export let text;
export let message;
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
</script>
{#if isOpen}
    <div transition:fade class="alert shad-4">
        <div class="pad-1 pad-ii-2 border-b-4 border-color-scheme-{level}">
            <div class="pad-tb-1">
                <slot></slot>
            </div>
            {#if $$slots.messageSlot}
                <Divider/>
                <div class="pad-tb-1">
                    <slot name="messageSlot">message</slot>
                </div>
            {/if}
        </div>
        {#if $$slots.action}
            <slot name="action"></slot>
        {/if}
        <div class="pad-tb-1 pad-ii-2">
            <slot name="buttonZoneSlot">
                <button on:click={()=>{isOpen = !isOpen}}>button</button>
            </slot>
        </div>
        <div class="close">
            <IconButton  on:click={()=>{isOpen = !isOpen}} iconFontSize="small" icon="faWindowClose"/>
        </div>
    </div>
{/if}
<style >.alert {
  position: relative;
  min-width: 350px;
  display: inline-block;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden; }
  .alert .close {
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 6px;
    margin: 0.25rem;
    padding: 0.25rem; }
</style>
