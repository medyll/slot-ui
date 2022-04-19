<svelte:options accessors/>
<script lang="ts">
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';
  import Drawer from '../../base/drawer/Drawer.svelte';

  /** common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null    = null;
  const forwardEvents                          = createEventForwarder(get_current_component());
  /** end slotUi exports*/

  export let elementNav: HTMLDivElement | null = null;
  export let frameDrawerRef: Drawer = null;


</script>
<div bind:this={element} class="flex-v h-full overflow-hidden frame {className}" use:forwardEvents>
    <div>
        <slot name="frameHeaderSlot"></slot>
    </div>
    <div class="frameContainer flex-h flex-main overflow-hidden">
        <div bind:this={elementNav} class="navLeft flex-v h-full">
            <slot name="navLeftHeaderFrameSlot"></slot>
            <Drawer bind:this={frameDrawerRef} position="inplace" >
                <slot name="frameDrawerSlot"></slot>
            </Drawer>
        </div>
        <div class="h-full flex-main flex-v ">
            <div>
                <slot name="contentHeaderFrameSlot"></slot>
            </div>
            <div class="flex-main overflow-auto">
                <slot name="contentFrameSlot"></slot>
            </div>
        </div>
    </div>
</div>


<style lang="scss">

  .frame {
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    background-color: var(--theme-color-primary);
    backdrop-filter: blur(30px);

    .frameContainer {

      .navLeft {
        max-width: 350px;
        border-right: 1px solid var(--theme-color-primary-alpha-low);
      }

      .content {
        flex: 1 auto;

      }
    }

  }
</style>