<script lang="ts">
	import TopBar from '$lib/ui/topBar/TopBar.svelte';
	import { getContext } from 'svelte';
	import type { ColumnerStoreType } from './types';
	let columner = getContext<ColumnerStoreType>('columner');

	export let columnId = crypto.randomUUID();

	if (!$columner[columnId]) {
		$columner[columnId] = {
			columnId: Object.keys($columner).length,
			state: 'default',
			defaultStyle: {}
		};
	}

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/
</script>

<div id={columnId} class="column">
	<TopBar title="commndBar">commndBar</TopBar>
	<slot />
	<div>bottom</div>
</div>

<style lang="scss">
	.column {
		flex: 1;
		position: relative;
		.commandBar {
			position: sticky;
			top: 0;
		}
	}
</style>
