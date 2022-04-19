<script >import { get_current_component } from 'svelte/internal';
import { createEventForwarder } from '../../engine/engine';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let size = 'large';
const sizes = {
    tiny: '2rem',
    small: '4rem',
    medium: '8rem',
    large: '12rem',
    full: '100%'
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

<style >.avatar {
  position: relative;
  border-radius: 20%;
  border: 1px solid var(--theme-color-border);
  display: grid;
  place-items: center;
  overflow: hidden;
}</style>
