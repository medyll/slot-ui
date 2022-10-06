<script lang="ts">
  import Button from "$lib/base/button/Button.svelte";
import { transition } from "d3";

  import { ceil } from "lodash";
  import { fade } from "svelte/transition";

  export let data: any | undefined;
  export let columns: number = 3;

  export let isExpanded: boolean = false;
</script>

{#if data}
  <div
    class="slotUiGrid panelGrid"
    style="--slotui-column-size:{Math.floor(100 / columns)}%;gap:0.5rem">
    {#each data as dta}
      {#if !isExpanded}
        <div
          on:click={() => {
            isExpanded = true;
          }}
          class="panelGridThumb"
          in:fade>
          <slot data={dta} />
        </div>
      {/if}
    {/each}
    {#if isExpanded}
      <div class="panelGridPreview" in:fade>
        <div
          on:click={() => {
            isExpanded = false;
          }}>
          <Button naked icon="chevron-left" />
        </div>
        <slot name="zoomSlot" />
      </div>
    {/if}
  </div>
{/if}

<style lang="scss">
  .panelGrid {
    .panelGridPreview {
      display: flex;
    }
  }
  .slotUiGrid {
    display: grid;
    grid-gap: 0.2rem;
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc(var(--slotui-column-size) - 0.5rem), 1fr)
    );
  }
</style>
