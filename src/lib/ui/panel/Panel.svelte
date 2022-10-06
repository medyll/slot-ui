<svelte:options accessors={true} />

<script lang="ts">
  import { custom_event } from "svelte/internal";
  import { onMount, setContext, getContext } from "svelte";
  import Button from "$lib/base/button/Button.svelte";
  import type { Writable } from "svelte/store";
  import type { PanelContextType } from "./types";

  export let title = "not set";

  /** panelId will be bound to the targeted panelSlide */
  export let panelId = crypto.randomUUID();
  /** data will be bound to the targeted panelSlide */
  export let data: any | undefined = undefined;
  /** data will be bound to the targeted panelSlide */
  export let showNavigation:boolean = true;
  export const actions = {
    load: (args: any) => {},
  };

  let ref: HTMLDivElement | undefined = undefined;
  let panelSlideId = getContext<string>("PanelSlide");
  let panelerContext = getContext<Writable<PanelContextType>>("Paneler");

  /* onMount(() => {
    if (panelerContext && ref) {
      $panelerContext[id] = ref;
    }
  }); */

  let currentIdx, hasNext, hasPrev;

  $: if ($panelerContext.panelSlides) {
    // console.log(Object.values($panelerContext.panelSlides));
    currentIdx = Object.keys($panelerContext.panelSlides).indexOf(panelSlideId);
    hasNext = Boolean(Object.keys($panelerContext.panelSlides)[currentIdx + 1]);
    hasPrev = Boolean(Object.keys($panelerContext.panelSlides)[currentIdx - 1]); 
  }

  // $: console.log(($panelerContext.panelSlides))

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
      <Button
        icon="chevron-left"
        naked
        on:click={() => {
          prevNextPanel("prev");
        }}></Button>
    {/if}
    {#if hasNext}
      <Button
        endIcon="chevron-right"
        on:click={() => {
          prevNextPanel("next");
        }}>see all</Button>
    {/if}
  </div>
  <div class="panelContent">
    <slot {panelId} {actions} />
  </div>
</div>

<style lang="scss">
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
