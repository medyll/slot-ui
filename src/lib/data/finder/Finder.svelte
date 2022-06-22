<svelte:options accessors={true} />

<script lang="ts">
import Input from '$lib/base/input/Input.svelte';
	import { dataOp } from '$lib/engine/utils';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;

	export let data: any = [];
	export let defaultField = 'name';

	export let filteredData:any[] = [];

	let searchString: string;

	const doFind =
		<T = Record<string, any>>(list: T[], kw: string, field: string) =>
		(event) => {
			// if kw empty
			if (!kw) {
				filteredData = data;
			} else {
				filteredData = dataOp.filterList(list, kw, field); // filterList(list, kw, field);
			}
			// else
		};

	$: if (!searchString) filteredData = data;
</script>

<Input
	bind:value={searchString}
	bind:this={element}
	on:keydown={doFind(data, this.value, defaultField)}
	placeholder="find"
	type="search"
	size="auto" 
	{...$$restProps}
/>
<slot name="noResultsSlot" />
<slot name="loadingSlot" />
