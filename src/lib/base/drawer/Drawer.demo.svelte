<script lang="ts">
	import Jsoner from '$lib/data/jsoner/Jsoner.svelte';
	import TopBar from '$lib/ui/topBar/TopBar.svelte';
	import { stickTo } from '$lib/uses/stickTo/stickTo';
	import Button from '$lib/base/button/Button.svelte';
	import Input from '$lib/base/input/Input.svelte';
	import List from '$lib/base/list/List.svelte';
	import ListItem from '$lib/base/list/ListItem.svelte';
	import Drawer from './Drawer.svelte';

	/* demo */
	import ComponentExample from '$lib/demo/ComponentExample.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';
	import { defaultsArgsFromProps } from '$lib/base/demoer/demoer.utils.js';
	import Icon from '../icon/Icon.svelte';
	/* demo */

	let drawerRef: Drawer;
	let withTopBar: boolean = false;
	let attrs = { primary: 'A Drawer', secondary: 'drawer seconday text', stickTo: 'right' };

	const options = {
		stickTo: ['left', 'right', 'top', 'bottom'],
		flow: ['fixed', 'relative', 'absolute'],
		showOpenerIcon: [false, true]
	};

	const onButtonClick = function () {
		drawerRef.toggle();
	};

	function changeAttr(attr: any) {
		attrs = { ...attrs, ...attr };
	}

	let parametersSlot: any = {
		isOpen: {
			type: 'boolean',
			values: [true, false]
		},
		stickTo: {
			type: 'position-preset',
			values: ['right', 'left', 'top', 'bottom']
		},
		flow: {
			type: 'flow-preset',
			values:   ['relative', 'fixed', 'absolute']
		},
		showOpenerIcon: {
			type: 'boolean',
			values: [true, false]
		}
	};

	let componentArgsSlot = {
		isOpen: defaultsArgsFromProps('isOpen', parametersSlot),
		stickTo: defaultsArgsFromProps('stickTo', parametersSlot),
		flow: defaultsArgsFromProps('flow', parametersSlot),
		showOpenerIcon: defaultsArgsFromProps('showOpenerIcon', parametersSlot)
	};

	let parametersProps: any = {
		...parametersSlot
	};

	let componentArgsProps = {
		primary: 'A Drawer',
		secondary: 'drawer seconday text',
		...componentArgsSlot
	};

	let codeSlot = `
	<Drawer>
		<div slot="topSlot" class="pad-2" >								
			Drawer's title				
		</div>
		<div class="pad-2">Drawer's content</div>
		<div slot="bottomSlot" class="pad-2" >								
			Drawer's bottom zone				
		</div>
	</Drawer>`;
</script>

<ComponentExample component="Drawer">
	<div class="flex-v gap-medium w-full">
		<DemoPage title="Using slots" component="Drawer" code={codeSlot}>
			<Demoer parameters={parametersSlot} componentArgs={componentArgsSlot} let:activeParams>
				<div style="width:450px;height:500px;position:relative;" class="pad flex-h">
					<div class="flex-main pad-4 text-right">
						Side content Side content Side content Side content
					</div>
					<Drawer {...activeParams}>
						<div slot="iconSlot" class="pad-2" >								
							<Icon icon="window" />		
						</div>
						<div slot="topSlot" class="pad-2" >								
							Drawer's title				
						</div>
						<div class="pad-2">Drawer's content</div> 
						<div slot="bottomSlot" class="pad-2" >								
							Drawer's bottom zone				
						</div>
					</Drawer>
				</div>
			</Demoer>
		</DemoPage>
	</div>
</ComponentExample>

<!-- <div style="width:80%;height:500px;position:relative;" class="border">
	<Drawer bind:this={drawerRef} isOpen={true} icon="edit" flow="fixed" {...attrs}>
		<div slot="topSlot">
			{#if withTopBar}
				<TopBar title="Drawer with top bar ">
					<svelte:fragment slot="menuBarSwitcher">
						<div class="flex-main">
							<Input value="" placeholder="Search in Bar" style="width:100%;" type="text" />
						</div>
					</svelte:fragment>
				</TopBar>
			{/if}
		</div>
		<div style="height:100%;overflow:hidden;">
			<List height="100%" onItemClick={() => {}}>
				{#each [...Array(20)] as key, val}
					<ListItem>
						<span slot="primary">Some idioms {val}</span>
						<span slot="secondary">secondary {val}</span>
						<span slot="action"><Button>fds de action</Button></span>
					</ListItem>
				{/each}
			</List>
		</div>
		<div slot="bottomSlot">Bottom bar</div>
	</Drawer>
</div> -->
