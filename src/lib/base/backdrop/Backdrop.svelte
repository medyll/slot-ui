<script lang="ts">
    /*  common slotUi exports*/
    import {createEventForwarder} from '../../engine/engine';
    import {get_current_component} from 'svelte/internal';

    let className = '';
    export {className as class};
    export let element: HTMLDivElement | null = null;
    const forwardEvents                       = createEventForwarder(get_current_component());


    export let loading = false;
</script>
<div bind:this={element} class="backdropRoot h-full w-full pos-fix top-0 zI-10 {className}">
    <div class="backdropContent pos-abs  h-full w-full">

        {#if loading}
            <div class="pos-abs  h-full w-full flex-h flex-align-middle-center  zI-10">
                <slot name="loadingSlot">
                    <i class="fa fa-spinner fa-spin fa-4x theme-text-primary-complement"></i>
                </slot>
            </div>
        {:else}
            <slot>
            </slot>
        {/if}
    </div>
</div>
<style lang="scss">

  .backdropRoot {
    position: absolute;
    z-index: 1000;
    background-image: url('wallp (1).png');
    height: 100%;
    width: 100%;

    .backdropContent {
      background-color: var(--theme-color-background-alpha);
      backdrop-filter: blur(5px);
    }
  }

</style>
