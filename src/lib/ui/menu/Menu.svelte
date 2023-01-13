<svelte:options accessors={true} />

<script lang="ts">
  import { setContext } from "svelte";
  import type { IMenuItemProps, IMenuProps } from "./types.js";
  import type { ElementProps } from "$lib/types/index.js";
  import MenuItem from "./MenuItem.svelte";
  import { createMenuStore } from "./store.js";
  import { createEventForwarder } from "$lib/engine/engine.js";
  import { custom_event, get_current_component } from "svelte/internal";
  import MenuContextAgent  from "./MenuContextAgent.svelte";

  /*  common slotUi exports*/
  let className = "";
  export { className as class };
  export let element: HTMLElement | null = null;
  const forwardEvents = createEventForwarder(get_current_component());
  /*  end slotUi exports*/
  /** @deprecated */
  export let menuList: IMenuItemProps[] | undefined      = undefined;
  export let menuItemsList: IMenuItemProps[] | undefined = undefined;
  export let data: Record<string, any>[] | undefined     = undefined;
  export let density: "none" | "tight" | "default" | "medium" | "kind" =    "tight";
  export let style: string | undefined = undefined;
  /** menu can have no border */
  export let bordered: boolean | undefined = false;

  export let selectedIndex: number | undefined = undefined;
  
  let menuAgentRef;

  $: menuAgent = menuAgentRef?.menuAgent

  export const actions = {
    navigate: (idx: number) => {
      // set selectedIndex
      selectedIndex = idx;
      if(menuAgent) $menuAgent.selectedIndex = idx
      const target = element.querySelector("[data-selected=true]");
      if (target) {
        const tD = target.getBoundingClientRect();
        const sD = element.getBoundingClientRect();
        if (tD.top - 10 <= sD.top || tD.bottom >= sD.bottom) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    },
  };

  const defaultStoreValues  = {
    menuList,
    menuItemsList,
    menuItemsInstances: [],
    density,
    data,
    selectedIndex,
    actions,
  };

  const menuStore = createMenuStore(defaultStoreValues);
  setContext("menuStateContext", menuStore);

  function onMenuClick(e: CustomEvent<any>) {
    /** @deprecated */
    let event = custom_event("menu:clicked", e.detail, { bubbles: true });
    element.dispatchEvent(event);
    event = custom_event("menu:click", e.detail, { bubbles: true });
    element.dispatchEvent(event);
  }
</script>

<MenuContextAgent bind:this={menuAgentRef} />
<ul
  use:forwardEvents
  bind:this={element}
  role="menu"
  class="density-{density} menu {className}"
  {style}
  class:bordered
  on:menu:item:clicked={onMenuClick}>
  {#if menuItemsList || menuList}
    {#each menuItemsList ?? menuList ?? [] as menuItem, itemIndex}
      <slot item={menuItem} {itemIndex} {menuItem}>
        <MenuItem
          {...menuItem}
          {itemIndex}/>
      </slot>
    {/each}
  {:else if data}
    {#each data as dta, itemIndex} 
      <slot item={dta} {itemIndex} menuItem={dta}>
        <MenuItem
          data={dta}
          {itemIndex} />
      </slot>
    {/each}
  {:else}
    <slot />
  {/if}
</ul>

<style lang="scss">
  @import "menu";
</style>
