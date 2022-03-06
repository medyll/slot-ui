<script >import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/* common slotUi exports*/
let className = '';
export { className as class };
export let style = '';
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/* end slotUi exports */
</script>
<div class="sliderRoot pad-1">
    <div class="sliderGouge pad-1">
        <div class="sliderPin dsp-block-inline"></div>
    </div>
</div>
<style >.sliderRoot {
  background-color: var(--theme-color-background); }
  .sliderRoot .sliderGouge {
    position: relative; }
    .sliderRoot .sliderGouge .sliderPin {
      width: 8px;
      height: 8px;
      background-color: var(--color-primary);
      position: relative; }
</style>