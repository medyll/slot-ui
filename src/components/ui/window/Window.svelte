<svelte:options accessors={true}
                immutable={true}/>

<script context="module" lang="ts">
  import {get} from 'svelte/store';
  import {windowsStore} from '/src/stores/windowStore';

  const windowList = globalThis.window;

  const removeNode = (nodeRef: HTMLElement) => {
    // console.log(windowList);
    // console.log({nodeRef});
    if (nodeRef?.parentNode) nodeRef.parentNode.removeChild(nodeRef);
  };

</script>

<script lang="ts">
  import {draggable} from '@neodrag/svelte';
  import {WindowStoreListType, getAppWindowStore, IChromeArgs} from '/src/stores/windowStore';
  import {onDestroy, onMount, setContext} from 'svelte';
  import IconButton from '../../vendor/iconButton/IconButton.svelte';
  import Icon from '../icon/Icon.svelte';

  export let frameId                                   = '';
  export let self                                      = null;
  export let defaultPosition: { x: number, y: number } = {x: 30, y: 30};
  export let component                                 = null;

  let frameRef;
  let activeFrame: string | number;
  let x: number = defaultPosition?.x ?? 350;
  let y: number = defaultPosition?.y ?? 50;

  $: appWindowStore = getAppWindowStore(frameId);
  $: appWindow = $appWindowStore as IChromeArgs;
  $: position = {
    position: $appWindowStore?.position ?? {x, y},
  };

  $: if (!appWindow?.open) {
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
      // updatePos(args);
      appWindowStore.makeOnTop();
    },
    onDrag         : (args) => {
    },
    onDragEnd      : (args: {
      offsetX: number;
      offsetY: number;
      domRect: DOMRect;
    }) => {
      updatePos(args);
    },
  };

  onDestroy(() => {
    console.log('destroyed !!!');
  });

  function updatePos(args: any) {
    appWindowStore.updatePos({
      x: args.offsetX,
      y: args.offsetY
    });
  }

  function handleClick(args: PointerEvent) {
    windowsStore.activeFrame.set(frameId);
    appWindowStore.makeOnTop();
  }

  function handleClose(args: PointerEvent) {
    appWindowStore.remove();
  }

</script>
<div bind:this={frameRef}
     use:draggable={{...dragOptions,...position }}
     on:click={handleClick}
     style="z-index:{$appWindowStore?.zIndex}"
     class="window">
    <div class="bar">
        <div class="pad-4">
            <Icon icon="faLinux"/>
        </div>
        <div class="handle">{$appWindowStore?.title}</div>
        <div class="iconZone" style="color:white">
            <div>
                <IconButton icon="faWindowMinimize"/>
            </div>
            <div>
                <IconButton icon="faWindowMaximize"/>
            </div>
            <div>
                <IconButton icon="faWindowClose" on:click={handleClose}/>
                <i class="fa-solid fa-user"></i>
            </div>
        </div>
    </div>
    <div>
        {#if $appWindowStore?.component}
            <svelte:component this={$appWindowStore.component} {...$appWindowStore.componentProps}/>
        {/if}
    </div>
    <div class="buttonZone">
        <button on:click={handleClose}>Close {frameId}</button>
    </div>
</div>

<style lang="scss">
  .window {
    display: block;
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-width: 720px;
    position: absolute;
    top: 0;
    left: 0;
    // box-shadow: 0 0 4px rgba(43, 43, 43,0.5);
    overflow: hidden;
    z-index: 3000;

    .bar {
      display: flex;
      align-items: center;
      text-align: center;
      background-color: #3c3f41;
      color: white;

      .handle {
        padding: 0.75rem 0.5rem;
        flex: 1;
        cursor: pointer;
      }
    }

    .buttonZone {
      border-top: 1px solid #ccc;
      padding: 0.5rem;
      display: flex;
      justify-content: end;
    }
  }

  .iconZone {
    display: flex;
    grid-gap: 0.5rem;

    > {
      color: red;
    }
  }
</style>