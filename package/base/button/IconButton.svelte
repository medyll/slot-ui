
<script>import Icon from '../icon/Icon.svelte';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let icon;
export let iconFamily = 'fa-solid';
export let iconClassName = '';
export let style = '';
export let showShip = false;
export let iconFontSize = 'medium';
</script>
<button data-iconButton bind:this={element} use:forwardEvents on:click {style} class={className}>
	<span>
		<span class="icon">
			<Icon {icon} {iconFamily} class={iconClassName} fontSize={iconFontSize} />
		</span>
		<slot />
	</span>
	{#if showShip}
		<span class="chip" />
	{/if}
</button>

<style>button {
  padding: 8px;
  position: relative;
  background-color: transparent;
  border: 1px solid var(--css-button-radius, transparent);
  border-radius: var(--css-button-radius, 0);
}
button:hover {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}
button span {
  display: flex;
  grid-gap: 4px;
}
button .chip {
  position: absolute;
  height: 6px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50%;
  background-color: blue;
  border-radius: 16px;
  bottom: 0px;
}</style>
