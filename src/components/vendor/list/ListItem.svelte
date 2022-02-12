<script context="module" lang="ts">
  
</script>
<script lang="ts">
  import {getContext} from 'svelte';
  import {custom_event} from 'svelte/internal';

  export let icon: string;
  export let primary: string;
  export let secondary: string;
  export let action: string;
  // data to hold
  export let data: Record<string, any> = {};

  let ref;
  let listStateContext = getContext('listStateContext');

  const handleClick = () => () => {
    const event = custom_event('list:listItem:clicked',
      data, true);
    ref.dispatchEvent(event);
  }; 

  let isActive:boolean;
  $: if ($listStateContext) {
    isActive = listStateContext.selector($listStateContext.selectorField, data);
  }

</script>


<li bind:this={ref}
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
      {#if isActive}
{$listStateContext.selectorField}
      {/if}
        <slot name="action"></slot>
    </div>
</li>

<style lang="scss">
  @import "List";
</style>
