<script>import Icon from '../icon/Icon.svelte';
import IconButton from '../button/IconButton.svelte';
import Button from '../button/Button.svelte';
export let onClose;
export let hasMenu = false;
</script>

<div class="titleBar flex-h marg-b-1 pad-1">
    <div class="title flex-main flex-h flex-align-middle">
        <div class="pad-ii-1 text-center">
            <slot name="iconSlot">
                <Icon fontSize="small" icon="world"/>
            </slot>
        </div>
        <div class="flex-main pad-l-1">
            <slot name="titleSlot"></slot>
        </div>
    </div>
    {#if hasMenu}
        <div class="">
            <!--<ButtonAction/>-->
        </div>
    {/if}
    {#if onClose}
        <div class="">
            <Button on:click={onClose} naked  icon="window-close" size="auto" />
        </div>
    {/if}
</div>
<style global>:global(.titleBar) {
  border-bottom: 1px solid var(--theme-border_color);
}
:global(.titleBar) :global(.title) {
  min-height: 34px;
}</style>
