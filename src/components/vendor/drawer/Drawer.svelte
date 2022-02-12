<script context="module" lang="ts">
	type DrawerTitleType = string | undefined;
	export type toggle = () => void;
</script>

<script lang="ts">
	import IconButton from '../button/IconButton.svelte';
	import type { Drawer } from './types';

	export let title: DrawerTitleType;
	export let headerButtonsList: Drawer.HeaderButtonsListType;

	let drawerRef: HTMLElement; 
    // any
	let isOpen: boolean = true;
	export let hideCloseIcon: boolean = false;

	export function toggle(visibleSate?: boolean) {
		isOpen = visibleSate !== undefined ? visibleSate : !isOpen;
	}
</script>

{#if isOpen}
	<div bind:this={drawerRef} class="drawer grid-v h-full">
		{#if $$slots.drawerMenuBar || Boolean(title)}
			<div class="header grid-h">
				<div class="grid-main grid-h grid-align-middle ">
					{#if title}<span style="font-size:18px;" class="pad-l-4">{title}</span>{/if}
					<slot name="drawerMenuBar" />
				</div>
				{#if !hideCloseIcon}
					<div>
						<IconButton
							on:click={() => {
								toggle();
							}}
							iconFontSize="small"
							icon="faWindowClose"
						/>
					</div>
				{/if}
			</div>
		{/if}
		{#if $$slots.content}
			<div class="grid-main"><slot name="content">content</slot></div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.drawer {
		color: white;
		background-color: rgba(59, 59, 59, 0.99);
		backdrop-filter: blur(10px);
		position: fixed;
		width: 350px;
		height: 100%;
		top: 0;
		bottom: 0;
		z-index: 3000;
		right: 0;
		.header {
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
			min-height: 48px;
			display: flex;
			align-items: center;
			.title {
				font-size: large;
			}
		}
	}
</style>
