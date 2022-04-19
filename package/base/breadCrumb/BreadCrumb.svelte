<script >import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export const breadList = [];
</script>

<nav use:forwardEvents bind:this={element} class="breadCrumb {className}">
	<ul>
		<li class="bread">
			<slot />
		</li>
	</ul>
</nav>

<style >.breadCrumb ul {
  display: flex;
}</style>
