<script context="module" lang="ts">
  import type {LisItemProps} from './types';
</script>

<script lang="ts">
  import ListItem from './ListItem.svelte';
  import {setContext} from 'svelte';
  import {createListStore} from './store';
  import type {ElementProps} from '../../../types';
  import {null_to_empty} from 'svelte/internal';
  import {toFa} from '../../../utils';
  import Icon from '../../ui/icon/Icon.svelte';

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

  function onListItemClick(e: CustomEvent<LisItemProps>) {
    listStore.setActiveData(e.detail);
    handleClick && handleClick(e.detail);
  }
</script>

<ul class="density-{density}" on:list:listItem:clicked={onListItemClick} bind:this={ref} style="{style}">
    {#each listItems as lisItem}
        <ListItem density={density}>
            <span slot="icon"><Icon fontSize="tiny" icon={toFa(lisItem.icon)}/></span>
            <span slot="primary">{null_to_empty(lisItem.primary)}</span>
            <span slot="action">{null_to_empty(lisItem.action)}</span>
        </ListItem>
    {/each}
    <slot></slot>
</ul>

<style lang="scss" global>
  @import "List.scss";
</style>