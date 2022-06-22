<script lang="ts">
	import Sorter from './Sorter.svelte';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	/** array of Sorter.props */
	export let fields: {
		sortByField: string;
		sortByTitleField?: string;
		sortByOrder?: 'asc' | 'desc' | 'none';
	}[] = [];
	/** data to sort */
	export let data: Record<string, any>[];
	/** binding : final sorted data as raw object  */
	export let sortedData: any[] = [];
	/** binding, used when multiple buttons*/
	export let activeCommonSortField = '';
</script>

<div bind:this={element} class="flex-h gap-small {className}">
	{#each fields as field}
		<Sorter {...field} bind:sortedData bind:activeCommonSortField {data} />
	{/each}
</div>
