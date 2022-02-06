<script lang="ts">
  import {getContext} from 'svelte';
  import {custom_event} from 'svelte/internal';


  export let icon: string;
  export let primary: string;
  export let secondary: string;
  export let action: string;
  export let data: Record<string, any>;


  let ref;
  let listContext = getContext('listContext');

  const handleClick = () => () => {
    const event = custom_event('list:listItem:clicked',
      $$props, true);
    ref.dispatchEvent(event);
  };

  $: console.log($listContext)

</script>

<li bind:this={ref}
    on:click={handleClick()}>
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
<!--{JSON.stringify($listContext)}-->

<style lang="scss">
  @import "List";
</style>