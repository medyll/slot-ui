<script lang="ts">
  import TitleBar from '../titleBar/TitleBar.svelte';
  import {createEventForwarder} from '../../engine/engine';
  import {createEventDispatcher, get_current_component, null_to_empty} from 'svelte/internal';

  const dispatch = createEventDispatcher();

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let isOpen: boolean  = true;
  export let hasMenu: boolean = false;

  export let title: string | undefined = undefined
  export let icon: string | undefined = undefined
  export let content: string | undefined = undefined
  export let buttonZone: string | undefined = undefined

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
        <slot name="titleSlot" slot="titleSlot">{null_to_empty(title)}</slot>
        <slot name="iconSlot" slot="iconSlot"></slot>
    </TitleBar>
    <div class="boxContent flex-main pad-2">
        <slot name="contentSlot">
            <slot >{@html null_to_empty(content)}</slot>
        </slot>
    </div>
    <div class="boxButtonZone pad-2">
        <slot name="buttonZoneSlot">{@html null_to_empty(buttonZone)}</slot>
    </div>
</div>

<style global lang="scss">
  @import 'Box';
</style>
