<script lang="ts">
	import type { UiContextType } from '$contexts/ui.context.js';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import {dataOp} from '$lib/engine/utils';
	import {slotuiCatalog} from '$lib/slotuiCatalog.js';
	import {null_to_empty} from "svelte/internal";

	let uiContext = getContext<Writable<UiContextType>>('uiContext');

	//
	$uiContext.drawerFlow = 'fixed';
	$uiContext.drawerOpen = false;

	const groupedData = dataOp.groupBy(
			Object.values(slotuiCatalog).sort((a, b) => (a.name > b.name ? 1 : -1)),
			"group"
	);
</script>

<div class="overflow-auto flex-v gap-large flex-align-middle-center">
	<div class="block h-full flex-v gap-large pad-t-10">
		<h1>slotUI</h1>
		<div class="w-full">
			<h5 class="text-full">
				SlotUi could be a component library for svelte<br />
				Based on cssFabric at css properties level<br />
				But no,<br />
				Because SlotUi is primarily a way for me to learn Svelte<br />
				Free to not be used<br />
			</h5>
		</div>
		<div class="w-full">
			<div class="flex-h gap-large">
				<div class="w-large">
					 <br />
					 <br />
					 <br />
					 <br />
					 <br />
					 <br />
					 <br />
				</div>
				<!-- <div class="border radius-small">re</div> -->
			</div>
		</div>
	</div>
	{#each Object.keys(groupedData) as group}
	<div class="block">
		<h4 class="pad-4">Slotted {null_to_empty(group)}</h4>
		<div class="flex-h flex-wrap flex-align-middle gap-large">
			{#each groupedData[group] as catalog}
				<div   class="w-large h-medium border">
					{null_to_empty(catalog?.name)}
				</div>
			{/each}
		</div>
	</div>
	{/each}
</div>

<style global lang="scss">
	.block {
		// min-height: 80vh;
		border-bottom: 1px solid #ccc;
		min-width: 80%;
		max-width: 80%;
		padding:2rem 0;
	}
</style>
