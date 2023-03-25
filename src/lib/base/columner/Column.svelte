<script lang="ts">
  import {createEventForwarder} from '$lib/engine/eventForwarder.js';
  import {getContext} from 'svelte';
  import {get_current_component, tick} from 'svelte/internal';
  import type {ColumnerStoreType} from './types.js';
  import {resizer} from '$lib/uses/resizer/resizer.js';

  let columner = getContext<ColumnerStoreType>('columner');

  export let columnId = crypto.randomUUID();

  if (!$columner[columnId]) {
    $columner[columnId] = {
      columnId    : Object.keys($columner).length,
      state       : 'default',
      defaultStyle: {}
    };
  }


  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());

  let width;

  function resizeStart() {}

  async function resizeOn(data: CustomEvent<{ width: any }>) {
    await tick();
    width = data.detail.width + 'px';
    // $dataListContext.columns[field].width = data.detail.width + 'px';
  }

  function resizeEnd() {}

</script>

<div bind:this={element}
     use:forwardEvents
     id={columnId}
     class="column {className}"
     use:resizer
     on:resizer:start={resizeStart}
     on:resizer:resize={resizeOn}
     on:resizer:end={resizeEnd}
     style:width={width}
     {...$$restProps}>
    <slot name="drawerTop"/>
    <div class="content">
        {width}
        <slot/>
    </div>
    <slot name="bottomSLot"/>
</div>

<style lang="scss">
  @import "../../styles/slotui-vars.scss";
  @import "../../styles/presets.scss";
  .column {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    min-width: 110px;
    // flex: 1;
    position: relative;
    flex-direction: column;

    [data-resizer=true] {
      background-color: red;
    }

    .content {
      flex: 1;
      overflow: hidden;
    }

    .commandBar {
      position: sticky;
      top: 0;
    }

    border-right: 1px solid var(--slotui-column-bordercolor, var(--theme-color-foreground-alpha-high));
    box-shadow: var(--box-shad-1);
  }
</style>
