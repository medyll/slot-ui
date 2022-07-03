<script lang="ts">
	import { onMount } from 'svelte';
	import { elem } from '../../engine/elem';
	import Icon from '../icon/Icon.svelte';
	import type { TabsItemsProps } from './types';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	/*  end slotUi exports*/

	export let items: TabsItemsProps = [];
	export let activeTabCode: string = '';

	/** orientation */
	export let orientation: 'horizontal' | 'vertical' = 'vertical';

	let navElementRef: HTMLElement;
	let tabsElementRef: HTMLElement;
	let activeCellElementRef: HTMLElement;
	let boundingClientRect: DOMRect;
	const handleClick = (tabValue: any) => (event: Event) => {
		activeTabCode = tabValue;
		const node = elem(navElementRef).find(`[data-code=${activeTabCode}]`);

		if (node && activeCellElementRef?.parentElement) {
			boundingClientRect = node.getBoundingClientRect();

			/* activeCellElementRef.style.left =
				boundingClientRect.left - activeCellElementRef.parentElement.offsetLeft + 'px'; */
			if (orientation === 'vertical') {
				activeCellElementRef.style.left = node?.offsetLeft + 'px';
				activeCellElementRef.style.width = boundingClientRect.width + 'px';
			} else {
				activeCellElementRef.style.top = node?.offsetTop + 'px';
				activeCellElementRef.style.height = boundingClientRect.height + 'px';
				activeCellElementRef.style.width = '3px';
			}
			// activeCellElementRef.style.top = tabsElementRef.offsetHeight + 'px';
			// activeCellElementRef.style.marginLeft = (boundingClientRect.width) / 2 + 'px';
		}
	};

	onMount(() => {
		handleClick(activeTabCode)();
	});
</script>

<div
	bind:this={element}
	data-orientation={orientation}
	class="tabsRoot {className}"
	{...$$restProps}
>
	<nav bind:this={tabsElementRef} class="tabsNav  flex-align-middle pos-rel">
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
	<div class="tabsActiveCellContainer">
		<div bind:this={activeCellElementRef} class="tabSlot" />
	</div>
	<div>
		<slot name="commandBarSlot" />
	</div>
	<div class="tabsContent flex-main pos-rel">
		{#each items as item}
			{@const display = activeTabCode === item.code ? 'flex' : 'none'}
			<slot {item}>
				<div
					style="display:{display};height:100%;position:relative;display:flex;flex-direction:column"
				>
					{#if Boolean(item?.secondary)}
						<div class=" flex-h pad-tb gap-small">
							<div class="border-r pad-1 shad-3 radius-tiny theme-bg-paper">
								<Icon style="display:block" inline={false} icon="info-circle" />
							</div>
							<div class="flex-main pad-t-1">{@html item?.secondary}</div>
						</div>
					{/if}
					<div style="flex:1;overflow:hidden;">
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
				</div>
			</slot>
		{/each}
	</div>
</div>

<style lang="scss">
	@import 'Tabs';
</style>
