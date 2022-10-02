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
	import DemoerCode from '$lib/base/demoer/DemoerCode.svelte';
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

	let multiple = {
		primary: {
			'no title': {},
			title: {primary:'primary text',secondary:'secondary text'},
		}
	};

	let parametersSlot: any = {
		density: {
			type: 'boolean',
			values: [true, false]
		}
	};

	let componentArgsSlot = { 
		density: defaultsArgsFromProps('density', parametersSlot)
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
	style="width:190px">
		<ListItem>
			<Icon slot="icon"  icon={listItem.icon} />
			<span slot="primary">{listItem.data.name}</span>
			<span slot="secondary">{listItem.data.secondary}</span>
		</ListItem>
</List>`;
	let codeSlot2 = `
<List
	let:listItem
	{listItems}
	selectorField="primary"
	primary="Primary title"
	secondary="Secondary text"
	style="width:190px">
		<ListItem>
			<Icon  slot="icon" icon={listItem.icon} />
			<span slot="primary">{listItem.primary}</span>
			<span slot="secondary">{listItem.secondary}</span>
			<span slot="action">{null_to_empty(listItem?.action)}</span>
		</ListItem>
</List>`;

	let code3 = `
<List
	selectorField="name"
	{data}
	dataFieldPrimary={(data) => data?.name}
	dataFieldSecondary={(data) => data?.secondary + data?.icon}
	dataFieldIcon={(data) => data?.icon}
	sorterer={[{ sortByField: 'name' }]}
	style="width:190px" />`;
	let code4 = `
<List
	{listItems}
	on:listitem:click={(ce)=>console.log(ce.detail)}
	on:listitem:dblclick={(ce)=>console.log(ce.detail)}
	selectorField="id"
	primary="ListItems, no slots"
	secondary="secondary text"
	style="width:190px" />`;
</script>

<ComponentDemo
	component="List"
	cite="List differs from menu essentially by the way you call it <br /> B. Franklin, 1854"
>
	<div class="flex-v gap-large">
		<DemoPage title="Using slots" component="List">
			<div slot="code">
				<DemoerCode title="Using a simple dataset" code={codeSlot} />
				<DemoerCode title="Using a props.listItems declaration list" code={codeSlot2} />
			</div>
			<Demoer
				title="With props.data and slots"
				parameters={parametersSlot}
				componentArgs={componentArgsSlot}
				{multiple}
				let:activeParams
			>
				<List
					let:listItem
					{data}
					{...activeParams}
					density="default"
					height="350px"
					on:listitem:click={(ce) => console.log(ce.detail)}
					on:listitem:dblclick={(ce) => console.log(ce.detail)}
					selectorField="name" 
					sorterer={[{ sortByField: 'name' }]}
					style="width:240px"
					class="shad-3 radius-small overflow-hidden"
				>
					<ListItem data={listItem.data}>
						<Icon slot="icon" icon={listItem.data.icon} />
						<span slot="primary">{listItem.data.name}</span>
						<span slot="secondary">{listItem.data.secondary}</span>
					</ListItem>
				</List>
			</Demoer>
		</DemoPage>
		<!-- <DemoPage title="Using props" component="List">
			<div slot="code">
				<DemoerCode title="Using a simple dataset" code={code3} />
				<DemoerCode title="Using a props.listItems declaration list" code={code4} />
			</div>
			<Demoer
				title="With props.data and slots"
				parameters={parametersSlot}
				componentArgs={componentArgsSlot}
				let:activeParams
			>
				<List
					density="default"
					height="350px"
					selectorField="name" 
					{data}
					dataFieldPrimary={(data) => data?.name}
					dataFieldSecondary={(data) => data?.secondary + data?.icon}
					dataFieldIcon={(data) => data?.icon}
					{...activeParams}
					style="width:250px"
					class="border radius-small overflow-hidden"
				/>
			</Demoer>
		</DemoPage>		 -->
	</div>
</ComponentDemo>
