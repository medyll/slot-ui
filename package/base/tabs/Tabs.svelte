<script>import { onMount } from 'svelte';
import { elem } from '../../engine/elem';
import Icon from '../icon/Icon.svelte';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
/*  end slotUi exports*/
export let items = [];
export let activeTabCode = '';
/** orientation */
export let orientation = 'vertical';
let navElementRef;
let tabsElementRef;
let activeCellElementRef;
let boundingClientRect;
const handleClick = (tabValue) => (event) => {
    activeTabCode = tabValue;
    const node = elem(navElementRef).find(`[data-code=${activeTabCode}]`);
    if (node && activeCellElementRef?.parentElement) {
        boundingClientRect = node.getBoundingClientRect();
        /* activeCellElementRef.style.left =
            boundingClientRect.left - activeCellElementRef.parentElement.offsetLeft + 'px'; */
        if (orientation === 'vertical') {
            activeCellElementRef.style.left = node?.offsetLeft + 'px';
            activeCellElementRef.style.width = boundingClientRect.width + 'px';
        }
        else {
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
		<ul bind:this={navElementRef} class="tabsRail">
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
		<div data-coll="red">
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

<style>.tabsRoot {
  position: relative;
  display: flex;
}
.tabsRoot[data-orientation=horizontal] ul {
  flex-direction: column;
}
.tabsRoot[data-orientation=vertical] {
  flex-direction: column;
}
.tabsRoot ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.tabsRoot ul li {
  padding: var(--box-density-preset-small);
  min-width: 48px;
  cursor: pointer;
}
.tabsRoot ul li.active {
  font-weight: bold;
}
.tabsRoot .tabsNav {
  padding: 0.25rem 0;
  gap: 1rem;
  border-bottom: 1px solid var(--slotui-tabs-nav-border-color, var(--theme-color-primary-alpha-high));
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
.tabsRoot .tabsNav[data-orientation=horizontal] {
  flex-direction: column;
}
.tabsRoot .tabsNav .tabsRail {
  flex: 1;
}
.tabsRoot .tabsContent {
  border: 1px solid var(--slotui-tabs-content-border-color, var(--theme-color-foreground-alpha-high));
  border-top: 1px solid transparent;
  border-radius: 3px;
  padding: 0.5rem;
  background-color: var(--theme-color-background);
  min-height: 96px;
  position: relative;
  width: 100%;
}
.tabsRoot .tabsActiveCellContainer {
  top: auto;
  position: relative;
  height: 4px;
  transition: all 0.25s;
}
.tabsRoot .tabsActiveCellContainer .tabSlot {
  border-radius: 6px;
  height: 4px;
  background-color: var(--theme-color-primary);
  width: 100%;
  position: absolute;
  transition: all 0.25s;
}</style>
