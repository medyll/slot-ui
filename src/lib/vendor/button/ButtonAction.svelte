<script lang="ts">
  import type {SvelteComponentDev} from 'svelte/internal';
  import {openPopper} from '$lib/vendor/popper/actions';
  import IconButton from '$lib/vendor/button/IconButton.svelte';
  import Divider from '$lib/vendor/divider/Divider.svelte';
  import Menu from '$lib/vendor/menu/Menu.svelte';

  export let icon: string = 'faList';
  export let actionComponent: SvelteComponentDev;
  export let actionComponentProps: any;

  let buttonRef;

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

<IconButton icon="faEllipsisH"
            iconFontSize="small"
            on:click={onActionClick}/>


<style lang="scss">

  .buttonWrapper {
    color: white;
    display: inline-block;
    position: relative;
    width: 64px;

    button {
      padding: 16px 16px;
      display: block;
      width: 64px;
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);
      position: relative;

      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }

      .action {
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.1);
        width: 30%;
        padding: 0.5rem;

        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
</style>
