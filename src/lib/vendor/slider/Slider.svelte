<script lang="ts">
  import {createEventForwarder} from '$lib/engine/engine';
  import {get_current_component} from 'svelte/internal';
  /* common slotUi exports*/
  let className = '';
  export {className as class};
  export let style: string                  = '';
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /* end slotUi exports */
</script>
<div class="sliderRoot pad-1">
    <div class="sliderGouge pad-1">
        <div class="sliderPin dsp-block-inline"></div>
    </div>
</div>
<style lang="scss">
  .sliderRoot {
    background-color: var(--theme-color-background);

    .sliderGouge {
      position: relative;

      .sliderPin {
        width:8px;
        height:8px;
        background-color:var(--color-primary);
        position: relative;
      }
    }
  }
</style>