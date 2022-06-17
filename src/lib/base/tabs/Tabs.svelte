<script lang="ts">
	import { onMount } from 'svelte';
	import { elem } from '../../engine/elem';
	import type { TabsItemsProps } from './types';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	/*  end slotUi exports*/

	export let items: TabsItemsProps = [];
	export let activeTabCode: string = '';

	let navElementRef: HTMLElement;
	let tabsElementRef: HTMLElement;
	let activeCellElementRef: HTMLElement;
	let boundingClientRect: DOMRect;
	const handleClick = (tabValue: any) => (event: Event) => {
		activeTabCode = tabValue;
		const node = elem(navElementRef).find(`[data-code=${activeTabCode}]`);

		if (node && activeCellElementRef?.parentElement) {
			boundingClientRect = node.getBoundingClientRect();

			activeCellElementRef.style.left  = (boundingClientRect.left - activeCellElementRef.parentElement.offsetLeft) + 'px';
			activeCellElementRef.style.width = (boundingClientRect.width) + 'px';
			activeCellElementRef.style.top   = (tabsElementRef.offsetHeight ) + 'px';
			// activeCellElementRef.style.marginLeft = (boundingClientRect.width) / 2 + 'px';
		}
	};

 

	onMount(() => {
		handleClick(activeTabCode)();
	});
</script>

<div bind:this={element} class="tabsRoot {className} flex-v" {...$$restProps}>
	<nav bind:this={tabsElementRef} class="tabsNav flex-h flex-align-middle pos-rel">
		<div>
			<slot name="tabsFirstTitleSlot" />
		</div>
		<ul bind:this={navElementRef} class="flex-main">
			{#each items as item}
				<li
					data-code={item.code}
					on:click={handleClick(item.code)}
					class={activeTabCode === item.code ? 'active' : ''}
				>
					<slot {item} name="tabLabelSlot">{item.label}</slot>
				</li>
			{/each}
		</ul>
		<div>
			<slot name="tabsTitleSlot" />
		</div>
		<div>
			<slot name="tabsButtonSlot" />
		</div>
	</nav>
	<div bind:this={activeCellElementRef} class="tabsActiveCellContainer">
		<div class="tabSlot" />
	</div>
	<div>
		<slot name="commandBarSlot" />
	</div>
	<div class="tabsContent flex-main pos-rel">
		{#each items as item}
			{@const display = (activeTabCode === item.code) ? 'block':'none'}
			 <div style="display:{display};height:100%;position:relative;">
			{#if activeTabCode === item.code}
				{#if Boolean(item?.withComponent)}
					<svelte:component this={item.withComponent} {...item.componentProps ?? {}} />
				{:else if Boolean(item?.withContent)}
					{item.withContent}
				{:else if Boolean(item?.withUid)}
					{item.withUid}
				{/if}
			{/if}
			 </div>
		{/each}
	</div>
</div>

<style lang="scss">
	@import 'Tabs';
</style>
