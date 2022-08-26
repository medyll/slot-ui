<svelte:options accessors={true}
                immutable={true}/>
<script lang="ts">
  import {transitions} from '../../effects/transitions';
  import {onMount, setContext} from 'svelte';

  const {slideOut, slideIn, slideInRtl, slideOutRt} = transitions;

  export let open: boolean;

  let inFunc:()=>void;

  export const actions = {
    open  : () => {setVisible(true);},
    close : () => {setVisible(false);},
    toggle: () => {setVisible(!open);},
  };

  function setVisible(vis: boolean) {
    open = vis;
  }


</script>

{#if open}
    <div out:slideOutRt="{{duration: 125}}"
         in:slideInRtl="{{duration: 150,delay:150}}"
         class="sidePanel">
        <slot></slot>
    </div>
{/if}

<style lang="scss">
  .sidePanel {
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 1rem 2rem;
    width: 100%;
  }
</style>