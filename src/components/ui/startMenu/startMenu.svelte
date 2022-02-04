<svelte:options immutable={true}/>
<script lang="ts">
  import {fade, slide} from 'svelte/transition';

  import {sx4u} from '../../../use/sx4u/sx4u';
  import {clickAway} from '../../../use/clickAway/clickAway';
  import SlidePanel from '/src/components/ui/slidePanel/slidePanel.svelte';
  import Panel from '/src/components/ui/panel/panel.svelte';
  import {sx4uPreprocess} from '../../../use/sx4u/sx4uPreprocess';
  import {openWindow, toggleStartMenu, startMenuStore} from '../../../configurations';
  import color from 'color';
  import {afterUpdate, onMount} from 'svelte';

  let slideLeft: any;
  let slideRight: any;

  function toggleSlidePanels(event) {
    slideLeft.actions.toggle();
    slideRight.actions.toggle();
  }

  afterUpdate(() => {
    console.log('update startMenu');
  });


  onMount(() => {
    console.log('mounted');
   /* document.addEventListener('panel:button:clicked', (event) => {
      // alert('red');
      toggleSlidePanels(event)
    }, true);*/
  });
</script>

{#if $startMenuStore}
    <div class="startMenu"
         on:panel:button:clicked={toggleSlidePanels}
         transition:fade={{duration:50}}
         use:sx4u={{position:'absolute',radius:8,w:96,h:64}}
         use:clickAway={{action: toggleStartMenu }}>
        <div use:sx4u={{p:2,py:2}} style="margin-bottom:2rem">
            <input style="width: 100%;text-align: right" type="search" value="recherche"/>
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
                <Panel title="Recent Items" >
                    <div class="gridIconBis">
                        {#each [...Array(12)] as key}
                            <div class="buttonPole">here</div>
                        {/each}
                    </div>
                </Panel>
                <Panel >
                    <div class="gridOne">
                        {#each [...Array(3)] as key}
                            <div class="buttonPole">here</div>
                        {/each}
                    </div>
                </Panel>
            </SlidePanel>
            <SlidePanel open="{false}" bind:this={slideRight}>
                <Panel title="Zoom area" >
                    <div class="gridIconMid">
                        {#each [...Array(130)] as key}
                            <div class="buttonPole">here</div>
                        {/each}
                    </div>
                </Panel>
            </SlidePanel>
        </div>
        <div class="bottomBar">
            hereddd
        </div>
    </div>
{/if}
<style lang="scss">
  .startMenu {
    background-color: rgb(90, 67, 52);
    color: white;
    display: flex;
    flex-direction: column;
    height: 80%;
    left: 50%;
    transform: translate(-50%, 0);
    box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
    overflow: hidden;

    input {
      border: 1px solid rgb(208, 191, 151);
      border-bottom: 2px solid rgb(208, 191, 151);
      border-radius: 4px;
      padding: 0.5rem;
      box-shadow: inset 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
      background-color: rgb(48, 41, 36);
      color: white
    }

    .startMenuContent {
      flex: 1;
      overflow: auto;
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
