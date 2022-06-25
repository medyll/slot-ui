<script lang="ts">
	import TopBar from '$lib/ui/topBar/TopBar.svelte';
	import Button from '../button/Button.svelte';
	import Input from '../input/Input.svelte';
	import List from '../list/List.svelte';
	import ListItem from '../list/ListItem.svelte';
	import Drawer from './Drawer.svelte';

	let drawerRef: Drawer;

	const onButtonClick = function () {
		drawerRef.toggle();
	};
</script>

<div class="flex-v gap-large">
	<h5>{'<Drawer />'}</h5>
	<div class="">
		<Button primary="toggle drawer" on:click={onButtonClick} />
	</div>
</div>

<Drawer bind:this={drawerRef} isOpen={true}>
	<svelte:fragment slot="topBarSlot">
		<TopBar title="Drawer with menu bar ">
			<svelte:fragment slot="menuBarSwitcher">
				<div class="pad-1">
					<Input value="" placeholder="Search in Bar" style="width:100%;" type="text" />
				</div>
			</svelte:fragment>
		</TopBar>
	</svelte:fragment>
	<div style="height:100%" class="pad-2"> 
		<List  noVirtualize={true} onItemClick={() => {}}>
			{#each [...Array(10)] as key, val}
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
