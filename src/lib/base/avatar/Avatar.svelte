<script lang="ts">
  import {get_current_component} from 'svelte/internal';
  import {createEventForwarder} from '$lib/engine/engine';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let size: 'tiny' | 'small' | 'medium' | 'large' | 'full' = 'large';

  const sizes = {
    tiny  : '2rem',
    small : '4rem',
    medium: '8rem',
    large : '12rem',
    full  : '100%'
  };
</script>

<div
        bind:this={element}
        class="avatar {className}"
        style="width:{sizes[size]};height:{sizes[size]}"
        use:forwardEvents
>
    <slot name="badge"/>
    <slot/>
</div>

<style lang="scss">
  @import './Avatar.scss';
</style>
