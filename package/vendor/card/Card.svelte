<script >import Divider from '../divider/Divider.svelte';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let data = undefined;
</script>

<div use:forwardEvents bind:this={element} class="cardRoot flex-v shad-32 {className}">
    <div class="cardHero">
        <slot name="cardHeroSlot"/>
    </div>
    <Divider />
    <div class="cardTitle">
        <slot name="title"/>
    </div>
    <div class="cardContent flex-main">
        <slot name="cardContentSlot">
            <slot/>
        </slot>
    </div>
    <Divider extension="full"/>
    <div class="cardFooter">
        <slot name="footer"/>
    </div>
</div>

<style >.cardRoot {
  border-radius: 6px;
  background-color: var(--theme-color-background-paper);
  min-height: 120px;
  overflow: hidden; }
  .cardRoot .cardTitle {
    text-align: center; }
  .cardRoot .cardContent {
    flex: 1;
    padding: 0.5rem;
    background-color: var(--theme-color-background-paper);
    min-height: 96px; }
  .cardRoot .cardHero {
    min-height: 48px;
    background-color: var(--theme-color-background-paper); }
</style>
