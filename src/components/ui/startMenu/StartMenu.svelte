<svelte:options immutable={true}/>
<script lang="ts">
  import {fade, slide} from 'svelte/transition';

  import {sx4u} from '../../../use/sx4u/sx4u';
  import {clickAway} from '../../../use/clickAway/clickAway';
  import SlidePanel from '/src/components/ui/slidePanel/SlidePanel.svelte';
  import Panel from '/src/components/ui/panel/panel.svelte';
  import {sx4uPreprocess} from '../../../use/sx4u/sx4uPreprocess';
  import {openWindow, toggleStartMenu, startMenuStore} from '../../../configurations';
  import color from 'color';
  import {afterUpdate, onMount, setContext, getContext} from 'svelte';

  import Icon from '/src/components/ui/icon/index.svelte';
  import {writable} from 'svelte/store';

  const menuStore = writable<any>(null);

  let slideLeft: any;
  let slideRight: any;

  function toggleSlidePanels(event) {
    slideLeft.actions.toggle();
    slideRight.actions.toggle();

    menuStore.set({
      ...$menuStore,
      open: !$menuStore?.open
    })
   setContext('SlidePanel', menuStore);
  }

  onMount(()=>{
    const unsubscribe = menuStore.subscribe(() => {

    });

    return unsubscribe
  })
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
            <SlidePanel open="{true}" bind:this={slideLeft}>
                <Panel title="Pinned Items">
                    <div class="gridIcon">
                        {#each [...Array(9)] as key,val}
                            <div on:click={()=>{openWindow('try'+val)}}
                                 class="buttonPole"
                            >key
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
            </SlidePanel>
            <SlidePanel open="{false}" bind:this={slideRight}>
                <Panel title="Zoom area">
                    <div class="gridIconMid">
                        {#each [...Array(130)] as key}
                            <div class="buttonPole">here</div>
                        {/each}
                    </div>
                </Panel>
            </SlidePanel>
        </div>
        <div class="bottomBar">
            <Icon icon="faAllergies"/>
            <Icon icon="faAllergies"/>
            <Icon icon="faAllergies"/>
        </div>
    </div>
{/if}
<style lang="scss">
  .startMenu {
    background-color: rgba(90, 67, 52, 0.95);
    backdrop-filter: blur(10px);
    color: white;
    display: flex;
    flex-direction: column;
    height: 80%;
    left: 50%;
    transform: translate(-50%, 0);
    box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
    overflow: hidden;
    z-index: 3000;
    position: absolute;

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
    padding: 2rem 2rem;
    box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
  }
</style>
