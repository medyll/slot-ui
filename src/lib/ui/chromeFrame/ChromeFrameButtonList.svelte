<script lang="ts">
  import {chromeFrameStore} from './chromeFrame.store';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';

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
                        on:click={()=>{chromeFrameStore.makeOnTop(value.frameId)}}
                        on:dblclick={()=>{chromeFrameStore.remove(value.frameId)}}
                        class:active={value.active}>{value.title ?? value.frameId}</button>
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
