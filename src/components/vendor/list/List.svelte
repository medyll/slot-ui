<script lang="ts">
  import ListItem from './ListItem.svelte';
  import {custom_event} from 'svelte/internal';
  import {writable} from 'svelte/store';
  import {setContext} from 'svelte';

  export let listItems: []                        = [];
  export let size: 'default' | 'small' | 'large'  = 'default';
  export let direction: 'vertical' | 'horizontal' = 'vertical';
  export let style: string                        = '';

  let ref;

  let listContext = writable({});
  setContext('listContext',listContext);

  function handleClick(e:CustomEvent) {

    $listContext = e.detail
  }

</script>

<ul on:panel:button:clicked={handleClick}   bind:this={ref} style="{style}">
    {#each listItems as lisItem}
        <ListItem>
            <div slot="icon"></div>
            <div slot="text"></div>
            <div slot="action"></div>
        </ListItem>
    {/each}
    <slot></slot>
</ul>


<style lang="scss">
  @import "List";
</style>