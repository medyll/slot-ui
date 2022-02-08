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


  let testArray = [];

  const handleClick = (one) => (event: PointerEvent) => {
    console.log(one, event);
  };

  const objI = {title: 'Client test', subTitle: 'data'};

  const transformArgs: propsXyProps<LisItemProps, typeof objI> = [['primary', 'title'], ['secondary', 'subTitle']];


  const data: any[] = Array.from(Array(70).keys()).map(id => { return {...objI, ...{title: 'datou ' + id, id}};});


  const schemeData = appscheme_base.RECORDS
  const transformArgsBis: propsXyProps<LisItemProps, any> = [['primary', 'nomAppscheme_base'], ['secondary', 'codeAppscheme_base'], ['icon', 'iconAppscheme_base']];
  testArray = propsXy(transformArgsBis, schemeData);

  console.log(testArray)

  const myBest  = testArray.slice(0, 5);
  const myBest2 = testArray.slice(5, 9);
  const myBest3 = testArray.slice(10, 20);

  const openIn = () => {
  };

</script>

<div class="explorerFrame">
    <div class="explorerContainer">
        <div class="navLeft">
            <div style="position:sticky;margin-top: 0;">
                <input type="search" style="width:100%;" placeholder="redfer"/>
            </div>
            <List selectorField="idappscheme_base" handleClick={handleClick('reddy')}>
                <ListTitle>title</ListTitle>
                {#each testArray as key,val}
                    <ListItem data="{key.data}">
                        <span slot="icon">{null_to_empty(key.id)}</span>
                        <span slot="primary">{null_to_empty(key.primary)}</span>
                        <span slot="secondary">{null_to_empty(key.secondary)}</span>
                        <span slot="action">{null_to_empty(key.action)}</span>
                    </ListItem>
                {/each}
                <!--<ListTitle>title</ListTitle>
                {#each myBest2 as key,val}
                    <ListItem data="{key.data}">
                        <span slot="icon">{null_to_empty(key.id)}</span>
                        <span slot="primary">{null_to_empty(key.primary)}</span>
                        <span slot="secondary">{null_to_empty(key.secondary)}</span>
                        <span slot="action">{null_to_empty(key.action)}</span>
                    </ListItem>
                {/each}
                <ListTitle>title</ListTitle>
                {#each myBest3 as key,val}
                    <ListItem data="{key.data}">
                        <span slot="icon">{null_to_empty(key.id)}</span>
                        <span slot="primary">{null_to_empty(key.primary)}</span>
                        <span slot="secondary">{null_to_empty(key.secondary)}</span>
                        <span slot="action">{null_to_empty(key.action)}</span>
                    </ListItem>
                {/each}-->
            </List>
        </div>
        <div class="content">
            <div class="appbar">
                the title of the frame
            </div>
            <slot name="content">
                slot for content,
            </slot>
            {#each [...Array(12)] as key}
                <div class="buttonPole">gg</div>
            {/each}
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
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(30px);

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
        overflow: auto;
        padding: 1rem;
      }

      .content {
        flex: 1;

      }
    }

  }
</style>