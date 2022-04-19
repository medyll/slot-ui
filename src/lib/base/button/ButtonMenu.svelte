<script lang="ts">
  import type {SvelteComponentDev} from 'svelte/internal';
  import {get_current_component} from 'svelte/internal';
  import {openPopper} from '../../ui/popper/actions';
  import IconButton from './IconButton.svelte';
  import Menu from '../../ui/menu/Menu.svelte';
  import {createEventForwarder} from '../../engine/engine';

  export let icon: string = 'faList';
  export let actionComponent: SvelteComponentDev;
  export let actionComponentProps: any;

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLButtonElement | null = null;
  const forwardEvents                          = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  const onActionClick = (event: PointerEvent) => {
    event.stopPropagation();
    console.log(event.target);
    openPopper('settingActions', {
      parentNode    : event.target as HTMLElement,
      component     : Menu,
      componentProps: actionComponentProps ?? {},
      position      : 'BL'
    });
  };
</script>

<div class="buttonActionRoot">
    <IconButton
            class={className}
            {element}
            icon="faEllipsisH"
            iconFontSize="small"
            on:click={onActionClick}
    >
        <slot/>
    </IconButton>
</div>

<style lang="scss">
  @import 'ButtonMenu';
</style>
