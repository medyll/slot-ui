<script context="module" lang="ts">
  import type {LisItemProps} from './types';
</script>

<script lang="ts">
  import ListItem from './ListItem.svelte';
  import {setContext} from 'svelte';
  import {createListStore} from './store';
  import type {ElementProps} from '../../../types';
  import {get_current_component, null_to_empty} from 'svelte/internal';
  import {toFa} from '../../../utils';
  import Icon from '../../ui/icon/Icon.svelte';
  import ListTitle from './ListTitle.svelte';
  import VirtualList from '@sveltejs/svelte-virtual-list';
  import {createEventForwarder} from '$lib/engine/engine';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let listItems: LisItemProps[];
  export let direction: 'vertical' | 'horizontal' = 'vertical';
  export let style: string                        = '';
  export let selectorField;
  export let onItemClick;
  export let title: string;

  export let density: ElementProps['density'] = 'default';

  const listStore = createListStore();
  setContext('listStateContext', listStore);

  $listStore.density = density;
  listStore.setSelectorField(selectorField);

  function onListItemClick(e: CustomEvent<LisItemProps>) {
    listStore.setActiveData(e.detail);
    onItemClick && onItemClick(e.detail);
  }

</script>

<ul class="density-{density}" on:list:listItem:clicked={onListItemClick} bind:this={element} style="{style}">
    {#if $$slots.title || title}
        <slot name="title">
            <ListTitle primary={title}/>
        </slot>
    {/if}
    {#if listItems}
        <VirtualList items={listItems} let:item>
            <slot listItem={item}>
                <ListItem density={density} data={item.data}>
                    <span slot="icon"><Icon fontSize="tiny" icon={toFa(item.icon)}/></span>
                    <span slot="primary">{null_to_empty(item.primary)}</span>
                    <span slot="action">{null_to_empty(item.action)}</span>
                </ListItem>
            </slot>
        </VirtualList>
    {/if}
    {#if !listItems}
        <slot></slot>
    {/if}
</ul>

<style lang="scss" global>
  @import "List";
</style>

