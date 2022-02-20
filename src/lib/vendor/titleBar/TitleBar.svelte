<script lang="ts">
  import Icon from '$lib/ui/icon/Icon.svelte';
  import IconButton from '$lib/vendor/button/IconButton.svelte';
  import Divider from "$lib/vendor/divider/Divider.svelte";
  import ButtonAction from "$lib/vendor/button/ButtonAction.svelte";

  export let onClose: () => void;
  export let hasMenu: any = true;

</script>

<div class="titleBar flex-h marg-b-1 pad-1">
    <div class="title flex-main flex-h flex-align-middle">
        <div class="pad-ii-1 text-center">
            <slot name="iconSlot">
                <Icon fontSize="small" icon="faWorld"/>
            </slot>
        </div>
        <div class="flex-main pad-l-1">
            <slot name="titleSlot"></slot>
        </div>
    </div>
    {#if hasMenu}
        <div class="">
            <ButtonAction />
        </div>
    {/if}
    {#if onClose}
        <div class="">
            <IconButton iconFontSize="small" icon="faWindowClose"/>
        </div>
    {/if}
</div>
<style global lang="scss">
  .titleBar {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1)
  }
</style>