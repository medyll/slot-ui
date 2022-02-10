<svelte:options immutable={true}/>
<script lang="ts">
  import {fade, slide} from 'svelte/transition';

  import {sx4u} from '../../../use/sx4u/sx4u';
  import {clickAway} from '../../../use/clickAway/clickAway';
  import Panel from '/src/components/ui/panel/Panel.svelte';
  import PanelSlide from '/src/components/ui/panel/PanelSlide.svelte';

  import {openWindow, toggleStartMenu, startMenuStore} from '../../../configurations';
  import color from 'color';
  import {afterUpdate, onMount, setContext, getContext} from 'svelte';

  import IconButton from '/src/components/vendor/button/IconButton.svelte';
  import {writable} from 'svelte/store';
  import Debug from '../debug/Debug.svelte';


  const menuStore = writable<any>(null);

  let slideLeft: any;
  let slideRight: any;

  function toggleSlidePanels(event) {
    slideLeft.actions.toggle();
    slideRight.actions.toggle();

    menuStore.set({
      ...$menuStore,
      open: !$menuStore?.open
    });
    setContext('PanelSlide', menuStore);
  }

  onMount(() => {
    const unsubscribe = menuStore.subscribe(() => {

    });

    return unsubscribe;
  });
</script>

{#if $startMenuStore}
    <div class="startMenu"
         on:panel:button:clicked={toggleSlidePanels}
         transition:fade={{duration:50}}
         use:sx4u={{position:'absolute',radius:8,w:96,h:64}}
         use:clickAway={{action: toggleStartMenu }}>
        <div use:sx4u={{p:2,py:2}} style="margin-bottom:2rem">
            <input style="width: 100%;" type="search" placeholder="Recherche"/>
        </div>
        <div style="position:relative" class="startMenuContent">
            <PanelSlide open="{true}" bind:this={slideLeft}>
                <Panel title="Pinned Items">
                    <div class="gridIcon">
                        {#each [...Array(9)] as key,val}
                            <div on:click={()=>{openWindow('try '+val,{
                                component: Debug,
                                componentProps:{some:'props',someother:'deprops'}
                            })}}
                                 class="buttonPole">key
                            </div>
                        {/each}
                    </div>
                </Panel>
                <Panel title="Recent Items">
                    <div class="gridIconBis">
                        {#each [...Array(12)] as key}
                            <div class="buttonPole">here</div>
                        {/each}
                    </div>
                </Panel>
                <Panel>
                    <div class="gridOne">
                        {#each [...Array(3)] as key}
                            <div class="buttonPole">here</div>
                        {/each}
                    </div>
                </Panel>
            </PanelSlide>
            <PanelSlide open="{false}" bind:this={slideRight}>
                <Panel title="Zoom area">
                    <div class="gridIconMid">
                        {#each [...Array(130)] as key}
                            <div class="buttonPole">here</div>
                        {/each}
                    </div>
                </Panel>
            </PanelSlide>
        </div>
        <div class="bottomBar">
            <IconButton style="color:white" icon="faBed"/>
            <IconButton style="color:white" icon="faTruck"/>
            <IconButton style="color:white" icon="faSign"/>
        </div>
    </div>
{/if}
<style lang="scss">
  .startMenu {
    background-color: rgba(90, 67, 52, 0.9);
    backdrop-filter: blur(10px);
    color: white;
    display: flex;
    flex-direction: column;
    max-height: 600px;
    height: 80%;
    left: 50%;
    transform: translate(-50%, 0);
    box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
    overflow: hidden;
    z-index: 3000;
    position: absolute;
    margin-top: 1rem;

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

  .gridIcon {
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  }

  .gridIconBis {
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(15%, auto));
  }

  .gridIconMid {
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(49%, auto));
  }

  .gridOne {
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(100%, auto));
  }

  .bottomBar {
    padding: 1rem 2rem;
    box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
  }
</style>
