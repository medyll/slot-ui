<script lang="ts">
	import github from 'svelte-highlight/styles/github';
	import { ThemeWrapper } from 'svelte-themer';
	import Taskbar from '/src/lib/ui/taskbar/Taskbar.svelte';
	import Dashboard from '/src/components/pages/dashboard/Dashboard.svelte';
	import StartMenu from '/src/lib/ui/startMenu/StartMenu.svelte';
	import Login from '../lib/ui/login/Login.svelte';
	import TaskBarContent from '../lib/engine/TaskBarContent.svelte';
	import Drawer from '$lib/base/drawer/Drawer.svelte';
	import TopBar from '$lib/ui/topBar/TopBar.svelte';
	import IconButton from '$lib/base/button/IconButton.svelte';
	import List from '$lib/base/list/List.svelte';
	import ListItem from '$lib/base/list/ListItem.svelte';
	import { themes } from '../themes/themes';
	import Frame from '$lib/ui/frame/Frame.svelte';
	import { toggleStartMenu } from '../lib/engine/wactions.utils';
	import { openChromeFrame } from '../lib/ui/chromeFrame/chromeFrame.utils';
	import ChromeFrameList from '../lib/ui/chromeFrame/ChromeFrameList.svelte';
	import ChromeFrameButtonList from '../lib/ui/chromeFrame/ChromeFrameButtonList.svelte';
	import Explorer from '../components/pages/explorer/Explorer.svelte';

	let frameRef: Frame;
	let drawerRef: Drawer;
	let drawerRefDash: Drawer;

	const onItemClick = function () {
		drawerRef.toggle();
	};

	function openCh(frameId: string, opt: any = {}) {
		openChromeFrame(frameId, {
			showCommandBar: false,
			component: Dashboard,
			title: frameId,
			...opt
		});
	}
</script>

<svelte:head>
	<title>SlotUi</title>
	<link href="../../static/cssfabric/cssfabric.vars.css" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
	<link
		href="node_modules/@medyll/cssfabric/src/lib/styles/cssfabric.min.css"
		lang="scss"
		rel="stylesheet"
	/>
  {@html github}
</svelte:head>

<ThemeWrapper theme={'dark'} {themes}>
	<StartMenu />
	<div class="h-full overflow-hidden flex-v">
		<Login showLogin={false}>
			<Taskbar>
				<svelte:fragment slot="taskBarLeft">
					<IconButton
						icon="barcode"
						on:click={toggleStartMenu}
						style="color:white;font-size: large"
					/>
					<button
						on:click={() => {
							openCh('btn1');
						}}>button 1</button
					>
					<button
						on:click={() => {
							openCh('btn2');
						}}>button 2</button
					>
					<button
						on:click={() => {
							openCh('btn3');
						}}>button 3</button
					>

					<button
						on:click={() => {
							openCh('explorer', { component: Explorer });
						}}>explorer</button
					>
				</svelte:fragment>
				<ChromeFrameButtonList let:chromeFrame />
				<TaskBarContent />
				<IconButton
					icon="fist-raised"
					iconFontSize="small"
					on:click={onItemClick}
					slot="taskBarRight"
				/>
			</Taskbar>
			<div id="layout" class="flex-main overflow-hidden pos-rel">
				<slot />
				<Frame bind:frameDrawerRef={drawerRefDash} bind:this={frameRef}>
					<div slot="frameDrawerSlot">nav left</div>
					<!--<Dashboard slot="contentFrameSlot"/>-->
				</Frame>
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
	<Drawer bind:this={drawerRef} isOpen={false}>
		<svelte:fragment slot="drawerMenuBar">
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
	</Drawer>
</ThemeWrapper>

<style global lang="scss">
	html {
		font-size: 12px;
		height: 100%;
	}

	body {
		height: 100%;
		width: 100%;
		overflow: hidden;
		background-image: url('wallp (4).jpg');
		background-size: cover;
		font-family: 'Rubik';
		background-color: var(--theme-color-background);
		color: var(--theme-color-text);
	}

	#svelte {
		height: 100%;
	}

	button {
		color: var(--theme-color-text);
		border: 0.5px solid var(--theme-color-border);
		padding: 0.5rem 0.75rem;
		border-radius: 4px;
		background-color: rgba(255, 255, 255, 0.1);

		&:hover {
			background-color: var(--color-gray-800);
		}

		&:active {
			background-color: var(--theme-color-text);
			color: var(--theme-color-background);
			box-shadow: var(--box-shad-10);
		}

		&[disabled] {
			color: var(--color-gray-800);
		}
	}

	.inputBorder {
		border: 1px solid rgba(255, 255, 255, 0.1) !important;
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
