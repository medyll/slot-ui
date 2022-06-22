<script lang="ts">
	import { createEventForwarder } from '$lib/engine/eventForwarder';
	import TopBar from '$lib/ui/topBar/TopBar.svelte';
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
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

 
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
 
</script>

<div bind:this={element} use:forwardEvents id={columnId} class="column {className}"  {...$$restProps}>
	<slot name="topSlot" />
	<div class="content"><slot /></div>
	<slot name="bottomSLot" />
</div>

<style lang="scss">
	.column {
		height:100%;
		display:flex;
		flex: 1;
		position: relative;
		flex-direction: column; 
		.content {
			flex: 1;
			overflow:hidden;
		}

		.commandBar {
			position: sticky;
			top: 0;
		}
		border-right: 1px solid var(--slotui-column-bordercolor,var(--theme-color-foreground-alpha-high));
		box-shadow: var(--box-shad-1);
	}
</style>
