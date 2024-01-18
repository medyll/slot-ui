<script lang="ts">
	/** @type {import('./$types.js').LayoutData} */
	export let data: any = {};

	$: title = data?.component + ' component details';
</script>

<svelte:head>
	<title>SlotUi {title}</title>
	<meta name="description" />
</svelte:head>

<slot />
