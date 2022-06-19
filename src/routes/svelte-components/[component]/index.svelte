<script lang="ts">
	import { dataOp } from '$lib/engine/utils';
	import { slotUiComponentList } from '/src/sitedata/componantList';

	export let component = '';

	let tt: any;
	$: tt = dataOp.filterListFirst(slotUiComponentList, component, 'code');
</script>

<svelte:component this={tt?.component} />
