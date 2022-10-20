<script lang="ts">
  import {createEventForwarder} from '$lib/engine/engine.js';
  import {get_current_component} from 'svelte/internal';
  /* common slotUi exports*/
  let className = '';
  export {className as class};
  export let style: string                  = '';
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /* end slotUi exports */

  export let value;
  /** used if props.steps is not used */
  export let range: number              = 100;
  export let rangeStep: any | undefined = undefined;
  export let minimum;
  export let maximum;
  /** used over range, using indexOf */
  export let steps: any[] | undefined   = undefined;


</script>
<div class="sliderRoot pad-1 border w-large">
    <div class="sliderGouge pad-1">
        <div class="sliderPin border dsp-block-inline"></div>
    </div>
</div>
<style lang="scss">
  @import "../../styles/slotui-vars.scss";
  @import "../../styles/presets.scss";

  .sliderRoot {
    background-color: var(--theme-color-background);

    .sliderGouge {
      position: relative;

      .sliderPin {
        width: 8px;
        height: 8px;
        background-color: var(--color-primary);
        position: relative;
      }
    }
  }
</style>