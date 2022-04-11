

<script lang="ts">
	import {createEventForwarder} from '../../engine/engine';

	type MenuBarTitleType = string | undefined;
	import ContentSwitcher from '../../base/contentSwitcher/ContentSwitcher.svelte';
	import {get_current_component} from 'svelte/internal';

	/** common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents                       = createEventForwarder(get_current_component());
	/** end slotUi exports*/

	export let title: MenuBarTitleType;
	export let orientation: 'right' | 'left'='right';

	const posTitle  = orientation === 'right' ? 1 : 3
	const posCloser = orientation === 'right' ? 3 : 1
</script>

<div use:forwardEvents  bind:this={element} class="flex-h flex-align-middle flex-main {className}">
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
			<ContentSwitcher parent={element} icon="faSearch">
				<slot name="menuBarSwitcher" />
			</ContentSwitcher>
		</div> 
	{/if}
</div>
