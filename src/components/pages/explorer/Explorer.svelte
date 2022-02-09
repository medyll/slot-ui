<script lang="ts">
  import List from '../../vendor/list/List.svelte';
  import ListItem from '../../vendor/list/ListItem.svelte';
  import ListTitle from '../../vendor/list/ListTitle.svelte';
  import type {LisItemProps} from '../../vendor/list/types';
  import {propsXy} from '../../../utils';
  import type {propsXyProps} from '../../../utils';
  import {null_to_empty} from 'svelte/internal';


  import appscheme from '/src/demoData/appscheme.json';
  import appscheme_base from '/src/demoData/appscheme_base.json';
  import appscheme_field from '/src/demoData/appscheme_field.json';
  import appscheme_field_group from '/src/demoData/appscheme_field_group.json';
  import appscheme_field_type from '/src/demoData/appscheme_field_type.json';
  import appscheme_has_field from '/src/demoData/appscheme_has_field.json';
  import appscheme_icon from '/src/demoData/appscheme_icon.json';
  import appscheme_type from '/src/demoData/appscheme_type.json';
  import Header from "./Header.svelte";


  let testArray  = [];
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
        <div class="navLeft">
            <div style="position:sticky;margin-top: 0;">
                <input type="search" style="width:100%;" placeholder="redfer"/>
            </div>
            <List selectorField="idappscheme" handleClick={openIn}>
                <ListTitle>title</ListTitle>
                {#each testArray as key,val}
                    <ListItem data="{key.data}">
                        <span slot="icon">{null_to_empty(key.id)}</span>
                        <span slot="primary">{null_to_empty(key.primary)}</span>
                        <span slot="secondary">{null_to_empty(key.secondary)}</span>
                        <span slot="action">{null_to_empty(key.action)}</span>
                    </ListItem>
                {/each}
            </List>
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
    background-color: rgba(35, 31, 26,0.5);
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
        overflow: auto;
        padding: 1rem;
      }

      .content {
        flex: 1 auto;

      }
    }

  }
</style>