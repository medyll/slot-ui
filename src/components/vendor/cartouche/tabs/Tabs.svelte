
<script lang="ts">
  import type {SvelteComponent} from 'svelte';

  export type Items = {
    label: string,
    code: string,
    component: SvelteComponent,
    componentProps: Record<string,any>
  }

  export type TabsItemsProps = Items[];

  export let items: TabsItemsProps = [];
  export let activeTabCode: string = '';

  let boundingClientRect;
  const handleClick = (tabValue,node) => (event) => {
    activeTabCode = tabValue;
    boundingClientRect = node.getBoundingClientRect()
  };
</script>
<ul >
    {#each items as item }
        <li on:click={handleClick(item.code,this)}
            class={activeTabCode === item.code ? 'active' : ''}>{item.label}
        </li>
    {/each}
</ul>
<div>
    {#each items as item}
        {#if activeTabCode === item.code}
            <svelte:component this={item.component}  {...item.componentProps}/>
        {/if}
    {/each}
</div>

<style lang="scss">
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  li {
    padding: 0.5rem;
    border-bottom: 5px solid transparent;

    &.active {
      border-bottom: 5px solid #666;
    }
  }
</style>