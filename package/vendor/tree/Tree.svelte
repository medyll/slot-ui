
<svelte:options accessors={true}/>

<script >import { trans2Tree } from './tree.utils';
export let paths = [];
export let pathField = 'path';
export let pathes = trans2Tree(paths, pathField);
</script>
<div class="treeRoot ">
{#each pathes as pat, k}
    <div>
        <div class="flex-h flex-align-middle pad-1" style="gap:1rem;">
            <div><input type="checkbox" /> </div>
            <div>{pat.name}</div>
        </div>
        {#if pat?.children?.length}
            <div class="pad-l-3">
                <div class="flex-h ">
                    <div class="notter"></div>
                    <div>
                        <svelte:self pathes={pat.children}/>
                    </div>
                </div>
            </div>
        {/if}
    </div>
{/each}
</div>
<style >.treeRoot .notter {
  border: 1px solid var(--theme-border_color);
  border-radius: 6px;
  background-color: var(--theme-color-primary);
  padding: 0.125rem; }
</style>