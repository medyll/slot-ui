<script lang="ts">
	import github from 'svelte-highlight/styles/github';
	// fabric default vars
	import cssfabricVars from '@medyll/cssfabric/src/lib/styles/vars.min.css';
	// fabric default
	import cssfabric from '@medyll/cssfabric/src/lib/styles/cssfabric.min.css';
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
	import Icon from '$lib/base/icon/Icon.svelte';
	import IntersectionObserver from '../components/IntersectionObserver.svelte';
	let element: any;
	let intersecting: boolean;
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

<div class="content-slide">
	<nav class="flex-h pos-sticky pad flex-align-middle shad-3 gap-small zI-10 w-full">
		<Button icon="menu" iconFamily="mdi" />
		<div>{intersecting ? 'Element is in view' : 'Element is not in view'}</div>
		<div class="flex-main" />
		<a href="svelte-components">Components</a>
		<ThemeSwitcher />
	</nav>
	<slot />
</div>

<!-- <div id="layout" class="h-full flex-main theme-bg-paper-alpha-high">
	
</div> -->
<style global lang="scss">
	@import '../styles/main.scss';


	.content-slide {
		height: 100%;
		overflow: auto;
		scroll-behavior: smooth;
		scroll-padding-top: 25rem;
	}
</style>
