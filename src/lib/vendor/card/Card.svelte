<script lang="ts">
  import {createEventForwarder} from '$lib/engine/engine';
  import {get_current_component} from 'svelte/internal';
  import type {ElementProps} from '../../../types';
  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/
  /** vertical alignments of content */
  export let alignment: ElementProps['alignment']   = 'center';
  /** carried data */
  export let data: ElementProps['data'] | undefined = undefined;

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

<style lang="scss">
  @import './Card.scss';
</style>