<svelte:options accessors={true}
                immutable={true}/>
<script >import { custom_event } from 'svelte/internal';
import { onMount } from 'svelte';
export let title = 'not set';
let ref;
function sayHello() {
    const event = custom_event('panel:button:clicked', { title }, true);
    ref.dispatchEvent(event);
}
</script>


<div class="panel" bind:this={ref}>
    <div class="panelBar">
        <div style="flex:1">{title}</div>
        <button on:click={sayHello}>go there or back ? ></button>
    </div>
    <div class="panelContent">
        <slot></slot>
    </div>
</div>

<style >.panel {
  position: relative;
  margin-bottom: 2rem;
}
.panel .panelBar {
  margin-bottom: 2rem;
  display: flex;
  min-width: auto;
  align-items: center;
  padding-right: 0.5rem;
}
.panel .panelBar button {
  padding: 0 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(255, 255, 255, 0.1);
}</style>