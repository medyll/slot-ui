<script lang="ts">
  import List from '../../../lib/vendor/list/List.svelte';
  import ListItem from '../../../lib/vendor/list/ListItem.svelte';
  import ListTitle from '../../../lib/vendor/list/ListTitle.svelte';
  import type {LisItemProps} from '../../../lib/vendor/list/types';
  import {propsXy, toFa} from '../../../utils';
  import type {propsXyProps} from '../../../utils';
  import {null_to_empty} from 'svelte/internal';
  import _ from 'lodash';
  import VirtualList from '@sveltejs/svelte-virtual-list';
  import appscheme from '/src/demoData/appscheme.json';
  import appscheme_base from '/src/demoData/appscheme_base.json';
  import appscheme_field from '/src/demoData/appscheme_field.json';
  import appscheme_field_group from '/src/demoData/appscheme_field_group.json';
  import appscheme_field_type from '/src/demoData/appscheme_field_type.json';
  import appscheme_has_field from '/src/demoData/appscheme_has_field.json';
  import appscheme_icon from '/src/demoData/appscheme_icon.json';
  import appscheme_type from '/src/demoData/appscheme_type.json';
  import Header from './Header.svelte';
  import Icon from '../../../lib/ui/icon/Icon.svelte';
  import Divider from '../../../lib/vendor/divider/Divider.svelte';
  import TopBar from '../../../lib/vendor/topBar/TopBar.svelte';
  import ContentSwitcher from '../../../lib/vendor/contentSwitcher/ContentSwitcher.svelte';
  import MenuBar from '../../../lib/vendor/topBar/TopBar.svelte';
  import Elementor from '../../../lib/vendor/elementor/Elementor.svelte';
  import Frame from '$lib/vendor/frame/Frame.svelte';


  let listItems = [];

  let activeData;
  let schemeName = 'Appscheme';

  const openIn = (event: PointerEvent) => {
    activeData = event;
  };

  const schemeData                                        = appscheme.RECORDS;
  const transformArgsBis: propsXyProps<LisItemProps, any> = [['primary', `nom${schemeName}`], ['secondary', `code${schemeName}`], ['icon', `icon${schemeName}`]];
  listItems                                               = propsXy(transformArgsBis, schemeData);

  let debugValues = [];
  $: if (activeData) {
    debugValues = Object.values(activeData);
  }
</script>

<Frame>
    <MenuBar slot="navLeftHeaderFrameSlot" orientation="left" title="Navigation bar ">
        <input slot="menuBarSwitcher" placeholder="Search in Bar" style="width:100%;" type="text"/>
    </MenuBar>
    <div slot="navLeftFrameSlot">
        <List selectorField="idappscheme"
              density="default"
              onItemClick={openIn}
              title="Title List"
              bind:listItems={listItems}
              let:listItem
              style="height:100%;">
            <ListItem data="{listItem.data}">
                <span slot="icon"><Icon fontSize="tiny" icon={toFa(listItem.icon)}/></span>
                <span slot="primary">{null_to_empty(listItem.primary)}</span>
                <span slot="action">{null_to_empty(listItem.action)}</span>
            </ListItem>
        </List>
    </div>
    <Header slot="contentHeaderFrameSlot" title={activeData?.[`nomAppscheme`]} bind:debugValues>
        {activeData?.[`nomAppscheme`]}
    </Header>
    <div slot="contentFrameSlot" class="flex-main overflow-auto pad-4">
        {#if activeData}
            <Elementor let:itemObject bind:item={activeData}>
                <div class="flex-h flex-align-middle">
                    <div class="pad-2 border-b" style="width:120px;overflow: hidden">{itemObject.key}</div>
                    <div class="pad-2">:</div>
                    <div class="pad-2">{JSON.stringify(itemObject.value)}</div>
                </div>
            </Elementor>
        {/if}
    </div>
</Frame>