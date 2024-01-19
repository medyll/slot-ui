<script lang="ts">
	import { createEventForwarder } from '$lib/engine/eventForwarder.js';
	import { get_current_component } from 'svelte/internal';

	/*  common slotUi exports*/
	let className: string | undefined = undefined;
	/**  className off the root component  */
	export { className as class };
	/**  css style off the root component  */
	export let style: string | undefined = undefined;
	/** element root HTMLDivElement props  */
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let item = {};
	let itemKeyList;

	$: itemKeyList = Object.keys(item);
</script>

<div {style} class={className} bind:this={element} use:forwardEvents>
	{#each itemKeyList as key, val}
		<slot itemObject={{ key: key, value: item[key] }} />
	{/each}
</div>
