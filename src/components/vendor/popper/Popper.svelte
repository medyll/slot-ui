<svelte:options immutable={true}
                accessors={true}/>
<script lang="ts">
  import {openPopper} from './actions';
  import type {SvelteComponentDev} from 'svelte/internal';

  export let code: string;
  export let component: SvelteComponentDev;
  export let componentProps: {};

  export const toggle = function () {
    console.log('toggle');
  };
  export const hide   = function () {
    console.log('hide');
  };
  export const show   = function () {
    console.log('show');
  };

</script>

<div class="popper">
    <slot>
        {#if component}
            <svelte:component this={component} {...componentProps}/>
        {/if}
    </slot>
</div>

<style lang="scss" >
  .popper {
    background-color: rgba(90, 67, 52, 0.8);
    backdrop-filter: blur(10px);
    z-index: 3000;
    box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
    border-radius: 8px;

    margin: 16px;

    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>