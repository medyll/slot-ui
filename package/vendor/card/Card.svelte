<script >import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
/** vertical alignments of content */
export let alignment = 'center';
/** carried data */
export let data = undefined;
</script>

<div bind:this={element} class="cardRoot flex-v shad-32 {className}" use:forwardEvents>
    {#if $$slots.cardHeroSlot}
        <div class="cardHero">
            <div class="innerHero">
                <slot name="cardHeroSlot"/>
            </div>
        </div>
    {/if}
    <div class="cardTitle">
        <slot name="title"/>
    </div>
    <div class="cardContent flex-main">
        <slot name="cardContentSlot">
            <slot/>
        </slot>
    </div>
    <div class="cardFooter">
        <slot name="footer"/>
    </div>
</div>

<style >.cardRoot {
  border-radius: 6px;
  background-color: var(--theme-color-background-paper);
  min-height: 120px;
  overflow: hidden; }
  .cardRoot .cardHero {
    min-height: 64px;
    text-align: center; }
    .cardRoot .cardHero .innerHero {
      border-radius: 6px;
      margin: 0.5rem;
      display: grid;
      place-items: center;
      overflow: hidden;
      min-height: 64px;
      border: 1px solid var(--theme-border_color); }
  .cardRoot .cardTitle {
    text-align: center; }
  .cardRoot .cardContent {
    flex: 1;
    padding: 0.5rem;
    background-color: var(--theme-color-background-paper);
    min-height: 96px; }
  .cardRoot .cardFooter {
    text-align: center;
    padding: 0.5rem; }
</style>