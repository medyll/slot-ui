<script lang="ts">
	import { fade } from 'svelte/transition';
	import * as ComponentList from '$sitedata/componentList.js';
	import { slotuiCatalog } from '$sitedata/slotuiCatalog.js';
	import ComponentDemo from '$components/ComponentDemo.svelte';
	export let data: any = {};

	$: comp = (slotuiCatalog as any)?.[data?.component]?.name + 'DemoSvelte';

	$: Comp = (ComponentList as any)[comp];
</script>

<div out:fade|global={{ duration: 200 }} in:fade|global={{ duration: 200 }}>
	{#key comp}
		{#if Comp}
			<Comp />
		{/if}
		<ComponentDemo component={data.component} />
		<!-- {comp} -->
		<!-- {data?.component} -->
	{/key}
</div>
