<script lang="ts">
  import {custom_event} from 'svelte/internal';
  import {getContext} from 'svelte';


  export let icon: string;
  export let primary: string;
  export let secondary: string;
  export let action: string;

  export let code;
  let ref;
  let listContext = getContext('listContext');

  const handleClick = () => {
    const event = custom_event('panel:button:clicked',
      $$props, true);
    ref.dispatchEvent(event);
  };
</script>

<li bind:this={ref} on:click={handleClick}>
    <span class="listItemChip"></span>
    <div class="listItemIcon">
        <slot name="icon"></slot>
    </div>
    <div class="listItemContent">
        <slot name="primary"></slot>
        <slot name="secondary"></slot>
    </div>
    <div class="listItemAction">
        <slot name="action"></slot>
    </div>
</li>
<!--{JSON.stringify($listContext)}-->

<style lang="scss">
  @import "List";
</style>