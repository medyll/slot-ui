<svelte:options accessors />

<script lang="ts">
	import { null_to_empty } from 'svelte/internal';
	import { goto } from '$app/navigation';

	import { slotUiComponentList } from '$sitedata/componentList';
	import List from '$lib/base/list/List.svelte';
	import ListItem from '$lib/base/list/ListItem.svelte';

	function openIn(event: any) {
		goto('/svelte-components/' + event?.data?.code);
	}

    // listItems={cols}
    // setSelectedData={activePage?.data}
</script>

<List	
	let:listItem
	density="default"
	onItemClick={openIn}
    data={slotUiComponentList}
	selectorField="code" 
	height="100%"
>
	<ListItem data={listItem?.data}>
		<span slot="primary">{null_to_empty(listItem?.primary)}</span>
		<span slot="action">{null_to_empty(listItem?.action)}</span>
	</ListItem>
</List>
