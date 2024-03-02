<script lang="ts">
	/*  common slotUi exports*/
	let className: string | undefined = undefined;
	/**  className off the root component  */
	export { className as class };
	/**  css style off the root component  */
	export let style: string | undefined = undefined;
	/** element root HTMLDivElement props  */
	export let element: HTMLDivElement | null = null;
	/*  end slotUi exports*/

	export let item = {};
	let itemKeyList;

	$: itemKeyList = Object.keys(item);
</script>

<div {style} class={className} bind:this={element}>
	{#each itemKeyList as key, val}
		<slot itemObject={{ key: key, value: item[key] }} />
	{/each}
</div>
