<script>import Icon from '../icon/Icon.svelte';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
import { popper } from '../../ui/popper/usePopper';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let icon;
export let iconFamily = 'fa-solid';
export let iconClassName = '';
export let iconFontSize = 'small';
export let style = '';
export let showShip = false;
export let usePopperOpt = { disabled: true };
//$: if(!usePopperOpt.disabled) console.log({popperOpt: usePopperOpt})
// 
// $: if(Boolean(usePopperOpt.parentNode)) console.log('==>',usePopperOpt,Boolean(usePopperOpt.parentNode))
$: if (element)
    usePopperOpt.parentNode = element;
</script>

{#key element?.toString() }
{#if !usePopperOpt.disabled}
<!-- {@debug usePopperOpt} -->
{/if}

<button
	use:popper={usePopperOpt}
	data-iconButton
	bind:this={element}
	use:forwardEvents
	on:click
	{style}
	class={className}
>
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
{/key}
<style>button {
  position: relative;
  color: var(--theme-color-text);
  border: 1px solid var(--css-button-border-color, var(--theme-color-border));
  padding: var(--box-density-preset-small) 0.75rem;
  border-radius: var(--css-button-radius, 4px);
  background-color: rgba(255, 255, 255, 0.1);
}
button:hover {
  background-color: var(--color-gray-800);
  backdrop-filter: blur(10px);
}
button span {
  display: flex;
  grid-gap: 4px;
}
button .chip {
  position: absolute;
  height: 2px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50%;
  background-color: var(--css-button-chip-color, var(--theme-color-primary));
  border-radius: 16px;
  bottom: 2px;
}</style>
