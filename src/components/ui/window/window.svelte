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

  export let frameId = '';
  export let self    = null;

  export let component = null;

  let frameRef;
  let activeFrame: string | number;
  let x: number = 350;
  let y: number = 50;

  $: appWindowStore = getAppWindowStore(frameId);
  $: appWindow = $appWindowStore as IChromeArgs;
  $: position = {
    position: $appWindowStore?.position,
  };

  $: if (!appWindow?.open) {
    if ($$props.self) $$props.self.$destroy();
  }

  windowsStore.activeFrame.subscribe((value: string | number) => {
    activeFrame = value;
  });

  const dragOptions = {
    handle         : '.handle',
    defaultPosition: {x: 50, y: 50},
    onDragStart    : (args: {
      offsetX: number;
      offsetY: number;
      domRect: DOMRect;
    }) => {
      updatePos(args);
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

  onMount(() => {
    // console.log(current_component)
    // console.log(get_current_component().$$);
  });


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
        <div>icon {self}</div>
        <div class="handle">{$appWindowStore?.title}</div>
        <div class="iconZone">
            <div>min</div>
            <div>max</div>
            <div>close</div>
        </div>
    </div>
    <div>
        <pre>
            {JSON.stringify($appWindowStore, null, " ")}
        </pre>
    </div>
    <div class="buttonZone">
        <button on:click={handleClose}>Close {frameId}</button>
    </div>
</div>

<style lang="scss">
  .window {
    display: inline-block;
    border-radius: 6px;
    // border: 1px solid #ededed;
    min-width: 720px;
    background-color: #fff;
    position: absolute;
    box-shadow: 0 0 4px #ededed;
    overflow: hidden;

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