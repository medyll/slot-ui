<script lang="ts">
  import ListItem from './ListItem.svelte';
  import {custom_event} from 'svelte/internal';
  import {writable} from 'svelte/store';
  import {setContext} from 'svelte';
  import type {propsXyProps} from '../../../utils';
  import {LisItemProps} from './types';

  export let listItems: []                        = [];
  export let size: 'default' | 'small' | 'large'  = 'default';
  export let direction: 'vertical' | 'horizontal' = 'vertical';
  export let style: string                        = '';

  export let selectBy:any;
  let ref;

  let listContext = writable({});
  setContext('listContext', listContext);

  export function selector(){

  }

  function handleClick(e: CustomEvent<LisItemProps>) {
    console.log(e.detail)
    $listContext = e.detail
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
  @import "List";
</style>