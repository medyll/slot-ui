<script lang="ts">
	import { slotUiComponentList } from '$sitedata/componentList';
	import { slotUiComponentPreviewList } from '$sitedata/componentPreviewList';
	import Paper from '$lib/base/paper/Paper.svelte';
	import { dataOp } from '$lib/engine/utils';

	function spliceArray(arrayIn, size) {
		let out = [];
		const parts = Math.ceil(arrayIn.length / size);

		for (var i = 0; i < arrayIn.length; i += parts) {
			out.push(arrayIn.slice(i, i + parts));
		}
		return out;
	}

	function filterList(component: string) {
		console.log(component,dataOp.searchList(slotUiComponentPreviewList, component, 'code'))

		return dataOp.searchList(slotUiComponentPreviewList, component, 'code')?.[0] ?? undefined;
	}
 
</script>

<div class="flex-main pad-4 overflow-auto ">
	<div class="gridDemo">
		{#each spliceArray(slotUiComponentList, 3) as spliced}
		<div>
			{#each spliced as component} 					 
				<Paper density="kind">
					{component.code}
					{#if Boolean(filterList(component.code))} 
						<svelte:component this={filterList(component.code).component} />  
						<!-- {@debug red} -->
					{/if}
				</Paper>
			{/each}
		</div>
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
