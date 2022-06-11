<script lang="ts">
  import {chromeFrameStore} from './chromeFrame.store';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';
  import Icon from "../../base/icon/Icon.svelte";

  /** common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /** end slotUi exports*/

</script>
<div bind:this={element} class="flex-h gap-small {className}">
    {#each [...$chromeFrameStore.values()] as value, key}
        <div class="buttonRail">
            <slot chromeFrame={value}>
                <button
                        style="position:relative"
                        on:click={()=>{chromeFrameStore.toggle(value.frameId)}}
                        on:dblclick={()=>{chromeFrameStore.remove(value.frameId)}}
                        class:active={value.active}>
                    <div class="flex-h flex-align-middle gap-tiny">
                        <div class="pad-r-4">{value.title ?? value.frameId}</div>
                        <!--<div class="pad-r-4">{value.zIndex}</div>-->
                        <div class="pos-abs right-0 pad-1">
                            <slot name="chromeFrameCloseSlot">
                                <div><Icon class="theme-text-primary"  icon="window-close" /></div>
                            </slot>
                        </div>
                    </div>
                </button>
            </slot>
        </div>
    {/each}
</div>
<style global lang="scss">
  .buttonRail {
    button:not(.active) {
      border: 1px solid transparent;
      background-color: transparent;
    }
    button {
      &.active {
        border: 1px solid var(--theme-color-border);
      }
      &:hover {
        border: 1px solid var(--theme-color-primary);
      }
    }
  }

</style>
