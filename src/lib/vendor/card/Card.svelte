<script lang="ts">
  import Divider from '$lib/vendor/divider/Divider.svelte';
  import {createEventForwarder} from '$lib/engine/engine';
  import {get_current_component} from 'svelte/internal';
  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

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

<style lang="scss">
  @import './Card.scss';
</style>
