<script lang="ts">
	import Paper from '$lib/base/paper/Paper.svelte';
	import { slotUiComponentList } from '$sitedata/componentList';

	export let component: string = '';
	/** @type {import('./$types').LayoutData} */
	export let data:any = {} 

	$: title= data?.component + ' component details' 
 
</script>

<svelte:head>
	<title>SlotUi {title}</title>
	<meta name="description" />
</svelte:head>

<slot />
