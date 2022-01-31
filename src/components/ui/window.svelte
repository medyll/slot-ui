<script lang="ts">
  import {draggable} from '@neodrag/svelte';
  import {listW, windowList} from '/src/stores/windowStore';

  export let frameId;

  let countValue: listW;
  let activeFrame: string | number;
  let offsetX: number;
  let offsetY: number;


  windowList.subscribe((value: listW) => {
    countValue = value;
  });

  windowList.activeFrame.subscribe((value: string | number) => {
    activeFrame = value;
  });

  $: frame = countValue.get(frameId);

  const listeners = {
    handle         : '.handle',
    position       : {x: offsetX, y: offsetY},
    defaultPosition: {x: offsetX, y: offsetY},
    onDragStart    : (args) => {
      windowList.activeFrame.set(frameId);
    },
    onDrag         : (args) => {
    },
    onDragEnd      : (args) => {
      offsetX = args.offsetX;
      offsetY = args.offsetY;
    },

  };

  function handleClick(args: PointerEvent) {
    windowList.activeFrame.set(frameId);
  }

  function handleClose(args: PointerEvent) {
    windowList.remove(frameId);
  }

</script>

<div use:draggable={{...listeners }}
     on:click={handleClick}
     style="z-index:{activeFrame===frameId? '100': 0}"
     class="window">
    <div class="bar">
        <div>icon</div>
        <div class="handle">{frame.title}</div>
        <div class="iconZone">
            <div>min</div>
            <div>max</div>
            <div>cl</div>
        </div>
    </div>
    <div>
        <pre>
            {JSON.stringify(frame, null, " ")}
        </pre>
    </div>
    <div>
        <button on:click={handleClose}>Close</button>
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
  }

  .iconZone {
    display: flex;
    grid-gap: 0.5rem;

    > {
      color: red;
    }
  }
</style>