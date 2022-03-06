<script lang="ts">
  import TitleBar from '$lib/vendor/titleBar/TitleBar.svelte';
  import {createEventForwarder} from '$lib/engine/engine';
  import {createEventDispatcher, get_current_component} from 'svelte/internal';

  const dispatch = createEventDispatcher();

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let isOpen: boolean  = true;
  export let hasMenu: boolean = false;

  export const actions: any = {
    open  : () => {
      isOpen = true;
    },
    toggle: () => {
      isOpen = !isOpen;
    },
    close : () => {
      isOpen = !isOpen;
    }
  };

  const handleClick = (event: PointerEvent) => {
    if (event?.target?.attributes['data-close']) {
      event.stopPropagation();
      actions.close();
      dispatch('box:closed');
    }
  };

  export let onClose: () => void;
</script>

<div class="boxRoot shad-16 flex-v {className}" use:forwardEvents>
    <TitleBar {hasMenu} {onClose}>
        <slot name="titleSlot" slot="titleSlot"/>
        <slot name="iconSlot" slot="iconSlot"></slot>
    </TitleBar>
    <div class="boxContent flex-main pad-2">
        <slot name="contentSlot">
            <slot/>
        </slot>
    </div>
    <div class="boxButtonZone pad-2">
        <slot name="buttonZoneSlot"/>
    </div>
</div>

<style global lang="scss">
  @import 'Box.scss';
</style>
