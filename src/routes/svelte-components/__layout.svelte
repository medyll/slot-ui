<script lang="ts">
	import Frame from '$lib/ui/frame/Frame.svelte';
	import { goto } from '$app/navigation';
	import Divider from '$lib/base/divider/Divider.svelte';
	import ButtonDemo from '$lib/base/button/Button.demo.svelte';
	import Menu from '$lib/ui/menu/Menu.svelte';
	import Avatar from '$lib/base/avatar/Avatar.svelte';
	import AlertDemo from '$lib/base/alert/AlertDemo.svelte';
	import TabsDemo from '$lib/base/tabs/Tabs.demo.svelte';
	import CartoucheDemo from '$lib/base/cartouche/Cartouche.demo.svelte';
	import BoxDemo from '$lib/base/box/Box.demo.svelte';
	import Select from '$lib/base/select/Select.svelte';
	import Paper from '$lib/base/paper/Paper.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';
	import CardDemo from '$lib/base/card/Card.demo.svelte';
	import Options from '$lib/base/select/Options.svelte';
	import TreeDemo from '$lib/base/tree/Tree.demo.svelte';
	import ListDemo from '$lib/base/list/List.demo.svelte';
	import InputDemo from '$lib/base/input/Input.demo.svelte';
	import DataListDemo from '$lib/base/datalist/DataList.demo.svelte';

	import GrouperDemo from '$lib/data/grouper/Grouper.demo.svelte';
	import List from '$lib/base/list/List.svelte';
	import ListItem from '$lib/base/list/ListItem.svelte';
	import { null_to_empty } from 'svelte/internal';
	import { propsProxy } from '$lib/engine/utils';
	import  { slotUiComponentList } from '/src/sitedata/componentList';

	const cols = propsProxy<any, typeof slotUiComponentList[0]>(
		[
			['primary', 'name'],
			['secondary', 'code']
		],
		slotUiComponentList
	);

	let activePage:any;
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
		goto('/svelte-components/' + event.code);
	}
</script>

<Frame class="">
	<div class="theme-bg-paper overflow-hidden  h-full" slot="frameDrawerSlot"> 
		{#if menuList}
			<List
				listItems={cols} 
				setSelectedData={activePage?.data}
				let:listItem 
				noVirtualize={true} 
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
	<div class="theme-bg  h-full" slot="contentFrameSlot">
		<slot r="red" />
	</div>
</Frame>
