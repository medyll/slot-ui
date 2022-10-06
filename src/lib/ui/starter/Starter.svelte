<svelte:options immutable={true} />

<script lang="ts">
  import { fade, slide } from "svelte/transition";

  import { sx4u } from "$lib/uses/sx4u/sx4u";
  import { clickAway } from "$lib/uses/clickAway/clickAway";
  import Paneler from "$lib/ui/panel/Paneler.svelte";
  import Panel from "$lib/ui/panel/Panel.svelte";
  import PanelSlide from "$lib/ui/panel/PanelSlide.svelte";
  import Popper from "$lib/ui/popper/Popper.svelte";
  import { toggleStarter, starterStore } from "./actions.js";

  import IconButton from "$lib/base/button/IconButton.svelte";
  import { writable } from "svelte/store";
  import Debug from "$lib/base/debug/Debug.svelte";
  import Input from "$lib/base/input/Input.svelte";

  const menuStore = writable<any>(null);

  let slideLeft: any;
  let slideRight: any;

  function toggleSlidePanels(event) {
    
  }
</script>

<div />
<Popper autoClose position={"BC"} isOpen={$starterStore}>
  <div class="startMenu" transition:fade={{ duration: 50 }}>
    <div style="margin-bottom:2rem" class="pad-2">
      <Input
        style="width: 100%;"
        size="full"
        type="search"
        placeholder="Recherche"
        value="" />
    </div>
    <div style="position:relative" class="startMenuContent">
      <Paneler>
        <PanelSlide panelSlideId="source" open={true}>
          <Panel data={{some:'data'}} title="Pinned Items">
            <div class="slotUiGrid"   style="--slotui-column-size:30%;gap:0.5rem">
              {#each [...Array(9)] as key, val}
                <div class="buttonPole">Pinned</div>
              {/each}
            </div>
          </Panel>
          <Panel title="Recent Items">
            <div class="slotUiGrid"  style="--slotui-column-size:15%;gap:0.5rem">
              {#each [...Array(12)] as key}
                <div class="buttonPole">Recent</div>
              {/each}
            </div>
          </Panel>
          <Panel title="Other Items">
            <div class="slotUiGrid"   style="--slotui-column-size:35%;gap:0.5rem"> 
              {#each [...Array(7)] as key}
                <div class="buttonPole">Others</div>
              {/each}
            </div>
          </Panel>
        </PanelSlide>
        <PanelSlide  panelSlideId="target" let:panelSlideId open={false} let:data>
          <Panel title="Zoom area">
            <div class="slotUiGrid"  style="gap:0.5rem">
              {#each [...Array(130)] as key}
                <div class="buttonPole">here {panelSlideId}</div>
              {/each}
            </div>
          </Panel>
        </PanelSlide>
        <PanelSlide let:panelSlideId open={false}>
          <Panel title="Zoom area">
            on more
          </Panel>
        </PanelSlide>
      </Paneler>
    </div>
    <div class="bottomBar flex-h flex-align-right pad-tb-1 pad-ii-4">
      <IconButton style="color:white" icon="mdi:quit" />
    </div>
  </div>
</Popper>

<style lang="scss">
  .startMenu {
    // background-color: rgba(90, 67, 52, 0.9);
    // color: white;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 530px;
    box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
    overflow: hidden;
    z-index: 3000;

    .startMenuContent {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  .buttonPole {
    border-radius: 4px;
    border: 1px solid rgba(208, 191, 151, 0.3);
    padding: 0.5rem;
  }

  .slotUiGrid {
    display: grid;
    grid-gap: 0.2rem;
    grid-template-columns: repeat(auto-fit, minmax(var(--slotui-column-size),1fr ));
  }
 

  .bottomBar {
    box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
  }
</style>
