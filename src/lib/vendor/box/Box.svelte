<script lang="ts">

  import Icon from '$lib/ui/icon/Icon.svelte';

  export let className: string = '';
</script>
<div class="box flex-v  {className}">
    <div class="flex-h">
        <div class="title flex-main flex-h flex-align-middle marg-b-1">
            <div class="pad-1 text-center">
                <slot name="iconSlot">
                    <Icon fontSize="small" icon="faWorld"/>
                </slot>
            </div>
            <div class="flex-main pad-2">
                <slot name="titleSlot"></slot>
            </div>
        </div>
        <div class="pad-1">
            <Icon fontSize="small" icon="faClock"/>
        </div>
    </div>
    <div class="content flex-main pad-1">
        <slot name="contentSlot">
            <slot></slot>
        </slot>
    </div>
    <div class="buttonZone pad-1">
        <slot name="buttonZoneSlot"></slot>
    </div>
</div>

<style lang="scss" global >
  .box {
    min-height: 160px;
    min-width: 320px;
    background-color: var(--theme-color-background-contrast);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
    //border-radius: 6px;

    .title {

    }
  }
</style>