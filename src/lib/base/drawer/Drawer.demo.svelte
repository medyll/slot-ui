<script lang="ts">
	import Jsoner from '$lib/data/jsoner/Jsoner.svelte';
	import TopBar from '$lib/ui/topBar/TopBar.svelte';
	import { stickTo } from '$lib/uses/stickTo/stickTo';
	import Button from '../button/Button.svelte';
	import Input from '../input/Input.svelte';
	import List from '../list/List.svelte';
	import ListItem from '../list/ListItem.svelte';
	import Drawer from './Drawer.svelte';

	let drawerRef: Drawer;
	let withTopBar: boolean = false;
	let attrs = { primary: 'A Drawer', secondary: 'drawer seconday text' };

	const options = {
		stickTo: ['left', 'right', 'top', 'bottom'],
		flow: ['fixed', 'relative', 'abolute'],
		showOpenerIcon: [false, true]
	};

	const onButtonClick = function () {
		drawerRef.toggle();
	};

	function changeAttr(attr: any) {
		attrs = { ...attrs, ...attr };
	}
</script>

<div class="flex-v gap-large">
	<h5>{'<Drawer />'}</h5>
	<div class="flex-v gap-medium">
		<div><Button size="medium" primary="toggle drawer" on:click={onButtonClick} /></div>
		<div>
			<Button
				size="medium"
				primary="with top bar"
				on:click={() => {

					withTopBar = !withTopBar;
					changeAttr({ primary: withTopBar ? undefined : 'A Drawer', secondary: withTopBar ? undefined : 'drawer seconday text' });
				}}
			/>
		</div>
		<h5>stickTo</h5>

		<div class="flex-h gap-small">
			{#each options.stickTo as stickTo}
				<div>
					<Button
						on:click={() => {
							changeAttr({ stickTo, primary: stickTo });
						}}
						size="medium"
						primary="Stick to {stickTo}"
					/>
				</div>
			{/each}
		</div>
		<h5>flow</h5>

		<div class="flex-h gap-small">
			{#each options.flow as flow}
				<div>
					<Button
						on:click={() => {
							changeAttr({ flow, primary: flow });
						}}
						size="medium"
						primary="position {flow}"
					/>
				</div>
			{/each}
		</div>
		<h5>showOpenerIcon</h5>
		<div class="flex-h gap-small">
			{#each options.showOpenerIcon as showOpenerIcon}
				<div>
					<Button
						on:click={() => {
							changeAttr({ showOpenerIcon, primary: showOpenerIcon });
						}}
						size="medium"
						primary="showOpenerIcon {showOpenerIcon}"
					/>
				</div>
			{/each}
		</div>
	</div>
	<Jsoner data={attrs} />
	<!-- {JSON.stringify(attrs,null,' ')} -->
</div>
<div style="width:80%;height:500px;position:relative;" class="border">
	<Drawer bind:this={drawerRef} isOpen={true} icon="edit" flow="fixed" {...attrs}>
		<div slot="topBarSlot">
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
		<div style="height:100%;overflow:auto;">
			<List noVirtualize={true} onItemClick={() => {}}>
				{#each [...Array(20)] as key, val}
					<ListItem>
						<span slot="primary">Some idioms {val}</span>
						<span slot="secondary">secondary {val}</span>
						<span slot="action"><Button>fds de action</Button></span>
					</ListItem>
				{/each}
			</List>
		</div>
		<div slot="drawerBottomBarSlot">Bottom bar</div>
	</Drawer>
</div>
