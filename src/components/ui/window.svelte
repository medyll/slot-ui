<script lang="ts">
  import {draggable} from '@neodrag/svelte';
  import {WindowStoreListType, windowsStore, getAppWindowStore, IChromeArgs} from '/src/stores/windowStore';

  export let frameId = '';

  let activeFrame: string | number;
  let x: number = 50;
  let y: number = 50;

  $: appWindowStore = getAppWindowStore(frameId);
  $: appWindow = $appWindowStore as IChromeArgs;
  $: position = {
    position: $appWindowStore?.position,
  };

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

  function updatePos(args: any) {
    appWindowStore.updatePos({
      x: args.offsetX,
      y: args.offsetY
    });
  }

  function handleClick(args: PointerEvent) {
    windowsStore.activeFrame.set(frameId);
  }

  function handleClose(args: PointerEvent) {
    appWindowStore.remove();
  }

</script>

<div use:draggable={{...dragOptions,...position }}
     on:click={handleClick}
     style="z-index:{$appWindowStore?.active ? '100': 0}"
     class="window">
    <div class="bar">
        <div>icon</div>
        <div class="handle">{$appWindowStore?.title}</div>
        <div class="iconZone">
            <div>min</div>
            <div>max</div>
            <div>cl</div>
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
    border-radius: 4px;
    border: 1px solid #ededed;
    min-width: 720px;
    background-color: #fff;
    position: absolute;
    box-shadow: 0 0 4px #ededed;

    .bar {
      display: flex;
      border-bottom: 1px solid #ededed;
      align-items: center;
      text-align: center;

      .handle {
        padding: 0.5rem;
        flex: 1;
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