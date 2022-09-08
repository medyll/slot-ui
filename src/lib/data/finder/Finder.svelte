<svelte:options accessors={true} />

<script lang="ts">
	import Input from '$lib/base/input/Input.svelte';
	import { dataOp } from '$lib/engine/utils.js';

	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;

	/** initial data to look in */
	export let data: any = [];
	/** default field to be used, can be * */
	export let defaultField = '*';
	/** search mode : exact or partial match*/
	export let mode: 'exact' | 'partial' = 'partial';
	/** external bind use, to read filtered data */
	export let filteredData: any[] = [];
 
	let searchString: string;

	const doFind = <T = Record<string, any>>(list: T[], kw: string, field: string) => {
		let results: any[];
		// if kw empty
		if (!kw) {
			results = data;
		} else {
			results =
				mode === 'exact' ? dataOp.filterList(list, kw, field) : dataOp.searchList(list, kw, field); // filterList(list, kw, field);
		}
		return results;
	};

	$: filteredData = doFind(data, searchString, defaultField);
	$: if (!searchString) filteredData = data;
</script>

<Input
	bind:value={searchString}
	bind:this={element}
	placeholder="find"
	type="search"
	size="auto"
	{...$$restProps}
/>
<slot name="noResultsSlot" />
<slot name="loadingSlot" />
