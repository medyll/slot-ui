<script context="module" lang="ts">

</script>
<script lang="ts">
  import {getContext} from 'svelte';
  import {custom_event} from 'svelte/internal';
  import {ElementProps} from './types';
  import Divider from "../divider/Divider.svelte";

  export let icon: string;
  export let primary: string;
  export let secondary: string;
  export let action: string;
  // data to hold
  export let data: Record<string, any> = {};

  export let density: ElementProps['density'] = 'default';

  let ref;
  let listStateContext = getContext('listStateContext');

  const handleClick = () => () => {
    const event = custom_event('list:listItem:clicked',
      data, true);
    ref.dispatchEvent(event);
  };

  let isActive: boolean;
  $: if ($listStateContext) {
    isActive = listStateContext.selector($listStateContext.selectorField, data);
  }

</script>


<li class="listItem density-{density}" bind:this={ref}
    on:click={handleClick()}
    class:isActive>
    <span class="listItemChip"></span>
    <div class="listItemIcon">
        <slot name="icon"></slot>
    </div>
    <div class="listItemContent">
        <div>
            <slot name="primary"></slot>
        </div>
        <div>
            <slot name="secondary"></slot>
        </div>
    </div>
    <div class="listItemAction">
        <slot name="action"></slot>
    </div>
</li>
<Divider />
<style lang="scss" global>
  @import "List";

  li.listItem.density-tight {
    padding: 0.5rem 0;
    margin: 0.125rem 0;
  }

  li.listItem.density-default {
    padding: 1rem 0;
    margin: 0.25rem 0;
  }

  li.listItem.density-kind {
    padding: 1.5rem 0;
    margin: 0.5rem 0;
  }

  .listItemIcon {
    text-align: center;
    padding: 0 0.5rem;
    width: 2rem;
    overflow: hidden;
    opacity: 0.8;
  }
</style>
