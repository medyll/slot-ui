<script lang="ts">
  import { null_to_empty } from "svelte/internal";
  import { goto } from "$app/navigation";

  import { slotuiCatalog } from "$lib/slotuiCatalog.js";
  import List from "$lib/base/list/List.svelte";
  import ListItem from "$lib/base/list/ListItem.svelte";
  import ListTitle from "$lib/base/list/ListTitle.svelte";
  import { dataOp } from "$lib/engine/utils.js";
  import {sitePaths} from "../site.utils.js";

  const groupedData = dataOp.groupBy(
    Object.values(slotuiCatalog).sort((a, b) => (a.name > b.name ? 1 : -1)),
    "group"
  );
</script>

<List   density="default" selectorField="code" height="100%">
  {#each Object.keys(groupedData) as group}
    <ListTitle density="default" class="text-bold">
      Slot-ui {null_to_empty(group)}
    </ListTitle>
    {#each groupedData[group] as catalog}
      <ListItem selected={true} data={catalog} density="small" class="pad-l-4">
        <a slot="primary" href="{sitePaths.component(catalog)}">
          {null_to_empty(catalog?.name)}
        </a>
      </ListItem>
    {/each}
  {/each}
</List>

<style lang="scss">
  a {
    text-decoration: none;
  }
</style>
