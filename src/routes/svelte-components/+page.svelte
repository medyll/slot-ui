<script lang="ts">
	import { slotUiComponentList } from '$sitedata/componentList';
	import { slotUiComponentPreviewList } from '$sitedata/componentPreviewList';
	import Paper from '$lib/base/paper/Paper.svelte';
	import { dataOp } from '$lib/engine/utils';
	import Divider from '$lib/base/divider/Divider.svelte';
	import {sitePaths} from "$lib/engine/site.utils.js";

	function spliceArray(arrayIn: any[], size: number) {
		let out = [];
		const parts = Math.ceil(arrayIn.length / size);

		for (var i = 0; i < arrayIn.length; i += parts) {
			out.push(arrayIn.slice(i, i + parts));
		}
		return out;
	}

	function filterList(component: string) {
		return dataOp.searchList(slotUiComponentPreviewList, component, 'code')?.[0] ?? undefined;
	}
</script>

<div class="flex-main pad-4 overflow-auto ">
	<div class="gridDemo">
		{#each spliceArray(slotUiComponentList, 3) as spliced}
			<div>
				{#each spliced as component}
					<Paper density="kind">
						{component.name}
						<Divider />
						{#if Boolean(filterList(component.code))}
							<svelte:component this={filterList(component.code).component} />
						{/if}
						<div class="flex-h flex-wrap gap-small">
							<div class="flex-main"><a   href="{sitePaths.component(component)}">{component.name} examples</a></div>
							<div class="flex-main"><a   href="{sitePaths.api(component)}">{component.name} api</a></div>
						</div>
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
