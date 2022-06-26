<script lang="ts">
	import List from './List.svelte';
	import { onMount } from 'svelte';
	import ListItem from './ListItem.svelte';
	import { null_to_empty } from 'svelte/internal';
	import Icon from '../icon/Icon.svelte';
	import IconButton from '../button/IconButton.svelte'; 

	let cc = 0;
	let menuList = [];

	$: menuList = [...Array(11)].map((val,index) => {
		return {
				primary: 'Primary title '+index,
				secondary: 'secondary sub-title '+index,
				icon: 'user',
				data: { id: index }
			};
	});

	$: data = [...Array(11)].map((val,index) => {
		return {
				name: 'Raw data loop '+index,
				secondary: 'secondary sub-title '+index,
				icon: 'user', 
			};
	});

	function openIn() {
		// ger
	}
</script>

<div class="flex-v gap-large">
	<h5>{'<List />'}</h5>
	<cite><p>List differs from menu by the way you call it <br /> B. Franklin, 1854</p></cite>
	<div class="flex-h gap-medium">
		<List
			density="default"
			height="350px"
			onItemClick={openIn}
			selectorField="name"
			primary="Raw data"
			secondary="secondary text" 
			{data}
			dataFieldPrimary={(data)=>{return data?.name}}
			dataFieldSecondary={(data)=>{return data?.secondary + data?.icon}}
			dataFieldIcon={(data)=>{return data?.icon}}
		/>
		<List
			density="default"
			height="350px"
			listItems={menuList}
			onItemClick={openIn}
			selectorField="id"
			primary="Without slots"
			secondary="secondary text" 
		/>
		<List
			density="default"
			height="350px"
			let:listItem
			listItems={menuList}
			onItemClick={openIn}
			selectorField="id"
			primary="With slots"
			secondary="secondary text" 
		>
			<ListItem data={listItem.data} density={'default'}>
				<span slot="icon"><Icon fontSize="tiny" icon={listItem?.icon} /></span>
				<span slot="primary">{null_to_empty(listItem?.primary)}</span>
				<span slot="secondary">{null_to_empty(listItem?.secondary)}</span>
				<span slot="action">{null_to_empty(listItem?.action)}</span>
			</ListItem>
		</List>
		<List
			density="default" 
			let:listItem
			listItems={menuList}
			onItemClick={openIn}
			selectorField="id"
			virtualize={true}
			showDivider={false}
			primary="Without slots" 
			secondary="secondary text" 

			style="height:350px;overflow:auto;" 
		/>
		<List
			density="default" 
			let:listItem
			listItems={menuList}
			onItemClick={openIn}
			selectorField="id"
			virtualize={true}
			primary="Virtualize and slot"	
			secondary="secondary text" 
			style="height:350px;overflow:auto;" 
		>
			<ListItem showDivider={true} data={listItem.data} density={'default'}>				
				<span slot="icon">
					{#if listItem?.icon  }<Icon fontSize="tiny" icon={listItem?.icon} />{/if}
				</span>				
				<span slot="primary">{null_to_empty(listItem?.primary)}</span>
				<span slot="secondary">{null_to_empty(listItem?.secondary)}</span>
				<span slot="action"><IconButton  showShip={true} icon="user" /></span>
			</ListItem>
		</List>
	</div>
</div>
