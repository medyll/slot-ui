<script >import { slide } from 'svelte/transition';
import Icon from '../icon/Icon.svelte';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
import { elem } from '../../engine/elem';
/** @restProps {button | a} */
/* common slotUi exports*/
let className = '';
export { className as class };
export let style = '';
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/* end slotUi exports */
export let label;
export let icon;
/** can be set as a prop or as a className */
export let stacked = false;
export let component = undefined;
export let componentProps = {};
export let isOpen = false;
/** use to control cartouche */
export const actions = {
    open: () => {
        isOpen = true;
    },
    toggle: () => {
        isOpen = !isOpen;
    }
};
let chevronIcon;
$: chevronIcon = !isOpen ? 'faChevronDown' : 'faChevronUp';
// $: if (element) console.log(elem(element).next());
</script>

<div class:stacked bind:this={element} class="cartoucheHolder {className}" style="{style}" use:forwardEvents>
    <div class="cartouche pad-tb-2" on:click={actions.toggle}>
        {#if icon || $$slots.cartoucheIconSlot}
            <div class="icon pad-l-1"><slot name="cartoucheIconSlot">{icon}</slot></div>
        {/if}
        <div class="cartoucheLabel  pad-l-1">
            {#if label || $$slots.cartoucheLabelSlot}<slot name="cartoucheLabelSlot">{label}</slot>

        {/if}
        </div>
        <div class="cartoucheAction">
            <slot name="cartoucheActionSlot"></slot>
        </div>
        <div class="chevron">
            <a>
                <Icon fontSize="tiny" icon={chevronIcon}/>
            </a>
        </div>
    </div>
    {#if isOpen}
        <div class="cartoucheContent" transition:slide>
            {#if component}
                <svelte:component this={component} {...componentProps}/>
            {/if}
            <slot/>
        </div>
    {/if}
</div>

<style >.cartoucheHolder {
  border-radius: 6px;
  overflow: hidden;
}
.cartoucheHolder .cartoucheContent {
  padding: 0.5rem;
  overflow: hidden;
  background-color: var(--theme-color-background);
}

.cartouche {
  display: flex;
  grid-gap: 8px;
  background-color: var(--theme-overlay_color);
  align-items: center;
}
.cartouche:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
.cartouche .cartoucheLabel {
  flex: 1;
}
.cartouche .chevron {
  padding: 0 1rem;
  cursor: pointer;
}

.cartoucheHolder.stacked {
  border-radius: 0;
}
.cartoucheHolder.stacked:first-child {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.cartoucheHolder.stacked:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}</style>
