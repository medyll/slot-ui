<script lang="ts">
  import type { UiContextType } from "$contexts/ui.context.js";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { dataOp } from "$lib/engine/utils";
  import { slotuiCatalog } from "$lib/slotuiCatalog.js";
  import { null_to_empty } from "svelte/internal";
  import { sitePaths } from "$lib/engine/site.utils.js";
  import Menu from "$lib/ui/menu/Menu.svelte";
  import MenuItem from "$lib/ui/menu/MenuItem.svelte";

  let uiContext = getContext<Writable<UiContextType>>("uiContext");

  //
  $uiContext.drawerFlow = "fixed";
  $uiContext.drawerOpen = false;

  const groupedData = dataOp.groupBy(
    Object.values(slotuiCatalog).sort((a, b) => (a.name > b.name ? 1 : -1)),
    "group"
  );
</script>

<div class="overflow-auto flex-v gap-large flex-align-middle-center">
  <div class="block h-full flex-v gap-large pad-t-10">
    <div><h1 class="text-bold">slot.ui</h1><h5 class="text-bold">@medyll</h5></div>
    <div class="w-full">
      <div class="text-full">
		A simplistic library created just to learn some facts about svelte and svelteKit<br /><br />
		- Very fast learning curve<br />
		- Component generation and packaging for distribution<br />
		- Site building and high routing capacities from SvelteKit<br />
		<br />
		And from what i've learned, yes, Svelte is great !<br /><br />
		(Free to not be used)<br />
		(Some components do work)<br />
      </div>
    </div>
    <div class="w-full">
      <div class="flex-h gap-large">
        <div class="w-large">
          <br /> 
        </div>
        <!-- <div class="border radius-small">re</div> -->
      </div>
    </div>
  </div>
  {#each Object.keys(groupedData) as group}
    <div class="block">
      <h4 class="pad-4">
	  Slotted {null_to_empty(group)}</h4>
      <div class="flex-h flex-wrap flex-align-middle gap-large">
        {#each groupedData[group] as catalog}
          <div class="w-large   shad-3 radius-small">
		  <div class="pad">		  
		  <div class="pad border-b">			  
            <h5>{null_to_empty(catalog?.code)}</h5>
		  </div>

		  </div>
			<Menu style="width:100%;">
				<MenuItem><a href={sitePaths.component(catalog)}>{catalog.name} examples</a></MenuItem>
				<MenuItem><a href={sitePaths.api(catalog)}>{catalog.name} api</a></MenuItem>
			</Menu>             
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style global lang="scss">
  .block {
    // min-height: 80vh;
    border-bottom: 1px solid #ccc;
    min-width: 80%;
    max-width: 80%;
    padding: 2rem 0;
  }
</style>
