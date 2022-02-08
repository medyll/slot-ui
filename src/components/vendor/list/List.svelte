<script lang="ts">
  import ListItem from './ListItem.svelte';
  import {setContext} from 'svelte';
  import {LisItemProps} from './types';
  import {listStore} from './store';

  export let listItems: []                        = [];
  export let size: 'default' | 'small' | 'large'  = 'default';
  export let direction: 'vertical' | 'horizontal' = 'vertical';
  export let style: string                        = '';

  let ref;

  setContext('listStateContext', listStore);

  function handleClick(e: CustomEvent<LisItemProps>) {
    listStore.setActiveData(e.detail)
  }

</script>

<ul on:list:listItem:clicked={handleClick} on:click bind:this={ref} style="{style}">
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
  @import "List.scss";
</style>