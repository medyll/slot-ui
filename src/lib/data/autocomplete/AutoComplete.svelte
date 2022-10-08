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

  let className = "";
  export { className as class };
  export let element: HTMLDivElement | null = null;

  /** initial data to look in */
  export let data: any = [];
  /** default field to be used for searches, can be * */
  export let defaultField = "*";
  /** defaults fields to be shown */
  export let dataFieldName: string | string[] | undefined = undefined;
  /** show the opener button for the choice of fields */
  export let showSortMenu: boolean = false;
  /** search mode : exact or partial match*/
  export let mode: "exact" | "partial" = "partial";
  /** external bind use, to read filtered data */
  export let filteredData: any[] = data;
  /** selectedIndex : index of the selected item in data */
  export let selectedIndex: number = -1;

  let searchString: string;
  let container: HTMLElement;
  let menuHTML: HTMLElement;
  let popperHTML: HTMLElement;
  let popperOpen: boolean;
  let popperOptionsOpen: boolean;

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

  function preNavigate(
    e: KeyboardEvent,
    data: Record<string, any>,
    element?: HTMLElement
  ) {
    console.log(e.keyCode)
	if(e.keyCode===13) {
		e.preventDefault();;
		onSelect(filteredData,selectedIndex)
		return;
	}
    if (data.length === 0) return;
    if ([38, 40].includes(e.keyCode)) e.preventDefault();

    navigateList(e.keyCode, selectedIndex).then((res) => {
      if (res !== undefined && element) {
        //
        selectedIndex = res > data.length || res < 0 ? 0 : res;
        const target = element.querySelector("[data-selected=true]");
        if (target) {
          const tD = target.getBoundingClientRect();
          const sD = element.getBoundingClientRect();
          if (tD.top - 10 <= sD.top || tD.bottom >= sD.bottom) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            console.log("scroll");
          }
        }
      }
    });
  }

  async function navigateList(
    keyCode: KeyboardEvent["keyCode"],
    actualIndex: number
  ) {
	if (![38, 40].includes(keyCode)) return;


    const dir = keyCode === 38 ? -1 : +1;

    return actualIndex + dir;
  }


  function onSelect(filteredData:any,index:number ) {
	const selectedDta = filteredData?.[index]
	 console.log(selectedDta)
    // onMenuItemClick && onMenuItemClick(e.detail);
    const event = custom_event("on:select",selectedDta, { bubbles: true });
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
    : doFind(data, searchString, defaultField);

  $: console.log({ filteredData });
  onMount(() => {
    return () => {};
  });
</script>

<Popper bind:isOpen={popperOpen} bind:element={popperHTML} on:select position="BC" autoClose class="w-large">
  <Input
    bind:value={searchString}
    bind:element
    placeholder="Search component"
    type="search"
    inputType="search"
    size="auto"
    class={className}
    slot="holderSlot"
	on:select
    on:click={() => (popperOpen = true)}
    on:focus={() => {
      setTimeout(() => (popperOpen = true), 250);
    }}
    on:keydown={(e) => preNavigate(e, filteredData, menuHTML)}
    {...$$restProps} />
  <slot {filteredData}>
    <Menu
      style="max-height:350px;overflow:auto;width:100%;"
      data={filteredData}
      let:itemIndex
      bind:element={menuHTML}
      let:item>
      <MenuItem
        text={item?.[dataFieldName]}
        selected={itemIndex === selectedIndex}
        on:click={() => {}} />
    </Menu>
  </slot>
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
        <Icon class="dsp-inline" fontSize="large" icon="material-symbols:no-sim-outline" />
	  no results
      </div>
    </slot>
  {/if}
</Popper>

{#if popperOptionsOpen}
  <Popper
    code="ui"
    parentNode={container}
    position="BC"
    flow="fixed"
    class="marg-4"
    stickToHookWidth={true}>
    <Menu style="max-height:350px;overflow:auto;width:100%;" density="default">
      <MenuItem
        divider={true}
        text="strict"
        on:click={() => {
          if (mode === "exact") {
            mode = "partial";
          } else {
            mode = "exact";
          }
        }}>
        <div slot="actionSlot" class="pad-r-1">
          <input
            type="checkbox"
            checked={mode === "exact"}
            style="display:block;margin:0" />
        </div>
        strict
      </MenuItem>
      <MenuItem
        text="strict"
        on:click={() => {
          defaultField = "*";
        }}>
        <div slot="actionSlot" class="pad-r-1">
          {#if defaultField === "*"}
            <input
              type="checkbox"
              checked={defaultField === "*"}
              style="display:block;margin:0" />
          {/if}
        </div>
        {"*"}
      </MenuItem>
      {#each dataKeys as kk}
        <MenuItem
          text="strict"
          on:click={() => {
            defaultField = kk;
          }}>
          <div slot="actionSlot" class="pad-r-1">
            {#if defaultField === kk}
              <input
                type="checkbox"
                checked={defaultField === kk}
                style="display:block;margin:0" />
            {/if}
          </div>
          {kk}
        </MenuItem>
      {/each}
    </Menu>
  </Popper>
{/if}

<slot name="noResultsSlot" />
<slot name="loadingSlot" />

<style lang="scss">
  container {
    display: inline-flex;
    gap: 0.25rem;
  }
</style>
