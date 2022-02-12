<script lang="ts">
	import { ThemeWrapper, ThemeToggle, presets } from 'svelte-themer';
	import Taskbar from '/src/components/ui/taskbar/Taskbar.svelte';
	import Dashboard from '/src/components/pages/dashboard/Dashboard.svelte';
	import StartMenu from '/src/components/ui/startMenu/StartMenu.svelte';
	import Login from '../components/pages/login/Login.svelte';
	import TaskBarContent from '../components/engine/TaskBarContent.svelte';
	import Popper from '../components/vendor/popper/Popper.svelte';
	import Drawer from '/src/components/vendor/drawer/Drawer.svelte';
	import MenuBar from '../components/vendor/menuBar/MenuBar.svelte';
	import IconButton from '/src/components/vendor/button/IconButton.svelte';
	import List from '/src/components/vendor/list/List.svelte';
	import ListItem from '/src/components/vendor/list/ListItem.svelte';
	import ListTitle from '/src/components/vendor/list/ListTitle.svelte';

	let isLogged = true;

	let drawerRef: Drawer;

	const handleClick = function () {
		drawerRef.toggle();
	};
</script>

<ThemeWrapper mode="dark">
	<StartMenu />
	<div style="height:100%;max-height:100%;overflow:hidden;display:flex;flex-direction: column">
		{#if isLogged}
			<Taskbar>
				<TaskBarContent />
				<div slot="taskBarRIght">
					<IconButton on:click={handleClick} iconFontSize="small" icon="faAccusoft" />
				</div>
			</Taskbar>
			<div style="flex: 1;overflow:hidden">
				<Dashboard />
				<slot>empty !!!</slot>
			</div>
			<!--<Popper/>-->
		{:else}
			<Login />
		{/if}
	</div>
	<Drawer bind:this={drawerRef}>
		<svelte:fragment slot="drawerMenuBar">
			<MenuBar title="Drawer with menu bar ">
				<svelte:fragment slot="menuBarSwitcher">
					<div class="pad-2">
						<input placeholder="Search in Bar" style="width:100%;" type="text" />
					</div>
				</svelte:fragment>
			</MenuBar>
		</svelte:fragment>
		<div class="pad-2" slot="content">
			<List handleClick={() => {}}>
				<ListTitle>title</ListTitle>
				{#each [...Array(10)] as key, val}
					<ListItem>
						<span slot="primary">{val}</span>
						<span slot="action"><button>fds</button></span>
					</ListItem>
				{/each}
			</List>
		</div>
	</Drawer>
</ThemeWrapper>

<style lang="scss" global>
	@import 'ress/ress.css';
	@import '../css/cssFabric/cssfabric.min.css';
	@import url('https://fonts.googleapis.com/css?family=Rubik');

	html {
		font-size: 12px;
		height: 100%;
	}

	body {
		height: 100%;
		width: 100%;
		overflow: hidden;
		background-image: url('back2.png');
		background-size: cover;
		font-family: 'Rubik';
	}

	#svelte {
		height: 100%;
	}

	button {
		border: 0.5px solid #ccc;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		background-color: white;

		&:hover {
			background-color: #ededed;
		}
	}

	input {
		border: 1px solid rgba(208, 191, 151, 0.5);
		border-bottom: 2px solid rgb(208, 191, 151);
		border-radius: 4px;
		padding: 0.5rem;
		box-shadow: inset 0px 0px 3px 1px rgba(51, 51, 51, 0.8);
		background-color: rgba(59, 59, 59, 0.99);
		color: white;
	}
</style>
