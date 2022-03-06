<script >import { stickTo } from '../../uses/stickTo/stickTo';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let data = undefined;
export let options = [];
let innerRef;
let absolute = 'absolute';
let isVisible = false;
let timerClick;
const show = (visible) => (event) => {
    timerClick = setTimeout(() => {
        isVisible = visible;
    }, 250);
};
const handleClick = (visible) => (event) => {
    event.stopPropagation();
    clearTimeout(timerClick);
    setTimeout(() => {
        element.focus();
    }, 0);
};
</script>

<input use:forwardEvents bind:this={element} id="cool" on:blur={show(false)} on:focus={show(true)}/>
<ul
        class="selectRoot pos-abs shad-16"
        role="listbox"
        style="display:{isVisible ? 'block' : 'none'}"
        bind:this={innerRef}
        on:click={handleClick('clicked')}
        use:stickTo={{ parentNode: document.getElementById('cool'), position: 'B' }}
>
    {#each options as option}
        <slot {option}>123</slot>
    {/each}
</ul>

<style global >:global(.selectRoot) {
  background-color: var(--theme-overlay_color);
  height: 160px;
  width: 160px;
  border-radius: 6px; }
</style>
