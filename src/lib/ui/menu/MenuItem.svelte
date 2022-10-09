<svelte:options accessors={true} />

<script lang="ts">
  import { getContext, onMount } from "svelte";
  import {
    custom_event,
    get_current_component,
    null_to_empty,
  } from "svelte/internal";

  import Divider from "$lib/base/divider/Divider.svelte";
  import Icon from "$lib/base/icon/Icon.svelte";
  import { createEventForwarder } from "$lib/engine/engine.js";
  import type { MenuItemProps, MenuProps } from "./types.js";
  import type { ElementProps } from "$lib/types/index.js";
  import type { Writable } from "svelte/store";

  /*  common slotUi exports*/
  let className = "";
  export { className as class };
  export let element: HTMLElement | undefined = undefined;
  const forwardEvents = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let text: string | undefined = undefined;
  /** text props, shown on the right side of the menuItem*/
  export let action: string | undefined = undefined;
  export let icon: MenuItemProps["icon"] | undefined = undefined;
  export let iconColor: string | undefined = undefined;
  export let iconSize: ElementProps["sizeType"] | undefined = "small";
  export let divider: MenuItemProps["divider"] = false;
  export let dividerBefore: MenuItemProps["divider"] = false;
  export let data: Record<string, any> = { empty: "menu item data" };
  /** highlight menu item when selected*/
  export let selected: boolean | undefined = undefined;
  export let onMenuItemClick: Function = () => {};
  /** position in the list */
  export let itemIndex: number;

  let mounted: boolean = false;
  const menuStateContext = getContext<Writable<MenuProps>>("menuStateContext");

  let instance = get_current_component();

  if (icon || $$slots.iconSlot) {
    $menuStateContext.hasIcon = true;
  }

  if (selected) {
    $menuStateContext.selectedIndex = itemIndex;
  }

  onMount(() => {
    mounted = true;
    $menuStateContext.menuItemsInstances?.push(instance);
    // if no data and no listItem, create index
    if (!itemIndex) {
      itemIndex = $menuStateContext.menuItemsInstances?.length -1;
    }

    return (()=>{
    })
  });

  const handleClick = (data: any) => () => {
    const event = custom_event("menu:item:clicked", data, { bubbles: true });
    if (element) element.dispatchEvent(event);
    // set selectedIndex if we have index
    // set selected style
    setSelected();
    onMenuItemClick(data);
  };

  const setSelected = () => {
    $menuStateContext.selectedIndex = itemIndex;
  };

</script>

{#if dividerBefore}
  <li>
    <slot name="divider"><Divider density="tight" expansion="centered" /></slot>
  </li>
{/if}
<li
  class="menuItem {className}"
  data-selected={$menuStateContext.selectedIndex === itemIndex || undefined}
  role="menuitem"
  bind:this={element}
  use:forwardEvents
  on:click={handleClick(data)}>
  {#if $menuStateContext?.hasIcon}
    <div class="menuItemIcon">
      <slot name="iconSlot">
        <Icon {icon} color={iconColor} fontSize={iconSize} /></slot>
    </div>
  {/if}
  <div class="menuItemText">
    <slot>
      <slot name="textSlot">{null_to_empty(text)}</slot>
    </slot>
  </div>
  {#if $$slots.actionSlot || action}
    <div class="menuItemActions">
      <slot name="actionSlot">{action}</slot>
    </div>
  {/if}
</li>
{#if divider}
  <li>
    <slot name="divider"><Divider density="tight" expansion="padded" /></slot>
  </li>
{/if}

<style global lang="scss">
  @import "menu";
</style>
