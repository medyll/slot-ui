<svelte:options accessors={true}/>

<script lang="ts">
  import {trans2Tree} from './tree.utils';
  import type {PathsType, TreeItemType} from './types';


  export let paths: PathsType  = [];
  export let pathField: string = 'path';

  export let pathes: TreeItemType[] = trans2Tree(paths, pathField);
</script>

{#each pathes as pat, k}
    <div>
        <div>- {pat.name}</div>
        <div class="pad-l-2"><svelte:self pathes={pat.children}/></div>
    </div>
{/each}

<style lang="scss">

</style>