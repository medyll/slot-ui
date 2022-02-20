<script lang="ts">
  import TitleBar from '$lib/vendor/titleBar/TitleBar.svelte';

  export let className: string = '';
  export let onClose:   () => void;

</script>
<div class="box flex-v  {className}">
    <TitleBar {onClose}>
        <slot name="iconSlot" slot="iconSlot"></slot>
        <slot name="titleSlot" slot="titleSlot"></slot>
    </TitleBar>
    <div class="content flex-main pad-2">
        <slot name="contentSlot">
            <slot></slot>
        </slot>
    </div>
    <div class="buttonZone pad-2">
        <slot name="buttonZoneSlot"></slot>
    </div>
</div>

<style global lang="scss">
  .box {
    min-height: 160px;
    min-width: 320px;
    background-color: var(--theme-color-background-contrast);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  }
</style>