<svelte:options accessors={true} immutable={true}/>

<script lang="ts">
  import type {
    IChromeArgs,
    WindowStoreListType,
  } from '$lib/ui/window/store.js';
  import {getAppWindowStore, windowsStore} from '$lib/ui/window/store.js';
  import {draggable} from '@neodrag/svelte';
  import {onDestroy, onMount} from 'svelte';
  import IconButton from '$lib/base/button/IconButton.svelte';
  import Button from '$lib/base/button/Button.svelte';
  import Icon from '$lib/base/icon/Icon.svelte';
  import type {Writable} from 'svelte/store';
  import type {ElementProps} from '$lib/types/index.js';

  /** Id of the component's instance */
  export let frameId                                = '';
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
  export let onClose: () => void                    = () => {};
  export let onCancel: () => void                   = () => {};
  export let onValidate: () => void                 = () => {};
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
  /** default opneing position */
  export let defaultPosition: {
    x: number;
    y: number;
  }                                                 = {x: 0, y:0};

  /** internal use */
  export let self = null;

  let mounted: boolean = false;

  /** reference to the component's DOM container */
  let element: HTMLElement | undefined;
  let activeFrame: string | number;

  let x: number = defaultPosition?.x ?? '100px';
  let y: number = defaultPosition?.y ?? '50px';

  let appWindowStore: Writable<WindowStoreListType>;
  let position;

  export const actions = {
    close: () => {
      if ($appWindowStore) $appWindowStore.onClose();
      appWindowStore.remove();
    }
  };

  $: appWindowStore = getAppWindowStore(frameId);

  $: props = {
    frameId,
    title,
    secondaryTitle,
    description,
    open,
    minimized,
    maximized,
    active,
    component,
    componentProps,
    contentHTML,
    onClose,
    onCancel,
    onValidate,
    hideAcceptButton,
    hideCloseButton,
    parentNode,
  };

  if (!$appWindowStore) {
    windowsStore.create({...props});
  } else {
    // windowsStore.update({...props});
  }

  $: if (appWindowStore && props) {
    if (mounted) {
      windowsStore.update({...props});
    }
  }

  $: position = {
    position: $appWindowStore?.position ?? {x, y},
  };

  $: if (!$appWindowStore?.open) {
    if ($$props.self) $$props.self.$destroy();
  }

  windowsStore.activeFrame.subscribe((value: string | number) => {
    activeFrame = value;
  });

  const dragOptions = {
    handle         : '.handle',
    defaultPosition: {x, y},
    onDragStart    : (args: {
      offsetX: number;
      offsetY: number;
      domRect: DOMRect;
    }) => { 
      appWindowStore.makeOnTop();
    },
    onDrag         : (args) => {},
    onDragEnd      : (args: {
      offsetX: number;
      offsetY: number;
      domRect: DOMRect;
    }) => {
      updatePos(args);
    },
  };

  onDestroy(() => {
  });

  onMount(() => {
    mounted = true;
    // center element
    let dim = document.body.getBoundingClientRect();
    let elem = element.getBoundingClientRect();

    defaultPosition.x = dim.width / 2
    position.x = dim.width / 2
  });

  function updatePos(args: any) {
      /* $appWindowStore.updatePos({
       x: args.offsetX,
       y: args.offsetY
       }); */
  }

  function handleClick(args: PointerEvent) {
    windowsStore.activeFrame.set(frameId);
    appWindowStore.makeOnTop();
  }

  function handleCancel(args: any) {
    if ($appWindowStore.onCancel)
      $appWindowStore.onCancel(args);
  }

  function handleValidate(args: any) {
    if ($appWindowStore.onValidate) {
      $appWindowStore.onValidate(args);
      if (closeOnValidate) actions.close();
    }
  }

  function handleClose(args: PointerEvent) {
    actions.close();
  }
</script>
<!--<ContextRoot />-->
<div
        bind:this={element}
        class="window shad-3"
        on:click={handleClick}
        style="position:{flow};z-index:{$appWindowStore?.zIndex};display:{$appWindowStore?.open ? '' : 'none'}"
        use:draggable={{ ...dragOptions, ...position }}>
    {#if $appWindowStore?.open}
        <div class="bar">
            {#if icon}
                <div class="pad-ii-2">
                    <Icon fontSize="small" {icon}/>
                </div>
            {/if}
            <div class="handle">{$appWindowStore?.title}</div>
            <div class="iconZone">
                <!-- <div>
                  <Button naked icon="window-minimize" iconFontSize="small" />
                </div>
                <div>
                  <Button naked icon="fa-solid:window-maximize" iconFontSize="small" />
                </div> -->
                <div>
                    <Button
                            naked
                            icon="mdi:close"
                            iconFontSize="small"
                            iconColor="red"
                            on:click={handleClose}/>
                </div>
            </div>
        </div>
        <div>
            <slot>
                {#key $appWindowStore?.component}
                    {#if $appWindowStore?.component}
                        <svelte:component
                                this={$appWindowStore.component}
                                {...$appWindowStore.componentProps}/>
                    {/if}
                {/key}
                {#if $appWindowStore?.contentHTML}
                    {@html $appWindowStore?.contentHTML}
                {/if}
            </slot>
        </div>
        {#if !hideCloseButton || !hideAcceptButton }
            <div class="buttonZone">
                {#if !hideCloseButton}
                    <Button
                            naked
                            icon="mdi:close"
                            on:click={handleClose}>Close
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
    {/if}
</div>

<style lang="scss">
  .window {
    display: block;
    position: absolute;
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

    .bar {
      display: flex;
      align-items: center;
      text-align: center;
      background-color: #3c3f41;
      color: white;

      .handle {
        //padding: 0.75rem 0.5rem;
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
    // grid-gap: 0.5rem;
  }
</style>
