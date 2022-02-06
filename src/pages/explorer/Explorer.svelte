<script lang="ts">
  import List from '../../components/vendor/list/List.svelte';
  import ListItem from '../../components/vendor/list/ListItem.svelte';
  import ListTitle from '../../components/vendor/list/ListTitle.svelte';
  import type {LisItemProps} from '../../components/vendor/list/types';
  import {propsXy} from '../../utils';
  import type {propsXyProps} from '../../utils';
  import {null_to_empty} from 'svelte/internal';

  let testArray = [];

  const handleClick = (one) => (event: PointerEvent) => {
    // console.log(one, event, 'red');
  };

  const objI = {title: 'Client test', subTitle: 'data'};

  const transformArgs: propsXyProps<LisItemProps, typeof objI> = [['primary', 'title'], ['secondary', 'subTitle']];


  const data: any[] = Array.from(Array(120).keys()).map(id => { return {...objI, ...{title: 'datou ' + id, id}};});

  testArray = propsXy(transformArgs, data);
  console.log({testArray});

</script>

<div class="explorerFrame">
    <div class="appbar">
        the title of the frame
    </div>
    <div class="explorerContainer">
        <div class="navLeft">
            <input type="search" style="width:100%;" placeholder="redfer"/>
            <List on:click={handleClick('reddy')}>
                <ListTitle>title</ListTitle>
                {#each [...testArray] as key,val}
                    <ListItem data="{key.data}">
                        <span slot="icon">{null_to_empty(key.id)}</span>
                        <span slot="primary">{null_to_empty(key.primary)}</span>
                        <span slot="secondary">{null_to_empty(key.secondary)}</span>
                        <span slot="action">{null_to_empty(key.action)}</span>
                    </ListItem>
                {/each}
                <!--<ListTitle>title</ListTitle>
                {#each [...Array(4)] as key,val}
                    <ListItem>
                        <span slot="icon">icon</span>
                        <div slot="primary">primary text</div>
                        <div slot="secondary">secondary text</div>
                        <span slot="action">action</span>
                    </ListItem>
                {/each}
                <ListTitle>title</ListTitle>
                {#each [...Array(7)] as key}
                    <ListItem>
                        <span slot="icon">icon</span>
                        <div slot="primary">primary text</div>
                        <div slot="secondary">secondary text</div>
                        <span slot="action">action</span>
                    </ListItem>
                {/each}
                <ListTitle>title</ListTitle>
                {#each [...Array(30)] as key}
                    <ListItem>
                        <span slot="icon">icon</span>
                        <div slot="primary">primary text</div>
                        <div slot="secondary">secondary text</div>
                        <span slot="action">action</span>
                    </ListItem>
                {/each}-->
            </List>
        </div>
        <div class="content">
            <slot name="content"></slot>
            {#each [...Array(12)] as key}
                <div class="buttonPole"></div>
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
        height: 100%;
        overflow: auto;
        padding: 1rem;
      }

      .content {
        flex: 1;

      }
    }

  }
</style>