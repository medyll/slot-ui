<script lang="ts">
	import { slotUiComponentList } from '$sitedata/componentList';
	import { dataOp } from '$lib/engine/utils';
 

	export let component = '';
	 

	let tt: any;
	$: tt = dataOp.filterListFirst(slotUiComponentList, component, 'code');
</script>
<div>
<svelte:component this={tt?.component} />
</div>
