<script lang="ts">
	import Frame from '$lib/ui/frame/Frame.svelte';
	import { goto } from '$app/navigation';

	import List from '$lib/base/list/List.svelte';
	import ListItem from '$lib/base/list/ListItem.svelte';
	import { null_to_empty } from 'svelte/internal';
	import { propsProxy } from '$lib/engine/utils';
	import { slotUiComponentList } from '$sitedata/componentList';

	const cols = propsProxy<any, typeof slotUiComponentList[0]>(
		[
			['primary', 'name'],
			['secondary', 'code']
		],
		slotUiComponentList
	);

	let activePage: any;
	let menuList = [
		{
			primary: 'button',
			secondary: 'button',
			data: { id: 'red', path: 'button' }
		},
		{
			primary: 'alert',
			secondary: 'alert',
			data: { id: 'red1', path: 'alert' }
		}
	];

	function openIn(event: any) {
		goto('/svelte-components/' + event?.data?.code);
	}
</script>

<Frame style="height:100%;overflow:auto;">
	<div   slot="frameDrawerSlot">
		{#if menuList}
			<List
				listItems={cols}
				setSelectedData={activePage?.data}
				let:listItem
				virtualize={true}
				density="default"
				onItemClick={openIn}
				selectorField="code"
				title="SlotUi"
			>
				<ListItem data={listItem?.data}>
					<span slot="primary">{null_to_empty(listItem?.primary)}</span>
					<span slot="action">{null_to_empty(listItem?.action)}</span>
				</ListItem>
			</List>
		{/if}
	</div>
	<div class="theme-bg  h-full" slot="content">
		<div class="pad-4">
			<slot />
		</div>
		<div>
			 
		</div>
	</div>
</Frame>
