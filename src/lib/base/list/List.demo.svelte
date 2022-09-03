<script lang="ts">
	import List from './List.svelte';
	import { onMount } from 'svelte';
	import ListItem from './ListItem.svelte';
	import { null_to_empty } from 'svelte/internal';
	import Icon from '../icon/Icon.svelte';
	import IconButton from '../button/IconButton.svelte';

	let cc = 0;
	let listItems = [];
let sorterer={  sortByField: 'data.name'  };

	$: listItems = [...Array(1000)].map((val, index) => {
		return {
			primary: 'Primary title ' + index,
			secondary: 'secondary sub-title ' + index,
			icon: 'user',
			data: { id: index,name: index }
		};
	});

	$: data = [...Array(1000)].map((val, index) => {
		return {
			name: index + 'Raw data loop ' + index,
			secondary: 'secondary sub-title ' + index,
			icon: 'user'
		};
	});

	// sorterer={[{ sortByField: 'data.name' }]}
	function openIn() {}
</script>
<!-- 
<div class="flex-v gap-large">
	<h5>{'<List />'}</h5>
	<cite><p>List differs from menu by the way you call it <br /> B. Franklin, 1854</p></cite>
	<div class="flex-v gap-medium">
		<h5>Straight</h5>
		<div class="flex-h gap-small">
			<List
				density="default"
				height="350px"
				onItemClick={openIn}
				selectorField="name"
				primary="Data, slots"
				secondary="secondary text"
				let:listItem
				{data}
				dataFieldPrimary={(data) => {
					return data?.name;
				}}
				dataFieldSecondary={(data) => {
					return data?.secondary + data?.icon;
				}}
				dataFieldIcon={(data) => {
					return data?.icon;
				}}
				sorterer={[{ sortByField: 'name' }]}
			>
				<ListItem data={listItem.data} density={'default'}>
					<span slot="icon">
						{#if listItem?.icon}<Icon fontSize="tiny" icon={listItem?.icon} />{/if}
					</span>
					<span slot="primary">{null_to_empty(listItem?.primary)}</span>
					<span slot="secondary">{null_to_empty(listItem?.secondary)}</span>
				</ListItem>
			</List>
			<List
				density="default"
				height="350px"
				onItemClick={openIn}
				selectorField="name"
				primary="Data, no slots"
				secondary="secondary text"
				{data}
				dataFieldPrimary={(data) => {
					return data?.name;
				}}
				dataFieldSecondary={(data) => {
					return data?.secondary + data?.icon;
				}}
				dataFieldIcon={(data) => {
					return data?.icon;
				}}
				sorterer={[{ sortByField: 'name' }]}
			/>
			<List
				density="default"
				height="350px"
				let:listItem
				{listItems}
				onItemClick={openIn}
				selectorField="id"
				primary="ListItems, slots"
				secondary="secondary text"
				sorterer={[{ sortByField: 'name' }]}
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
				height="350px"
				{listItems}
				onItemClick={openIn}
				selectorField="id"
				primary="ListItems, no slots"
				secondary="secondary text"
			/>
		</div>
		<h5>virtualized</h5>
		<div class="flex-h gap-small" >
			<List
				density="default"
				height="350px"
				onItemClick={openIn}
				selectorField="name"
				primary="Data, slots"
				secondary="secondary text"
				virtualize={true}
				let:listItem
				{data}
				dataFieldPrimary={(data) => {
					return data?.name;
				}}
				dataFieldSecondary={(data) => {
					return data?.secondary + data?.icon;
				}}
				dataFieldIcon={(data) => {
					return data?.icon;
				}}
				
			>
				<ListItem data={listItem.data} density={'default'}>
					<span slot="icon">
						{#if listItem?.icon}<Icon fontSize="tiny" icon={listItem?.icon} />{/if}
					</span>
					<span slot="primary">{null_to_empty(listItem?.primary)}</span>
					<span slot="secondary">{null_to_empty(listItem?.secondary)}</span>
				</ListItem>
			</List>
			<List
				density="default"
				height="350px"
				onItemClick={openIn}
				selectorField="name"
				primary="Data, no slots"
				secondary="secondary text"
				{data}
				virtualize={true}

				dataFieldPrimary={(data) => {
					return data?.name;
				}}
				dataFieldSecondary={(data) => {
					return data?.secondary + data?.icon;
				}}
				dataFieldIcon={(data) => {
					return data?.icon;
				}}
		 
			/>
			<List
				density="default"
				height="350px"
				let:listItem
				{listItems}
				virtualize={true}

				onItemClick={openIn}
				selectorField="id"
				primary="ListItems, slots"
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
				height="350px"
				{listItems}
				virtualize={true}

				onItemClick={openIn}
				selectorField="id"
				primary="ListItems, no slots"
				secondary="secondary text" 
			/>
		</div>

		 
	</div>
</div> -->
