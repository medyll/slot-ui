<svelte:options accessors />

<script lang="ts">
	import { null_to_empty } from 'svelte/internal';
	import { goto } from '$app/navigation';

	import { slotUiComponentList } from '$sitedata/componentList.js';
	import List from '$lib/base/list/List.svelte';
	import ListItem from '$lib/base/list/ListItem.svelte';

	function openIn(event: any) {
		goto('svelte-components/' + event?.data?.code);
	}
 
</script>

<List
	let:listItem
	density="default"
	onItemClick={openIn}
	data={slotUiComponentList.sort((a,b)=> a.name>b.name ? 1 : -1)}
	selectorField="code"
	height="100%"
>
	<ListItem data={listItem?.data}>
		<a slot="primary" href="svelte-components/{listItem?.data?.code}">
			{null_to_empty(listItem?.data?.name)}
		</a>
	</ListItem>
</List>

<style lang="scss">
	a {
		text-decoration: none;
	}
</style>
