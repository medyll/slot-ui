<svelte:options accessors />

<script lang="ts">
  export let name: string;
  export let checked: boolean;
  export let disabled: boolean = false;
  export let value: any;

  let className = "";
  export { className as class };
  export let element: HTMLDivElement | null = null;
  export let style: string = "";
</script>

<label bind:this={element} for={name} class="switch {className}"  {style} >
  <slot name="label" />
  <div class="switchGutter">
    <input {checked} {name} id={name} {value} {disabled} type="checkbox" />
    <div class="switchHandle"><slot /></div>
  </div>
</label>

<style lang="scss">
  label {
    background-color: transparent;
    border: none;
    padding: 0;
  }
  .switch {
    display: inline-block;
    
    position: relative;
    border-radius: var(--radius-small);
    overflow: hidden;
    cursor: pointer;
    &.disabled {
    }

    .switchGutter {
      border: 1px solid var(--theme-color-primary-alpha);
      border-radius: var(--radius-small);
      padding: 0.25rem;
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
      }
    }
  }
</style>
