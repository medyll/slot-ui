<svelte:options accessors/>
<script lang="ts">
  import {createEventForwarder} from '../../engine/eventForwarder';
  import {get_current_component} from 'svelte/internal';
  import Drawer from '../../base/drawer/Drawer.svelte';

 
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null    = null;
  const forwardEvents                          = createEventForwarder(get_current_component());
 

  export let style: string = ''
  export let elementNav: HTMLDivElement | null = null;
  export let frameDrawerRef: typeof Drawer     = null;

  export let hideCloseIcon: boolean  = true;
  export let showOpenerIcon: boolean = true;

  export let drawerWidth:string = '288px';

  let defaultOpen = true;

  export const actions = {
    openNavLeft  : () => {
      defaultOpen = true;
    },
    toggleNavLeft: () => {
      defaultOpen = !defaultOpen;
    },
    closeNavLeft : () => {
      defaultOpen = !defaultOpen;
    }
  };


    
</script>
<div bind:this={element} class="pos-rel flex-v h-full overflow-hidden frame {className}" {style} use:forwardEvents>
    <div>
        <slot name="frameHeaderSlot"></slot>
    </div>
    <div class="frameContainer flex-h pos-rel flex-main overflow-hidden">
        <div bind:this={elementNav} class="navLeft pos-rel flex-v h-full " >
            {#if frameDrawerRef?.isOpen}
                <slot name="navLeftHeaderFrameSlot"></slot>
            {/if}
            <Drawer bind:this={frameDrawerRef}
                    hideCloseIcon={hideCloseIcon}
                    isOpen={defaultOpen}
                    flow="relative"
                    stickTo="left"
                    style="flex:1;position:relative;"
                    defaultWidth={drawerWidth}
                    showOpenerIcon={showOpenerIcon}>
                <slot name="frameDrawerSlot">

                </slot>
            </Drawer>
        </div>
        <div class="h-full flex-main flex-v frameContent ">
            <div>
                <slot name="contentHeader"></slot>
            </div>
            <div class="flex-main overflow-hidden pos-rel ">
                <slot name="content"></slot>
            </div>
            <div>
                <slot name="bottom"></slot>
            </div>
        </div>
    </div>
</div>


<style global lang="scss">
  @import "../../styles/slotui-vars.scss";
  @import "../../styles/presets.scss";
  .frame {
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    background-color: var(--css-frame-bg-color, var(--theme-bg-paper));
    backdrop-filter: var(--css-frame-backdrop-blur, blur(30px));
    overflow:hidden;

    .frameContainer {

      .navLeft {
        z-index:1;
        border-right: 1px solid var(--theme-color-primary);
        height: 100%;
        position:relative;
      }

      .frameContent{
        overflow:hidden;
      }
    }

  }
</style>
