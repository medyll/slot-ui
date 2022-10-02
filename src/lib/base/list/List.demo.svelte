<script lang="ts">
	import List from './List.svelte';
	import { onMount } from 'svelte';
	import ListItem from './ListItem.svelte';
	import { null_to_empty } from 'svelte/internal';
	import Icon from '../icon/Icon.svelte';
	import IconButton from '../button/IconButton.svelte';
	/* demo */
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';
	import { defaultsArgsFromProps } from '../demoer/demoer.utils.js';
	/* demo */
	let cc = 0;
	let listItems = [];
	let sorterer = { sortByField: 'data.name' };

	$: listItems = [...Array(50)].map((val, index) => {
		return {
			primary: 'Primary title ' + index,
			secondary: 'secondary sub-title ' + index,
			icon: 'file',
			data: { id: index, name: index }
		};
	});

	$: data = [...Array(50)].map((val, index) => {
		return {
			name: 'Primary text ' + index,
			secondary: 'secondary sub-title ' + index,
			icon: 'file'
		};
	});

	function openIn() {}

	let parametersSlot: any = {
		density: {
			type: 'boolean',
			values: [true, false]
		}
	};

	let componentArgsSlot = {
		primary: 'Primary text',
		secondary: 'secondary text',
		density: defaultsArgsFromProps('density', parametersSlot), 
	};

	let parametersProps: any = {
		...parametersSlot
	};

	let componentArgsProps = {
		...componentArgsSlot
	};

	let codeSlot = `
	<List
		let:listItem
		{data}
		density="default"
		on:listitem:click={(ce)=>console.log(ce.detail)}
		on:listitem:dblclick={(ce)=>console.log(ce.detail)}
		selectorField="name"
	>
		<ListItem data={listItem.data}>
			<Icon slot="icon"  icon={listItem.icon} />
			<span slot="primary">{listItem.data.name}</span>
			<span slot="secondary">{listItem.data.secondary}</span>
		</ListItem>
	</List>`;
</script>

<ComponentDemo
	component="List"
	cite="List differs from menu essentially by the way you call it <br /> B. Franklin, 1854"
>
	<div class="flex-v gap-large">
		<DemoPage title="Using slots" component="List" code={codeSlot}>
			<Demoer
				title="With props.data and slots"
				parameters={parametersSlot}
				componentArgs={componentArgsSlot}
				let:activeParams
			>
				<List
					let:listItem
					{data}
					{...activeParams}
					density="default"
					height="350px"
					on:listitem:click={(ce)=>console.log(ce.detail)}
					on:listitem:dblclick={(ce)=>console.log(ce.detail)}
					selectorField="name"
					sorterer={[{ sortByField: 'name' }]}
				>
					<ListItem  >
						<Icon slot="icon"  icon={listItem.data.icon} />
						<span slot="primary">{listItem.data.name}</span>
						<span slot="secondary">{listItem.data.secondary}</span>
					</ListItem>
				</List>
			</Demoer>
		</DemoPage>
		<div class="flex-v gap-medium">
			<h5>Straight</h5>
			<div class="flex-h gap-small">
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
		</div>
	</div>
</ComponentDemo>
