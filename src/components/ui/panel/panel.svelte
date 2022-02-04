<svelte:options accessors={true}
                immutable={true}/>
<script lang="ts">
  import {custom_event} from 'svelte/internal';
  import {get_current_component} from 'svelte/internal';
  import {onMount} from 'svelte';


  export let title = 'not set';

  let ref;

  function sayHello() {
    const event = custom_event('panel:button:clicked',
      {title}, true);
    ref.dispatchEvent(event);
  }

  onMount(() => {
  });

</script>


<div class="panel" bind:this={ref}>
    <div class="panelBar">
        <div style="flex:1">{title}</div>
        <button on:click={sayHello}>go there ></button>
    </div>
    <div class="panelContent">
        <slot></slot>
    </div>
</div>

<style lang="scss">
  .panel {
    position: relative;
    margin-bottom: 2rem;

    .panelBar {
      margin-bottom: 2rem;
      display: flex;
      min-width: auto;
      align-items: center;
      padding-right: 0.5rem;

      button {
        padding: 0 0.5rem;
        border: 1px solid rgba(255, 255, 255, 0.05);
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    .panelContent {
    }
  }
</style>