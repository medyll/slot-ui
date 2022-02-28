<script lang="ts">
  import type {SvelteComponent} from 'svelte';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  /*  end slotUi exports*/

  export type Items = {
    label: string,
    code: string,
    component: SvelteComponent,
    componentProps: Record<string, any>
  }

  export type TabsItemsProps = Items[];

  export let items: TabsItemsProps = [];
  export let activeTabCode: string = '';

  let boundingClientRect;
  const handleClick = (tabValue, node) => (event) => {
    activeTabCode      = tabValue;
    boundingClientRect = node.getBoundingClientRect();
  };
</script>
<nav>
    <ul>
        {#each items as item }
            <li on:click={handleClick(item.code,this)}
                class={activeTabCode === item.code ? 'active' : ''}>{item.label}
            </li>
        {/each}
    </ul>
    <div>
        {#each items as item}
            {#if activeTabCode === item.code}
                <svelte:component this={item.component} {...item.componentProps}/>
            {/if}
        {/each}
    </div>
</nav>
<style lang="scss">
  @import "./Tabs.scss";
</style>
