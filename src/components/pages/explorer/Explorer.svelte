<script lang="ts">
  import List from '../../../lib/base/list/List.svelte'; 
  import type {LisItemProps} from '$lib/base/list/types.js';
  import type {PropsProxyProps} from '$lib/engine/utils.js';
  import {propsProxy} from '$lib/engine/utils.js';
  import {null_to_empty} from 'svelte/internal';
  import appscheme from '../../../demoData/appscheme.json';
  import Header from './Header.svelte';
  import MenuBar from '$lib/ui/toggleBar/ToggleBar.svelte';
  import Elementor from '$lib/base/elementor/Elementor.svelte';
  import Frame from '$lib/ui/frame/Frame.svelte'; 

  let listItems = [];

  let activeData;
  let schemeName = 'Appscheme';

  const openIn = (event: PointerEvent) => {
    activeData = event;
  };

  const schemeData                                           = appscheme.RECORDS;
  const transformArgsBis: PropsProxyProps<LisItemProps, any> = [['primary', `nom${schemeName}`], ['secondary', `code${schemeName}`], ['icon', `icon${schemeName}`]];
  listItems                                                  = propsProxy(transformArgsBis, schemeData);

  let debugValues = [];
  $: if (activeData) {
    debugValues = Object.values(activeData);
  }

</script>

<Frame>
    <MenuBar orientation="left" slot="navLeftHeaderFrameSlot" title="Navigation bar ">
        <input slot="menuBarSwitcher" placeholder="Search in Bar" style="position:relative;width:100%;" type="text"/>
    </MenuBar>
    <List bind:listItems={listItems} density="default"
          let:listItem
          onItemClick={openIn}
          selectorField="idappscheme"
          slot="frameDrawerSlot"
          style="height:100%;"
          title="Title List test">
        <!-- <ListItem  data="{listItem?.data}">
            <span slot="icon"><Icon fontSize="tiny" icon={listItem?.icon}/></span>
            <span slot="primary">{null_to_empty(listItem?.primary)}...</span>
            <span slot="action">{null_to_empty(listItem?.action)}</span>
        </ListItem> -->
    </List>
    <Header bind:debugValues slot="contentHeader" title={activeData?.[`nomAppscheme`]}>
        {activeData?.[`nomAppscheme`]}
    </Header>
    <div class="flex-main overflow-auto pad-4" slot="content">
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
