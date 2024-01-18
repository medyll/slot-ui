<script lang="ts">
	import { fade } from 'svelte/transition';
	import * as ComponentList from '$sitedata/componentList.js';
	import { slotuiCatalog } from '$lib/slotuiCatalog.js';

	export let data: any = {};

	$: comp = (slotuiCatalog as any)?.[data?.component]?.name + 'DemoSvelte';

	$: Comp = (ComponentList as any)[comp];
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
