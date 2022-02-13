<script lang="ts">
  import List from '../../vendor/list/List.svelte';
  import ListItem from '../../vendor/list/ListItem.svelte';
  import ListTitle from '../../vendor/list/ListTitle.svelte';
  import type {LisItemProps} from '../../vendor/list/types';
  import {propsXy, toFa} from '../../../utils';
  import type {propsXyProps} from '../../../utils';
  import {null_to_empty} from 'svelte/internal';
  import _ from 'lodash';

  import appscheme from '/src/demoData/appscheme.json';
  import appscheme_base from '/src/demoData/appscheme_base.json';
  import appscheme_field from '/src/demoData/appscheme_field.json';
  import appscheme_field_group from '/src/demoData/appscheme_field_group.json';
  import appscheme_field_type from '/src/demoData/appscheme_field_type.json';
  import appscheme_has_field from '/src/demoData/appscheme_has_field.json';
  import appscheme_icon from '/src/demoData/appscheme_icon.json';
  import appscheme_type from '/src/demoData/appscheme_type.json';
  import Header from './Header.svelte';
  import Icon from '../../ui/icon/Icon.svelte';
  import Divider from "../../vendor/divider/Divider.svelte";
  import TopBar from "../../vendor/topBar/TopBar.svelte";
  import ContentSwitcher from "../../vendor/contentSwitcher/ContentSwitcher.svelte";
  import MenuBar from "../../vendor/topBar/TopBar.svelte";


  let testArray = [];

  let activeData;
  let schemeName = 'Appscheme';

  const openIn = (event: PointerEvent) => {
    activeData = event;
  };

  const schemeData                                        = appscheme.RECORDS;
  const transformArgsBis: propsXyProps<LisItemProps, any> = [['primary', `nom${schemeName}`], ['secondary', `code${schemeName}`], ['icon', `icon${schemeName}`]];
  testArray                                               = propsXy(transformArgsBis, schemeData);

</script>

<div class="explorerFrame">
    <div class="explorerContainer">
        <div class="navLeft grid-v h-full ">
            <div class="pad-2" >
                <MenuBar orientation="left" title="Navigation bar ">
                   <input slot="menuBarSwitcher" placeholder="Search in Bar" style="width:100%;" type="text" />
                </MenuBar>
            </div>
            <div class="grid-main overflow-auto">
                <List selectorField="idappscheme"
                      density="tight"
                      handleClick={openIn}>
                    <ListTitle primary="Title"/>
                    {#each testArray as key,val}
                        <ListItem density="default" data="{key.data}">
                            <span slot="icon"><Icon fontSize="tiny" icon={toFa(key.icon)}/></span>
                            <span slot="primary">{null_to_empty(key.primary)}</span>
                            <span slot="action">{null_to_empty(key.action)}</span>
                        </ListItem>
                    {/each}
                </List>
            </div>
        </div>
        <div class="content">
            <Header title={activeData?.[`nomAppscheme`]}>
                {activeData?.[`nomAppscheme`]}
            </Header>
            <div>
                <pre>{JSON.stringify(activeData, null, ' ')}</pre>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  .explorerFrame {
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    background-color: rgba(35, 31, 26, 0.5);
    backdrop-filter: blur(30px);
    color: white;

    .appbar {
      padding: 2rem;
      color: white;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    }

    .explorerContainer {
      display: flex;
      flex: 1;
      overflow: hidden;

      .navLeft {
        width: 270px;
        min-width: 270px;
      }

      .content {
        flex: 1 auto;

      }
    }

  }
</style>