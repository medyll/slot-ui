<script lang="ts">
	import github from 'svelte-highlight/styles/github';
	import cssfabric from '@medyll/cssfabric/src/lib/styles/vars.min.css';

	import { ThemeWrapper } from 'svelte-themer';
	import Taskbar from '$lib/ui/taskbar/Taskbar.svelte';
	import StartMenu from '$lib/ui/startMenu/StartMenu.svelte';
	import Login from '$lib/ui/login/Login.svelte';
	import TaskBarContent from '../lib/engine/TaskBarContent.svelte';
	import Drawer from '$lib/base/drawer/Drawer.svelte';
	import TopBar from '$lib/ui/topBar/TopBar.svelte';
	import IconButton from '$lib/base/button/IconButton.svelte';
	import List from '$lib/base/list/List.svelte';
	import ListItem from '$lib/base/list/ListItem.svelte';
	import Frame from '$lib/ui/frame/Frame.svelte';
	import { toggleStartMenu } from '../lib/engine/wactions.utils';
	import { openChromeFrame } from '$lib/ui/chromeFrame/chromeFrame.utils';
	import ChromeFrameList from '../lib/ui/chromeFrame/ChromeFrameList.svelte';
	import ChromeFrameButtonList from '../lib/ui/chromeFrame/ChromeFrameButtonList.svelte';
	import Explorer from '../components/pages/explorer/Explorer.svelte';
	import Dashboard from '../../src/components/pages/dashboard/Dashboard.svelte';
	import ThemeSwitcher from '$lib/ui/themeswitcher/ThemeSwitcher.svelte';
	import { goto } from '$app/navigation';
	import Button from '$lib/base/button/Button.svelte';

	/* import theme from "../../"; */

	let frameRef: Frame;
	let drawerRef: Drawer;
	let drawerRefDash: Drawer;

	const onItemClick = function () {
		drawerRef.toggle();
	};
	// importsNotUsedAsValues
	function openCh(frameId: string, opt: any = {}) {
		openChromeFrame(frameId, {
			showCommandBar: false,
			component: Dashboard,
			title: frameId,
			...opt
		});
	}
	const handleClick = (where: string) => (event: any) => {
		goto(where);
	};
</script>

<svelte:head>
	<title>SlotUi</title>
	<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
	<link
		href="./node_modules/@medyll/cssfabric/src/lib/styles/cssfabric.min.css"
		lang="scss"
		rel="stylesheet"
	/>
	<!-- <link href="cssfabric/cssfabric.vars.css" rel="stylesheet" /> -->
	<link href="theme/cssfabric.scss" lang="scss" rel="stylesheet" />
	{@html github}
	<!-- {@html theme} -->
	<style>
		 {
			@html cssfabric;
		}
	</style>
	<script>
		/*hack for legacy node app*/
		var global = global || window;
		var Buffer = Buffer || [];
		var process = process || { env: { DEBUG: undefined }, version: [] };
		if (document.body) {
			document.body.setAttribute('data-theme', 'light');
		if (localStorage && localStorage.getItem('themeMode')) {
			document.body.setAttribute('data-theme', localStorage.getItem('themeMode'));
		}
		}
		window.addEventListener('load', function (event) {
			if (localStorage && localStorage.getItem('themeMode')) {
				document.body.setAttribute('data-theme', localStorage.getItem('themeMode'));
			}
		});
	</script>
</svelte:head>

<StartMenu />
<div class="h-full overflow-hidden flex-v">
	<Login showLogin={false}>
		<Taskbar>
			<svelte:fragment slot="taskBarLeft">
				<Button
					size="auto"
					primary="svelte-components"
					on:click={handleClick('svelte-components')}
				/>
				<!-- <IconButton
						icon="barcode"
						on:click={toggleStartMenu}
						style="color:white;font-size: large"
					/> -->
				<Button
					on:click={() => {
						openCh('btn1');
					}}>button frame 1</Button
				>
				<Button
					on:click={() => {
						openCh('btn2');
					}}>button 2</Button
				>
			</svelte:fragment>
			<ChromeFrameButtonList let:chromeFrame />
			<TaskBarContent />
			<svelte:fragment slot="taskBarRight">
				<ThemeSwitcher />
			</svelte:fragment>
		</Taskbar>
		<div id="layout" class="flex-main overflow-hidden theme-bg-paper-alpha-high">
			<slot />
			<ChromeFrameList
				chromeListConfig={{
					showCommandBar: true,
					parent: '#layout',
					onClose: (chromeFrame) => {
						console.log(chromeFrame);
					}
				}}
			/>
		</div>
	</Login>
</div>

<!-- <Drawer bind:this={drawerRef} isOpen={false}>
	<svelte:fragment slot="topBarSlot">
		<TopBar title="Drawer with menu bar ">
			<svelte:fragment slot="menuBarSwitcher">
				<div class="pad-1">
					<input placeholder="Search in Bar" style="width:100%;" type="text" />
				</div>
			</svelte:fragment>
			
		</TopBar>
	</svelte:fragment>
	<div class="pad-2">
		<List onItemClick={() => {}}>
			{#each [...Array(10)] as key, val}
				<ListItem>
					<span slot="primary">Some idioms {val}</span>
					<span slot="secondary">secondary {val}</span>
					<span slot="action"><button>fds de action</button></span>
				</ListItem>
			{/each}
		</List>
	</div>
</Drawer> -->
<style global lang="scss">
	@import './src/sass/cssfabric.scss';

	html {
		font-size: 12px;
		height: 100%;
		box-sizing: border-box;
	}

	body {
		height: 100%;
		width: 100%;
		overflow: hidden;
		background-image: url('wallp (4).jpg');
		background-size: cover;
		font-family: 'Rubik';
		background-color: var(--theme-color-background);
		color: var(--theme-color-foreground);
		box-sizing: border-box;
	}

	* {
		box-sizing: border-box;
	}

	#svelte {
		height: 100%;
	}
	.inputBorder {
		border: 1px solid rgba(255, 255, 255, 0.1) !important;
	}
</style>
