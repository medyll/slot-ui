<svelte:options immutable={true}
                accessors={true}/>

<script lang="ts">
  import type {SvelteComponentDev} from 'svelte/internal';
  import {onMount} from 'svelte';

  export let code: string;
  export let component: SvelteComponentDev;
  export let componentProps: {};
  export let position: 'T' | 'TR' | 'BR' | 'B' | 'BL' = 'TR';
  export let parentNode: HTMLElement;
  ;


  export const toggle = function () {
    console.log('toggle');
  };
  export const hide   = function () {
    console.log('hide');
  };
  export const show   = function () {
    console.log('show');
  };

  let styleX = '';


  onMount(()=>{
    if (parentNode) {
      const parentPos = parentNode.getBoundingClientRect();

      console.log({parentPos})

      switch (position) {
        case 'TR':
          styleX = `bottom:${parentPos.bottom}px;left:${parentPos.left};right:auto`
          break;
      }
      console.log({parentNode,parentPos,styleX});
    }
  })

</script>

<div class="popper" style={styleX}>
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

    margin: 16px;

    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>