<!--<svelte:options accessor={true} immutable={false} />-->
<script>import { createEventForwarder } from '../../engine/engine.js';
import { get_current_component } from 'svelte/internal';
import Popper from '../../ui/popper/Popper.svelte';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = undefined;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let parent = undefined;
export let component = undefined;
export let componentProps = {};
let posRef = undefined;
$: if (!parent && posRef)
    parent = posRef?.parentElement;
</script>

<span bind:this={posRef}></span>

 {#if parent}
 <Popper  style="margin-top:-1rem;padding:0.5rem"  bind:element code="tooltip" parentNode={parent}  position="TR">
	<slot><svelte:component this={component} {...componentProps} /></slot>
</Popper>
 {/if}
