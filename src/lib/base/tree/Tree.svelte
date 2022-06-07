<svelte:options accessors={true}/>

<script lang="ts">
  import {trans2Tree} from './tree.utils';
  import type {PathDataType, TreeItemType} from './types';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let paths: PathDataType[] = [];
  export let pathField: string     = 'path';
  let finalPaths: TreeItemType[];

  // private use
  export let pathes: TreeItemType[] = trans2Tree(paths, pathField);

  function handleCheck(dataObj: TreeItemType) {
    console.log('', dataObj.data);
  }

  finalPaths = trans2Tree(paths, pathField);

</script>
<div bind:this={element} class="treeRoot {className}" use:forwardEvents>
    {#each pathes as pat, k}
        <div>
            <div class="flex-h flex-align-middle pad-1 gap-small">
                <div><input on:click={()=>{handleCheck(pat)}} type="checkbox"/></div>
                <div>{pat.name}</div>
            </div>
            {#if pat?.children?.length}
                <div class="pad-l-5 border-b">
                    <div class="flex-h ">
                        <!--<div class="notter"></div>-->
                        <div>
                            <svelte:self pathes={pat.children}/>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    {/each}
</div>
<style lang="scss">
  .treeRoot {

    .notter {
      border: 1px solid var(--theme-border_color);
      border-radius: 6px;
      background-color: var(--theme-color-primary);
      padding: 0.125rem;
    }
  }
</style>