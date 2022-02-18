<script context="module" ></script>

<script >import Icon from '../../ui/icon/Icon.svelte';
export let icon;
export let style = '';
export let className = '';
export let showShip = false;
export let iconFontSize = 'medium';
</script>

<button on:click {style} class={className}>
	<span>
		<span class="icon"><Icon {icon} fontSize={iconFontSize} /></span>
		<slot />
	</span>
	{#if showShip}
		<span class="chip" />
	{/if}
</button>

<style >button {
  padding: 8px;
  position: relative;
  background-color: transparent;
  border: 1px solid transparent; }
  button:hover {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px); }
  button span {
    display: flex;
    grid-gap: 4px; }
  button .chip {
    position: absolute;
    height: 6px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50%;
    background-color: blue;
    border-radius: 16px;
    bottom: 0px; }
</style>
