<svelte:options accessors />

<script lang="ts">
  import { custom_event } from "svelte/internal";
  import { onMount, setContext, getContext } from "svelte";
  import Button from "$lib/base/button/Button.svelte";
  import type { Writable } from "svelte/store";
  import type { PanelContextType } from "./types.js";

  export let title = "not set";

  /** panelId will be bound to the targeted panelSlide */
  export let panelId = crypto.randomUUID() as string;
  /** data will be bound to the targeted panelSlide */
  export let data: any | undefined = undefined;
  /** data will be bound to the targeted panelSlide */
  export let showNavigation: boolean = true;
  export const actions = {
    load: (args: any) => {},
  };

  let ref: HTMLDivElement | undefined = undefined;
  let panelSlideId = getContext<string>("PanelSlide");
  let panelerContext = getContext<PanelContextType>("Paneler");

  let currentIdx, hasNext, hasPrev;

  $: if ($panelerContext.panelSlides) {
    // console.log(Object.values($panelerContext.panelSlides));
    currentIdx = Object.keys($panelerContext.panelSlides).indexOf(panelSlideId);
    hasNext = Boolean(Object.keys($panelerContext.panelSlides)[currentIdx + 1]);
    hasPrev = Boolean(Object.keys($panelerContext.panelSlides)[currentIdx - 1]);
  }

  onMount(() => {
    // console.log(Object.keys($panelerContext.panelSlides), panelSlideId);
  });

  function prevNextPanel(page: "next" | "prev") {
    const event = custom_event(
      "panel:button:clicked",
      { panelId, page, data },
      { bubbles: true }
    );
    ref?.dispatchEvent(event);
  }
</script>

<div class="panel" bind:this={ref}>
  <div class="panelBar pos-sticky top-0 gap-small">
    <div style="flex:1">{title}</div>
    {#if hasPrev}
      {#if $$slots.panelButtonPrevious}
        <div
          on:click={() => {
            prevNextPanel("prev");
          }}>
          <slot name="panelButtonPrevious" />
        </div>
      {:else}
        <Button
          icon="chevron-left"
          naked
          on:click={() => {
            prevNextPanel("prev");
          }} />
      {/if}
    {/if}
    {#if hasNext}
      {#if $$slots.panelButtonNext}
        <div
          on:click={() => {
            prevNextPanel("next");
          }}>
          <slot name="panelButtonNext" />
        </div>
      {:else}
        <Button
          endIcon="chevron-right"
          on:click={() => {
            prevNextPanel("next");
          }}>see all</Button>
      {/if}
    {/if}
  </div>
  <div class="panelContent">
    <slot {panelId} {actions} />
  </div>
</div>

<style lang="scss">
  @import "../../styles/slotui-vars.scss";
  @import "../../styles/presets.scss";
  .panel {
    position: relative;
    margin-bottom: 2rem;

    .panelBar {
      margin-bottom: 2rem;
      display: flex;
      min-width: auto;
      align-items: center;
      padding-right: 0.5rem;

      button {
        padding: 0 0.5rem;
        border: 1px solid rgba(255, 255, 255, 0.05);
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    .panelContent {
    }
  }
</style>
