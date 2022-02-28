<script lang="ts">
  import TitleBar from '$lib/vendor/titleBar/TitleBar.svelte';
  import {createEventForwarder} from '$lib/engine/engine';
  import {get_current_component} from 'svelte/internal';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let onClose: () => void;
</script>

<div use:forwardEvents class="box flex-v  {className}">
    <TitleBar {onClose}>
        <slot name="iconSlot" slot="iconSlot"/>
        <slot name="titleSlot" slot="titleSlot"/>
    </TitleBar>
    <div class="content flex-main pad-2">
        <slot name="contentSlot">
            <slot/>
        </slot>
    </div>
    <div class="buttonZone pad-2">
        <slot name="buttonZoneSlot"/>
    </div>
</div>

<style global lang="scss">
  @import 'Box.scss';
</style>
