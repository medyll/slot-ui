<script context="module" lang="ts">
	type MenuBarTitleType = string | undefined;
</script>

<script lang="ts">
	import ContentSwitcher from '../contentSwitcher/ContentSwitcher.svelte';

	let headerRef;
	export let title: MenuBarTitleType;
	export let orientation: 'right' | 'left'='right';

	const posTitle  = orientation === 'right' ? 1 : 3
	const posCloser = orientation === 'right' ? 3 : 1
</script>

<div bind:this={headerRef} class="flex-h flex-align-middle flex-main">
	<div class="title flex-main text-500" style="order:{posTitle};min-width:auto">
		{#if $$slots.menuBarTitle || Boolean(title)}
			<slot name="menuBarTitle">
				<div style="font-size:18px;min-width:auto;overflow:hidden;"  class="overflow-hidden text-ellipsis pad-l-4  ">
					<h5 class="text-ellipsis">{title}</h5>
				</div>
			</slot>
		{/if}
	</div>
	<div style="order:2" >
		<slot name="menuBarButtons" />
	</div> 
	{#if $$slots.menuBarSwitcher}
		<div style="order:{posCloser}">
			<ContentSwitcher parent={headerRef} icon="faSearch">
				<slot name="menuBarSwitcher" />
			</ContentSwitcher>
		</div> 
	{/if}
</div>
