<script >import Icon from '../../ui/icon/Icon.svelte';
import { openPopper } from '../../../lib/vendor/popper/actions';
export let icon = 'faList';
export let actionComponent;
export let actionComponentProps;
let buttonRef;
const onActionClick = (event) => {
    event.stopPropagation();
    openPopper('settingActions', {
        parentNode: buttonRef,
        component: actionComponent,
        componentProps: actionComponentProps ?? {}
    });
};
</script>

<div on:click class="buttonWrapper">
    <button bind:this={buttonRef}>
        <Icon fontSize="small" icon="faList"/>
        {#if actionComponent}
            <span class="action" on:click={onActionClick}>
                <Icon icon="faChevronRight" fontSize="tiny"/>
            </span>
        {/if}
    </button>
    {#if $$slots.length}
        <div class="pad-4 text-center">
            <slot></slot>
        </div>
    {/if}
</div>

<style >.buttonWrapper {
  color: white;
  display: inline-block;
  position: relative; }
  .buttonWrapper button {
    padding: 16px 16px;
    display: block;
    width: 64px;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative; }
    .buttonWrapper button:hover {
      background-color: rgba(255, 255, 255, 0.3); }
    .buttonWrapper button .action {
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 0.1);
      width: 25%;
      padding: 0.5rem; }
      .buttonWrapper button .action:hover {
        background-color: rgba(255, 255, 255, 0.5); }
</style>
