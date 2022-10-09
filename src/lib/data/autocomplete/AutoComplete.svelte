<svelte:options accessors={true} />

<script lang="ts">
  import Button from "$lib/base/button/Button.svelte";
  import Input from "$lib/base/input/Input.svelte";
  import { dataOp } from "$lib/engine/utils.js";
  import type { UsePopperProps } from "$lib/ui/popper/usePopper.js";
  import Popper from "$lib/ui/popper/Popper.svelte";
  import Menu from "$lib/ui/menu/Menu.svelte";
  import MenuItem from "$lib/ui/menu/MenuItem.svelte";
  import { onMount } from "svelte";
  import Icon from "$lib/base/icon/Icon.svelte";
  import { custom_event } from "svelte/internal";
  import {
    compute_slots,
    get_current_component,
    null_to_empty,
  } from "svelte/internal";
  import { createEventForwarder } from "$lib/engine/eventForwarder.js";

  let className = "";
  export { className as class };
  export let element: HTMLDivElement | null = null;
  const forwardEvents = createEventForwarder(get_current_component());

  /** initial data to look in */
  export let data: any = [];
  /** default field to be used for searches, can be * */
  export let searchField = "*";
  /** defaults fields to be shown */
  export let dataFieldName: string | string[] | undefined = undefined;
  /** search mode : exact or partial match*/
  export let mode: "exact" | "partial" = "partial";
  /** external bind use, to read filtered data */
  export let filteredData: any[] = data;
  /** selectedIndex : index of the selected item in data */
  export let selectedIndex: number = -1;
  /** selectedIndex : index of the selected item in data */
  export let onPick: ((args: any) => void) | undefined = undefined;

  let searchString: string;
  let container: HTMLElement;
  let menuHTML: HTMLElement;
  let popperHTML: HTMLElement;
  let popperOpen: boolean;
  let popperOptionsOpen: boolean;

  let menuRef;

  const doFind = <T = Record<string, any>>(
    list: T[],
    kw: string,
    field: string
  ) => {
    let results: any[];
    // if kw empty
    if (!kw) {
      results = data;
    } else {
      results =
        mode === "exact"
          ? dataOp.filterList(list, kw, field)
          : dataOp.searchList(list, kw, field);
    }
    return results;
  };

  function preNavigate(e: KeyboardEvent, data: Record<string, any>) {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSelect(filteredData, selectedIndex);
      return;
    }
    if (data.length === 0) return;
    if ([38, 40].includes(e.keyCode)) e.preventDefault();

    navigateList(e.keyCode, selectedIndex).then((res) =>
      menuRef.actions.navigate(res)
    );
  }

  async function navigateList(
    keyCode: KeyboardEvent["keyCode"],
    actualIndex: number
  ) {
    if (![38, 40].includes(keyCode)) return;

    const dir = keyCode === 38 ? -1 : +1;

    return actualIndex + dir;
  }

  function onSelect(filteredData: any, index: number) {
    const selectedDta = filteredData?.[index];

    if (onPick) onPick(selectedDta);
    // onMenuItemClick && onMenuItemClick(e.detail);
    let event = custom_event("on:pick", selectedDta, { bubbles: true });
    element.dispatchEvent(event);
    menuHTML.dispatchEvent(event);
    popperHTML.dispatchEvent(event);
  }

  $: dataKeys = Object.keys(data[0] || {})
    .filter((r) => ["string", "number"].includes(typeof data?.[0]?.[r]))
    .sort((a: string, b: string) => {
      return a > b ? 1 : a < b ? -1 : 0;
    });

  $: filteredData = !searchString
    ? []
    : doFind(data, searchString, searchField);

  onMount(() => {
    return () => {};
  });
</script>

<Popper
  bind:isOpen={popperOpen}
  bind:element={popperHTML}
  position="BC"
  autoClose
  class="w-large">
  <Input
    bind:value={searchString}
    bind:element
    type="search"
    inputType="search"
    size="auto"
    class={className}
    slot="holderSlot"
    on:pick
    on:click={() => (popperOpen = true)}
    on:focus={() => {
      setTimeout(() => (popperOpen = true), 250);
    }}
    on:keydown={(e) => preNavigate(e, filteredData, menuHTML)}
    {...$$restProps} />
  <Menu
    bind:this={menuRef}
    style="max-height:350px;overflow:auto;width:100%;"
    data={filteredData}
    bind:element={menuHTML}
    bind:selectedIndex
    on:mouseover={() => {
      element.focus();
    }}
    let:itemIndex
    let:item>
    <slot menuItemData={item} >
      <MenuItem
        text={item?.[dataFieldName]}
        on:click={() => {
          if (onPick) onPick(item);
          // selectedIndex = itemIndex;
          popperOpen = false;
          menuRef.actions.navigate(itemIndex);
        }} />
    </slot>
  </Menu>
  {#if !filteredData.length && !searchString}
    <slot name="emptySearchString">
      <div class="pad-2 flex-h flex-align-middle gap-small">
        <Icon fontSize="large" icon="fa-regular:keyboard" />
        perform search
      </div>
    </slot>
  {:else if !filteredData.length}
    <slot name="emptySearch">
      <div class="pad-2 flex-h flex-align-middle gap-small">
        <Icon
          class="dsp-inline"
          fontSize="large"
          icon="material-symbols:no-sim-outline" />
        no results
      </div>
    </slot>
  {/if}
</Popper>