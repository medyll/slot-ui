<svelte:options accessors />


<script lang="ts">
  import { createEventForwarder } from "$lib/engine/engine.js";
  import {
    get_current_component,
    get_slot_changes,
    null_to_empty,
  } from "svelte/internal";

  export let name: string;
  export let checked: boolean = false;
  export let disabled: boolean = false;

  let className = "";
  export { className as class };
  export let element: HTMLElement | null = null;
  export let style: string = "";

  let hiddenRef;

  const forwardEvents = createEventForwarder(get_current_component());

  /* const event = custom_event(
      "datalist:sort:clicked",
      { field },
      { bubbles: true }
    );
    if (element) element.dispatchEvent(event); */
</script>

<input bind:this={hiddenRef} {name} id={name} value={checked} type="hidden" />
<label bind:this={element} for="_{name}" class="switch {className}" {style}>
  <slot name="label" />
  <div class="switchGutter">
    <input
      use:forwardEvents
      on:change={(event) => {
        hiddenRef.value = event.currentTarget.checked;
      }}
      id="_{name}"
      {checked}
      {disabled}
      type="checkbox" />
    <div class="switchHandle"><slot /></div>
  </div>
</label>

<style lang="scss">
  @import "../../styles/slotui-vars.scss";
  @import "../../styles/presets.scss";
  label {
    background-color: transparent;
    border: none;
    padding: 0;
    min-width: 38px;
  }
  .switch {
    display: inline-block;

    position: relative;
    border-radius: var(--radius-tiny);
    overflow: hidden;
    cursor: pointer;
    &.disabled {
    }

    :hover {
      .switchHandle {
        background-color: var(--theme-color-secondary) !important;
      }
    }

    .switchGutter {
      border: 1px solid var(--theme-color-primary-alpha);
      border-radius: var(--radius-tiny);
      padding: 0.20rem;
      background-color: var(--theme-color-paper);
      input {
        position: absolute;
        width: 0;
        height: 0;
        top: -50px;
        left: -50px;
      }
      input:checked + .switchHandle {
        left: calc(100% - 16px);
        background-color: var(--theme-color-primary);
        // background-color: var(--theme-color-primary);
        // transform: translateX(100%);
      }
      input + .switchHandle {
        position: relative;
        display: block;
        // top: 50%;
        width: 16px;
        height: 16px;
        background: white;
        border-radius: var(--radius-tiny);
        // transform: translateX(0%);
        left: 0;
        transition: all 0.25s;
        background-color: var(--theme-color-background);
        border: 1px solid var(--theme-color-secondary-alpha);
        box-shadow: var(--box-shad-1);
      }
    }
  }
</style>
