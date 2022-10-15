<svelte:options accessors={true}/>

<script lang="ts">
  import {wStore} from '$lib/ui/window/store.js';
  import {onDestroy, onMount} from 'svelte';
  import Button from '$lib/base/button/Button.svelte';
  import Icon from '$lib/base/icon/Icon.svelte';
  import type {ElementProps} from '$lib/types/index.js';
  import {draggebler} from '../../uses/draggabler.js';
  import {makeOnTop} from '../../uses/makeOnTop.js';
  import {get_current_component} from 'svelte/internal';

  /** Id of the component's instance */
  export let frameId                                = crypto.randomUUID();
  /** the title appears on the handle bar */
  export let title: string                          = '';
  /** boolean to show the window */
  export let open: boolean                          = true;
  /** state of the window */
  export let minimized: boolean                     = false;
  export let maximized: boolean                     = true;
  /** is on top of others*/
  export let active: boolean                        = true;
  /** the secondaryTitle appears below the title */
  export let secondaryTitle: string                 = '';
  /** the description appears somewhere */
  export let description: string                    = '';
  /** actions triggered on click*/
  export let onClose: (args?: any) => void          = () => {};
  export let onCancel: (args?: any) => void         = () => {};
  export let onValidate: (args?: any) => void       = () => {};
  /** buttons visible in the bottom bar */
  export let hideAcceptButton: boolean              = false;
  export let hideCloseButton: boolean               = false;
  export let hideCancelButton: boolean              = true;
  /** can be opened with a component */
  export let component: any                         = undefined;
  /** used when props.component is used */
  export let componentProps: any                    = undefined;
  /** content can be set from a html string */
  export let contentHTML: any                       = undefined;
  /** parent of the window */
  export let parentNode: HTMLElement | undefined    = undefined;
  /** icon used on the left side*/
  export let icon: string | undefined               = undefined;
  export let flow: ElementProps['flow'] | undefined = 'absolute';
  /** close the window on accept */
  export let closeOnValidate: boolean               = true;
  /** destroy the component on close */
  export let removeFromDomOnClose: boolean          = false;
  /** used to destroy component when opened from function.openWindow */
  export let self

  /** reference to the component's DOM container */
  let element: HTMLElement | undefined;

  export const actions = {
    close    : () => {
      open = false;
      if (onClose) onClose();
      delete $wStore.instances[frameId]
      if (removeFromDomOnClose && self) self.$destroy();
    },
    setActive: () => {
      if ($wStore.activeFrame !== frameId) $wStore.activeFrame = frameId;
    }
  };

  if (!$wStore?.instances?.[frameId]) {
    $wStore.instances[frameId] = get_current_component();
    if (active) $wStore.activeFrame = frameId;
  }

  /*$: console.log(wStore);
   $: console.log($wStore);*/

  $: if (element && $wStore.activatedFrame === frameId) {
    makeOnTop(element);
  }

  onDestroy(() => {
    if (removeFromDomOnClose) delete $wStore[frameId];
  });

  function handleCancel(args: any) {
    if (onCancel) onCancel(args);
  }

  function handleValidate(args: any) {
    if (onValidate) onValidate(args);
    if (closeOnValidate) actions.close();
  }

</script>

<div
        bind:this={element}
        style:position={flow}
        style:display={open ? '' : 'none'}
        use:draggebler
        use:makeOnTop
        on:mousedown={actions.setActive}
        class="window shad-3"
        class:active={$wStore.activeFrame === frameId}
>
    <div class="bar">
        {#if icon}
            <div class="pad-ii-2">
                <Icon fontSize="small" {icon}/>
            </div>
        {/if}
        <div class="handle">{title}</div>
        <div class="iconZone">
            <!--<div>
             <Button naked icon="window-minimize" iconFontSize="small" />
           </div>
           <div>
             <Button naked icon="fa-solid:window-maximize" iconFontSize="small" />
           </div>-->
            <div>
                <Button
                        naked
                        icon="mdi:close"
                        iconFontSize="small"
                        iconColor="red"
                        on:click={actions.close}/>
            </div>
        </div>
    </div>
    <div>
        <slot>
            {#key component}
                {#if component}
                    <svelte:component this={component} {...componentProps}/>
                {/if}
            {/key}
            {#if contentHTML}
                {@html contentHTML}
            {/if}
        </slot>
    </div>
    {#if !hideCloseButton || !hideAcceptButton }
        <div class="buttonZone">
            {#if !hideCloseButton}
                <Button
                        naked
                        icon="mdi:close"
                        on:click={actions.close}>Close
                </Button>
            {/if}
            {#if !hideCancelButton}
                <Button
                        naked
                        icon="ant-design:ellipsis-outlined"
                        on:click={handleCancel}>Cancel
                </Button>
            {/if}
            {#if !hideAcceptButton}
                <Button icon="el:ok-circle" on:click={handleValidate}>
                    Validate
                </Button>
            {/if}
        </div>
    {/if}
</div>

<style lang="scss">
  .window {
    display: block;
    border-radius: 6px;
    background-color: var(--theme-color-background);
    color: var(--theme-color-text);
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-width: 250px;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 70000;
    max-height: 100%;

    &.active {
      border: 1px solid var(--theme-color-primary-alpha);
    }

    .bar {
      display: flex;
      align-items: center;
      text-align: center;
      background-color: #3c3f41;
      color: white;

      .handle {
        flex: 1;
        cursor: pointer;
      }
    }

    .buttonZone {
      padding: 0.5rem;
      display: flex;
      justify-content: end;
      gap: var(--gap-small, 0.5rem);
    }
  }

  .iconZone {
    display: flex;
  }
</style>
