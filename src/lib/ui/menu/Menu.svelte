<svelte:options accessors={true} />

<script lang="ts">
  import { setContext } from "svelte";
  import type { MenuItemProps } from "./types.js";
  import type { ElementProps } from "$lib/types/index.js";
  import MenuItem from "./MenuItem.svelte";
  import { createMenuStore } from "./store.js";
  import { createEventForwarder } from "$lib/engine/engine.js";
  import { custom_event, get_current_component } from "svelte/internal";

  /*  common slotUi exports*/
  let className = "";
  export { className as class };
  export let element: HTMLElement | null = null;
  const forwardEvents = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let menuList: MenuItemProps[] | undefined = undefined;
  export let data: Record<string, any>[] | undefined = undefined;
  export let density: "none" | "tight" | "default" | "medium" | "kind" =
    "tight";
  export let style: string | undefined = undefined;
  /** menu can have no border */
  export let bordered: boolean | undefined = false;

  const menuStore = createMenuStore();
  setContext("menuStateContext", menuStore);

  $menuStore.density = density;

  function onMenuClick(e: CustomEvent<any>) {
    // onMenuItemClick && onMenuItemClick(e.detail);
    const event = custom_event("menu:clicked", e.detail, { bubbles: true });
    element.dispatchEvent(event);
  }

  function sayHello() {}
</script>

<ul
  use:forwardEvents
  bind:this={element}
  role="menu"
  class="density-{density} menu {className}"
  {style}
  class:bordered
  on:menu:item:clicked={onMenuClick}>
  {#if menuList }
    {#each menuList as menuItem, itemIndex}
      <slot item={menuItem} {itemIndex} {menuItem}>
        <MenuItem {...menuItem} />
      </slot>
    {/each}
  {:else if data}
    {#each data as dta, itemIndex}
      <slot item={dta} {itemIndex} menuItem={dta}>
        <MenuItem data={dta} />
      </slot>
    {/each}
  {:else}
    <slot />
  {/if}
</ul>

<style lang="scss">
  @import "menu";
</style>
