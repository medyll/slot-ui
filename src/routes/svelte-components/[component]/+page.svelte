<script lang="ts">
	import { slotUiComponentList } from '$sitedata/componentList';
	import { dataOp } from '$lib/engine/utils'; 
 
	export let data:any = {} 

	let tt: any;
	$: tt = dataOp.filterListFirst(slotUiComponentList, data?.component, 'code');
</script>
<div>
<svelte:component this={tt?.component} />
</div>
