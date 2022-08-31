<script lang="ts"> 
	import { slotUiComponentList } from '$sitedata/componentList';
	import Paper from '$lib/base/paper/Paper.svelte';

	function spliceArray(arrayIn, size) {
		let out = [];
		const parts = Math.ceil(arrayIn.length / size);

		for (var i = 0; i < arrayIn.length; i += parts) {
			out.push(arrayIn.slice(i, i + parts));
		}
		return out;
	} 
</script>

<div class="flex-main pad-4 overflow-auto ">
	<div class="gridDemo">
		{#each spliceArray(slotUiComponentList, 3) as spliced}
			{#each spliced as component}
				<Paper density="kind">{component.name}</Paper>
			{/each}
		{/each} 
	</div>
</div>

<style lang="scss">
	.gridDemo {
		width: 100%;
		display: grid;
		align-items: stretch;
		grid-gap: 32px;
		grid-template-columns: repeat(auto-fill, minmax(30%, auto));
	}
</style>
