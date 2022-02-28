<svelte:options accessors={true}/>
<script context="module" lang="ts">

</script>
<script lang="ts">
  import type {SvelteComponentDev} from 'svelte/internal';
  import {stickTo} from '$lib/uses/stickTo/stickTo';
  import {clickAway} from '$lib/uses/clickAway/clickAway';
  import {popperList} from './actions';

  let thisRef;

  export let code: string;
  export let component: SvelteComponentDev;
  export let componentProps: {};
  export let position: 'TL' | 'TR' | 'BR' | 'B' | 'BL' = 'TR';
  export let parentNode: HTMLElement;

  export const toggle  = function () {
    popperList[code].$destroy();
  };
  export const hide    = function () {
    console.log('hide');
  };
  export const show    = function () {
    console.log('show');
  };
  export const destroy = function () {
    popperList[code].$destroy();
  };

</script>

<div class="popper"
     bind:this={thisRef}
     use:clickAway={{action:destroy }}
     use:stickTo={{parentNode,position:'TR'}}>
    <slot>
        {#if component}
            <svelte:component this={component} {...componentProps}/>
        {/if}
    </slot>
</div>

<style lang="scss">
  .popper {
    background-color: rgba(90, 67, 52, 0.8);
    backdrop-filter: blur(10px);
    z-index: 3000;
    box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
    border-radius: 8px;
    overflow: hidden;
    position: absolute;
  }
</style>