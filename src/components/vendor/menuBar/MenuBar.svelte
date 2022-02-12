<script context="module" lang="ts">
	type MenuBarTitleType = string | undefined;
</script>

<script lang="ts">
	import { compute_slots } from 'svelte/internal';
	import IconButton from '../button/IconButton.svelte';

	import ContentSwitcher from '../contentSwitcher/ContentSwitcher.svelte';
	import type { Drawer } from '../drawer/types';

	let headerRef;
	export let title: MenuBarTitleType;
</script>

<div bind:this={headerRef} class="grid-h grid-align-middle grid-main">
	<div class="title grid-main text-500" style="min-width:auto">
		{#if $$slots.menuBarTitle || Boolean(title)}
			<slot name="menuBarTitle">
				<div style="font-size:18px;min-width:auto;overflow:hidden;"  class="overflow-hidden text-ellipsis pad-l-4  ">
					<div class="text-ellipsis">{title}</div>
				</div>
			</slot>
		{/if}
	</div>
	<div  >
		<slot name="menuBarButtons" />
	</div> 
	{#if $$slots.menuBarSwitcher}
		<div>
			<ContentSwitcher parent={headerRef} icon="faSearch">
				<slot name="menuBarSwitcher" />
			</ContentSwitcher>
		</div> 
	{/if}
</div>
