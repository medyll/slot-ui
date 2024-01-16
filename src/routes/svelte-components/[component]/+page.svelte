<script lang="ts">
	import { fade } from 'svelte/transition';
	import * as ComponentList from '$lib/sitedata/componentList.js';
	import { dataOp } from '$lib/engine/utils.js';

	export let data: any = {};

	/* let tt: any;
	$: tt = dataOp.filterListFirst(slotUiComponentList, data?.component, 'code');

	$: console.log(tt); */
	$: comp = (data?.component).charAt(0).toUpperCase() + (data?.component).slice(1) + 'DemoSvelte';

	$: Comp = ComponentList[comp];
	$: console.log(comp);
</script>

<div out:fade|global={{ duration: 200 }} in:fade|global={{ duration: 200 }}>
	{#key comp}
		<Comp />
	{/key}
</div>
