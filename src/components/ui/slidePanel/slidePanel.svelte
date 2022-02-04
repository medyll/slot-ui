<svelte:options accessors={true}
                immutable={true}/>
<script lang="ts">
  import {expoInOut, circInOut, sineIn, bounceOut, backOut, quadOut} from 'svelte/easing';
  import {afterUpdate, createEventDispatcher} from 'svelte';

  export let open: boolean;

  export const actions = {
    open  : () => {setVisible(true);},
    close : () => {setVisible(false);},
    toggle: () => {setVisible(!open);},
  };

  function setVisible(vis: boolean) {
    open = vis;
  }

  function slideOut(node, {duration, delay}) {
    return {
      duration,
      delay,
      css: t => {
        const eased = quadOut(t);
        return `transform: translate(-${50 - (eased * 50)}px,0);
        opacity: ${t}`;
      }
    };
  }

  function slideIn(node, {duration, delay}) {
    return {
      duration,
      delay,
      css: t => {
        const eased = quadOut(t);
        return `transform: translate(${250 - (eased * 250)}px,0);
        opacity: ${t}`;
      }
    };
  }

</script>

{#if open}
    <div out:slideOut="{{duration: 125}}" in:slideIn="{{duration: 150,delay:150}}" class="sidePanel">
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