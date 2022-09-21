<!--<svelte:options accessor={true} immutable={false} />-->
<script lang="ts">
	import { createEventForwarder } from '../../engine/engine.js';
	import { get_current_component } from 'svelte/internal';
	import Popper from '$lib/ui/popper/Popper.svelte';
	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | undefined = undefined;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let parent: HTMLElement | undefined = undefined;

	export let component: any | undefined = undefined;
	export let componentProps: Record<string, any> = {};

	let posRef: HTMLElement | undefined = undefined

	$: if (!parent && posRef) parent = posRef?.parentElement;

</script>

<span bind:this={posRef}></span>

 {#if parent}
 <Popper  style="margin-top:-1rem;padding:0.5rem"  bind:element code="tooltip" parentNode={parent}  position="TR">
	<slot><svelte:component this={component} {...componentProps} /></slot>
</Popper>
 {/if}
