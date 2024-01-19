<svelte:options accessors />

<script lang="ts">
	import { createEventForwarder } from '../../engine/eventForwarder';
	import { get_current_component } from 'svelte/internal';
	import Drawer from '../../navigation/drawer/Drawer.svelte';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());

	export let style: string = '';
	export let elementNav: HTMLDivElement | null = null;
	export let frameDrawerRef: typeof Drawer = null;

	export let hideCloseIcon: boolean = true;
	export let showOpenerIcon: boolean = true;

	export let drawerWidth: string = '200px';

	let menuOpen = true;

	export const actions = {
		openNavLeft: () => {
			menuOpen = true;
		},
		toggleNavLeft: () => {
			menuOpen = !menuOpen;
		},
		closeNavLeft: () => {
			menuOpen = !menuOpen;
		}
	};
</script>

<div
	bind:this={element}
	class="pos-rel flex-v h-full overflow-hidden frame {className}"
	{style}
	use:forwardEvents
>
	<div class="frameContainer">
		<div bind:this={elementNav} class="navLeft pos-rel flex-v h-full">
			{#if frameDrawerRef?.isOpen}
				<slot name="navLeftHeaderFrameSlot" />
			{/if}
			<Drawer
				bind:this={frameDrawerRef}
				{hideCloseIcon}
				bind:isOpen={menuOpen}
				flow="relative"
				stickTo="left"
				style="flex:1;position:relative;"
				defaultWidth={drawerWidth}
				{showOpenerIcon}
			>
				<slot name="drawerTop" slot="drawerTop" />
				<slot name="drawerContent" />
			</Drawer>
		</div>
		<div class="frameMainZone">
			<slot name="frameTop" />
			<div class=" frameContent">
				<slot name="content" />
			</div>
			<slot name="frameBottom" />
		</div>
	</div>
</div>

<style global lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
	.frame {
		z-index: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
		background-color: var(--css-frame-bg-color, var(--theme-bg-paper));
		backdrop-filter: var(--css-frame-backdrop-blur, blur(30px));
		overflow: hidden;

		.frameContainer {
			display: flex;
			position: relative;
			flex: 1;
			overflow: hidden;
			.navLeft {
				z-index: 1;
				border-right: 1px solid var(--theme-color-primary);
				height: 100%;
				position: relative;
			}

			.frameMainZone {
				flex: 1;
				height: 100%;
				overflow: hidden;
				display: flex;
				flex-direction: column;

				.frameContent {
					flex: 1;
					overflow: hidden;
					position: relative;
				}
			}
		}
	}
</style>
