<script context="module" lang="ts">
  import type {LisItemProps} from './types';
</script>

<script lang="ts">
  import ListItem from './ListItem.svelte';
  import {setContext} from 'svelte';
  import {createListStore} from './store';
  import {ElementProps} from './types';

  export let listItems: LisItemProps[]            = [];
  export let direction: 'vertical' | 'horizontal' = 'vertical';
  export let style: string                        = '';
  export let selectorField                        = 'id';
  export let handleClick;

  export let density: ElementProps['density'] = 'default';

  let ref;
  const listStore = createListStore();
  setContext('listStateContext', listStore);

  $listStore.density = density;
  listStore.setSelectorField(selectorField);

  console.log($listStore);

  function onListItemClick(e: CustomEvent<LisItemProps>) {
    listStore.setActiveData(e.detail);
    handleClick && handleClick(e.detail);
  }
</script>

<ul class="density-{density}" on:list:listItem:clicked={onListItemClick} bind:this={ref} style="{style}">
    {#each listItems as lisItem}
        <ListItem density={density}>
            <div slot="icon"></div>
            <div slot="text"></div>
            <div slot="action"></div>
        </ListItem>
    {/each}
    <slot></slot>
</ul>

<style lang="scss" global>
  @import "List.scss";
</style>