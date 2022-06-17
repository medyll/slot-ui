<script lang="ts">
	import { page } from '$app/stores';
	import cssfabric2 from '@medyll/cssfabric/src/lib/styles/cssfabric.min.css';
 
 
</script>

<svelte:head>
	{#key $page.url}
		<title>slotui</title>
		<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
		<style>
			 {@html cssfabric;}
		</style>
		<link href="src/sass/main.scss" lang="scss" rel="stylesheet" />
	{/key}
</svelte:head>
<div class="h-full"> 
	<slot></slot> 
</div>
