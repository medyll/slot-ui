
<script lang="ts">
  import { fade, slide } from "svelte/transition";

  import { sx4u } from "$lib/uses/sx4u/sx4u";
  import { clickAway } from "$lib/uses/clickAway/clickAway";
  import Panel from "$lib/ui/panel/Panel.svelte";
  import PanelSlide from "$lib/ui/panel/PanelSlide.svelte";
  import Popper from "$lib/ui/popper/Popper.svelte";
  import { afterUpdate, onMount, setContext, getContext } from "svelte";

  import IconButton from "$lib/base/button/IconButton.svelte";
  import { writable, type Writable } from "svelte/store";
  import Debug from "$lib/base/debug/Debug.svelte";
  import Input from "$lib/base/input/Input.svelte";
  import type { PanelContextType } from "./types.js";

  const panelerStore: PanelContextType = writable({
    activePanelId: undefined,
    activePanelSlideData: {},
    panelSlides: {},  
    panels: {},
  });
  setContext<PanelContextType>("Paneler", panelerStore);


  function toggleSlidePanels(event) {
  }
</script>

<div
  on:panel:button:clicked={toggleSlidePanels}
  transition:fade={{ duration: 50 }}>
  <slot />
</div>

<style lang="scss">
</style>
