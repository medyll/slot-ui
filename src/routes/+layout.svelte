
<script lang='ts'>
	import github from 'svelte-highlight/styles/github';
	// fabric default vars
	import cssfabricVars from '@medyll/cssfabric/src/lib/styles/vars.min.css';
	// fabric default
	import cssfabric from "@medyll/cssfabric/src/lib/styles/cssfabric.min.css";
	// import cssfabric themer
	import cssfabricThemer from '../styles/cssfabric-theme.scss';

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
	import ChromeFrameList from '../lib/ui/chromeFrame/ChromeFrameList.svelte';
	import ChromeFrameButtonList from '../lib/ui/chromeFrame/ChromeFrameButtonList.svelte';
	import Explorer from '../components/pages/explorer/Explorer.svelte';
	import Dashboard from '../../src/components/pages/dashboard/Dashboard.svelte';
	import ThemeSwitcher from '$lib/ui/themeswitcher/ThemeSwitcher.svelte';
	import { goto } from '$app/navigation';
	import Button from '$lib/base/button/Button.svelte'; 

	 
	// importsNotUsedAsValues
	function openCh(frameId: string, opt: any = {}) {
		/* openChromeFrame(frameId, {
			showCommandBar: false,
			component: Dashboard,
			title: frameId,
			...opt
		}); */
	}

</script>

<svelte:head>
	<title>SlotUi</title>
	<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" /> 
	{@html github}
	<style type="text/css">
		 {
			@html cssfabricVars;
		}
	</style>
	<style>
		 {
			@html cssfabric;
		}
	</style>
	<style type="text/css">
		 {
			@html cssfabricThemer;
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
		<!-- <Taskbar>
			<svelte:fragment slot="taskBarLeft">
				<Button
					size="auto"
					primary="svelte-components"
					on:click={handleClick('svelte-components')}
				/>
				<IconButton
						icon="barcode"
						on:click={toggleStartMenu}
						style="color:white;font-size: large"
					/>
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
		</Taskbar> -->
		<div id="layout" class="flex-main overflow-hidden theme-bg-paper-alpha-high">
			<div class="flex-h pad flex-align-middle shad-3 gap-small zI-10">
				<h3>Slot Ui</h3>
				<div />
				<div class="flex-main" />
				<a href="svelte-components">Components</a>
				<ThemeSwitcher />
				<!-- <a href="svelte-components">Documentation</a>
				<a href="svelte-components">Github</a> -->
			</div>

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
 
<style global lang="scss">
	 @import "../styles/main.scss"
</style>
