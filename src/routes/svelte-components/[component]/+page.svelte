<script lang="ts">
	import { fade } from 'svelte/transition';
	import * as ComponentList from '$lib/sitedata/componentList.js';
	import { slotuiCatalog } from '$lib/sitedata/slotuiCatalog.js';

	export let data: any = {};

	$: comp = slotuiCatalog?.[data?.component]?.name + 'DemoSvelte';

	$: Comp = ComponentList[comp];
</script>

<div out:fade|global={{ duration: 200 }} in:fade|global={{ duration: 200 }}>
	{#key comp}
		<!-- {Comp}
		{data?.component} -->
		{#if Comp}
			<Comp />
		{/if}
	{/key}
</div>
