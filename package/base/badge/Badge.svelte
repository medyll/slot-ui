<script >import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let value;
export let ceiling;
export let position = {
    x: 'right',
    y: 'top'
};
const xM = {
    left: 'left:0',
    right: 'right:0',
    center: 'left:50%;transformation:translate(-50%,0)'
};
const yM = {
    top: 'top:0',
    bottom: 'bottom:0',
    center: 'top:50%;transformation:translate(0,-50%)'
};
</script>

{#if value > ceiling}
	<div  use:forwardEvents bind:this={element} class="badge" style="{xM[position.x]};{yM[position.y]}">
		<slot>{value}</slot>
	</div>
{/if}

<style >.badge {
  position: absolute;
  border-radius: 50%;
  border: 1px solid red;
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
}
.badge .hidden {
  transform: scale(0, 0);
}</style>
