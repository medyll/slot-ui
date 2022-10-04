<svelte:options accessors />

<script>export let name;
export let checked = false;
export let disabled = false;
let className = "";
export { className as class };
export let element = null;
export let style = "";
let hiddenRef;
</script>

<input bind:this={hiddenRef} {name} id={name} value={checked} type="hidden" />
<label bind:this={element} for="_{name}" class="switch {className}"  {style} >
  <slot name="label" />
  <div class="switchGutter">
    <input on:change={(event)=>{hiddenRef.value=event.currentTarget.checked}} id="_{name}" {checked} {disabled} type="checkbox" />
    <div class="switchHandle"><slot /></div>
  </div>
</label>

<style>label {
  background-color: transparent;
  border: none;
  padding: 0;
  min-width: 64px;
}

.switch {
  display: inline-block;
  position: relative;
  border-radius: var(--radius-small);
  overflow: hidden;
  cursor: pointer;
}
.switch .switchGutter {
  border: 1px solid var(--theme-color-primary-alpha);
  border-radius: var(--radius-small);
  padding: 0.25rem;
  background-color: var(--theme-color-paper);
}
.switch .switchGutter input {
  position: absolute;
  width: 0;
  height: 0;
  top: -50px;
  left: -50px;
}
.switch .switchGutter input:checked + .switchHandle {
  left: calc(100% - 16px);
  background-color: var(--theme-color-primary);
}
.switch .switchGutter input + .switchHandle {
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: var(--radius-tiny);
  left: 0;
  transition: all 0.25s;
  background-color: var(--theme-color-background);
  border: 1px solid var(--theme-color-secondary-alpha);
}</style>
