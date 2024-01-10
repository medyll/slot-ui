<script lang="ts">
	import { fade } from 'svelte/transition';
	import { slotUiComponentList } from '$lib/sitedata/componentList.js';
	import { dataOp } from '$lib/engine/utils.js';
	import { browser } from '$app/environment';

	export let data: any = {};

	let tt: any;
	$: tt = dataOp.filterListFirst(slotUiComponentList, data?.component, 'code');

	$: console.log(tt);
</script>

<div out:fade|global={{ duration: 200 }} in:fade|global={{ duration: 200 }}>
	{#if browser && tt?.component}<svelte:component this={tt?.component} />{/if}
</div>
