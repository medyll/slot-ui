<script>import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
</script>
<div use:forwardEvents bind:this={element} style="position: relative" class={className}>
    <slot></slot>
</div>
