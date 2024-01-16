<script lang="ts">
	import { fade } from 'svelte/transition';
	import * as ComponentList from '$lib/sitedata/componentList.js';

	export let data: any = {};

	$: comp = (data?.component).charAt(0).toUpperCase() + (data?.component).slice(1) + 'DemoSvelte';

	$: Comp = ComponentList[comp];
</script>

<div out:fade|global={{ duration: 200 }} in:fade|global={{ duration: 200 }}>
	{#key comp}
		<Comp />
	{/key}
</div>
