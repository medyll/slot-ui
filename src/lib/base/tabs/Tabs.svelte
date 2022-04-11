<script lang="ts">
  import type {SvelteComponent} from 'svelte';
  import {onMount} from 'svelte';
  import {elem} from '../../engine/elem';

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

  let navElementRef: HTMLElement;
  let activeCellElementRef: HTMLElement;
  let boundingClientRect: DOMRect;
  const handleClick = (tabValue) => (event) => {
    activeTabCode = tabValue;
    const node    = elem(navElementRef).find(`[data-code=${activeTabCode}]`);

    if (node) {
      boundingClientRect = node.getBoundingClientRect();

      activeCellElementRef.style.left  = (boundingClientRect.left - activeCellElementRef.parentElement.offsetLeft) + 'px';
      activeCellElementRef.style.width = (boundingClientRect.width) + 'px';
      // activeCellElementRef.style.top   = (boundingClientRect.top - activeCellElementRef.parentElement.offsetTop) + 'px';
      // activeCellElementRef.style.marginLeft = (boundingClientRect.width) / 2 + 'px';
    }
  };

  onMount(() => {
    handleClick(activeTabCode)();
  });

</script>
<div class="tabsRoot {className}">
    <nav class="tabsNav flex-h flex-align-middle">
        <ul bind:this={navElementRef} class="flex-main">
            {#each items as item }
                <li data-code={item.code} on:click={handleClick(item.code,this)}
                    class={activeTabCode === item.code ? 'active' : ''}>{item.label}
                </li>
            {/each}
        </ul>
        <div>
            <slot name="tabsTitleSlot"></slot>
        </div>
        <div>
            <slot name="tabsButtonSlot"></slot>
        </div>
    </nav>
    <div bind:this={activeCellElementRef} class="tabsActiveCellContainer">
        <div class="tabSlot"></div>
    </div>
    <div class="tabsContent">
        {#each items as item}
            {#if activeTabCode === item.code}
                <svelte:component this={item.component} {...item.componentProps ?? {}}/>
            {/if}
        {/each}
    </div>
</div>
<style lang="scss">
  @import "Tabs";
</style>
