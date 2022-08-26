<script>import Divider from '../divider/Divider.svelte';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let density = 'default';
</script>

<div use:forwardEvents bind:this={element} class="bottomBar density-{density} {className}">
	<slot>bottom bar</slot>
</div>
 
<style>.bottomBar.density-tight {
  padding: 0.5rem 0;
}

.bottomBar.density-default {
  padding: 1rem 0;
}

.bottomBar.density-kind {
  padding: 1.5rem 0;
}</style>
