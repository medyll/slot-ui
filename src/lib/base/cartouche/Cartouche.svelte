<script lang="ts">
  import {slide} from 'svelte/transition';
  import Icon from '../icon/Icon.svelte';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';
  import {elem} from '../../engine/elem';
  import type {SvelteComponent} from 'svelte';

  /** @restProps {button | a} */

  /* common slotUi exports*/
  let className = '';
  export {className as class};
  export let style: string                  = '';
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /* end slotUi exports */

  export let label: string;
  export let icon: string;
  /** can be set as a prop or as a className */
  export let stacked: boolean = false;
  export let component: SvelteComponent | undefined = undefined;
  export let componentProps: Record<string, any> = {};

  export let isOpen: boolean = false;
  /** use to control cartouche */
  export const actions = {
    open  : () => {
      isOpen = true;
    },
    toggle: () => {
      isOpen = !isOpen;
    }
  };

  let chevronIcon: 'faChevronDown' | 'faChevronUp';
  $: chevronIcon = !isOpen ? 'faChevronDown' : 'faChevronUp';

  $: if (element) console.log(elem(element).next());
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

<style lang="scss">
  @import "Cartouche";

  .cartoucheHolder {
    &.stacked {
      border-radius: 0;
      &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
      &:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
</style>
