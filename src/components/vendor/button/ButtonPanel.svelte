<script lang="ts">

  import Icon from '../../ui/icon/Icon.svelte';
  import {openPopper} from '../popper/actions';

  export let icon: string = 'faList';
  export let actionComponent;
  export let actionComponentProps;

  let buttonRef;

  const onActionClick = (event: PointerEvent) => {
    event.stopPropagation();
    openPopper('settingActions', {
      parent        : buttonRef,
      component     : actionComponent,
      componentProps: actionComponentProps ?? {}
    });
  };

</script>

<div on:click class="buttonWrapper">
    <button bind:this={buttonRef}>
        <Icon fontSize="small" icon="faList"/>
        {#if actionComponent}
            <span class="action" on:click={onActionClick}></span>
        {/if}
    </button>
    <div class="pad-4 text-center">
        <slot>Some text</slot>
    </div>
</div>

<style lang="scss">

  .buttonWrapper {
    color: white;
    display: inline-block;
    position: relative;

    button {
      padding: 16px 8px;
      display: block;
      width: 100px;
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);
      position: relative;

      .action {
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.1);
        width: 20%;

        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
</style>