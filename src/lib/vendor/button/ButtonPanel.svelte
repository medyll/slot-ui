<script lang="ts">
  import type {SvelteComponentDev} from 'svelte/internal';


  import Icon from '../../ui/icon/Icon.svelte';
  import {openPopper} from '../../../lib/vendor/popper/actions';

  export let icon: string = 'faList';
  export let actionComponent: SvelteComponentDev;
  export let actionComponentProps: any;

  let buttonRef;

  const onActionClick = (event: PointerEvent) => {
    event.stopPropagation();
    openPopper('settingActions', {
      parentNode    : buttonRef,
      component     : actionComponent,
      componentProps: actionComponentProps ?? {}
    });
  };

</script>

<div class="buttonWrapper" on:click>
    <button bind:this={buttonRef}>
        <Icon fontSize="small" icon="faList"/>
        {#if actionComponent}
            <span class="action" on:click={onActionClick}>
                <Icon icon="faChevronRight" fontSize="tiny"/>
            </span>
        {/if}
    </button>
    {#if $$slots.default}
        <div class="pad-tb-1 text-center">
            <slot></slot>
        </div>
    {/if}
</div>

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
        width: 25%;
        padding: 0.5rem;

        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
</style>
