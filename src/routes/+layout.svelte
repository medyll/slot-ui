<script lang="ts">
	import github from 'svelte-highlight/styles/github';
	// fabric default vars
	import cssfabricVars from '@medyll/cssfabric/src/lib/styles/vars.min.css';
	// fabric default
	import cssfabric from '@medyll/cssfabric/src/lib/styles/cssfabric.min.css';
	// import cssfabric themer
	import cssfabricThemer from '../styles/cssfabric-theme.scss';

	import Drawer from '$lib/base/drawer/Drawer.svelte';
	import ThemeSwitcher from '$lib/ui/themeswitcher/ThemeSwitcher.svelte';
	import { goto } from '$app/navigation';
	import Button from '$lib/base/button/Button.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';
	import IntersectionObserver from '../components/IntersectionObserver.svelte';
	import LeftMenu from '$components/LeftMenu.svelte';
	import { setContext, getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import type { UiContextType } from '$contexts/ui.context.js';
	import { onMount } from 'svelte';
	let store = writable<UiContextType>({ drawerFlow: 'fixed' });
	setContext<Writable<UiContextType>>('uiContext', store);

	let uiContext = getContext<Writable<UiContextType>>('uiContext');
	let element: any;
	let intersecting: boolean;

	let DrawerRef: Drawer;
	let contentSlide: HTMLElement;
	let innerSlide: HTMLElement;
	let navElement: HTMLElement;

	let scrolled: boolean = false;

	function onDrawerClick() {
		DrawerRef.actions.toggle();
	}

	onMount(() => {
		contentSlide.addEventListener('scroll', function (event) { 
			if (contentSlide?.scrollTop > 32 && !scrolled) {
				scrolled = true;
				navElement.classList.add('shad-3')
			} else if (contentSlide?.scrollTop < 32) {
				scrolled = false;
				navElement.classList.remove('shad-3')
			}
		});
	});

	 $: console.log(contentSlide?.scrollTop); 
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
		/* hack for legacy node app */
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

<div class="flex-h h-full overflow-hidden">
	<Drawer bind:this={DrawerRef} flow={$uiContext.drawerFlow} isOpen={true}>
		<LeftMenu />
	</Drawer>
	<div id="contentSlide" bind:this={contentSlide}>
		<nav
			bind:this={navElement}
			class="nav flex-h pos-sticky pad flex-align-middle gap-small zI-10 w-full h-4 gap-medium"
		>
			<Button on:click={onDrawerClick} icon="menu" iconFamily="mdi" />
			<h3>SlotUi</h3>
			<div class="flex-main" />
			<a href="svelte-components">Components</a>
			<ThemeSwitcher iconFamily="mdi" icon="paint-outline" title="toggle theme" />
		</nav>
		<div id="innerSlide" bind:this={innerSlide} class="zI-0"><slot /></div>
	</div>
</div>

<style global lang="scss">
	@import '../styles/main.scss';

	#contentSlide {
		height: 100%;
		overflow: auto;
		flex: 1;
		scroll-behavior: smooth;
		scroll-padding-top: 25rem;
	}

	.nav {
		background-color: var(--theme-color-background-alpha);
		backdrop-filter: blur(30px); 
	}
</style>
