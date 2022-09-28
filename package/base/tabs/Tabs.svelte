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
    if (!elem(navElementRef) || !activeTabCode)
        return;
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
	class="tabsRoot flex-v {className}"
	{...$$restProps}
>
	<div bind:this={tabsElementRef} class="tabsNav  flex-align-middle pos-rel">
		<div>
			<slot name="tabsFirstTitleSlot" />
		</div>
		<nav bind:this={navElementRef} class="tabsRail">
			{#each items as item}
				<div
					data-code={item.code}
					on:click={handleClick(item.code)}
					class={activeTabCode === item.code ? 'active' : ''}
				>
					<slot {item} name="tabLabelSlot">{item.label}</slot>
				</div>
			{/each}
		</nav>
		<div data-coll='red'>
			<slot name="tabsTitleSlot" />
		</div>
		<div>
			<slot name="tabsButtonSlot" />
		</div>
	</div>
	<div class="tabsActiveCellContainer">
		<div bind:this={activeCellElementRef} class="tabSlot" />
	</div>
	<div>
		<slot name="commandBarSlot" />
	</div>
	<div class="tabsContent flex-main pos-rel">
		{#each items as item}
			{@const display = activeTabCode === item.code ? 'flex' : 'none'}
			{#if activeTabCode === item.code}
				<slot {item} {activeTabCode}>
					<div
						data-code={item.code}
						data-activeTabCode={activeTabCode}
						style="display:{display};height:100%;position:relative;flex-direction:column"
					>
						{#if Boolean(item?.secondary)}
							<div class=" flex-h pad-tb-2 gap-small">
								<div class="border-r pad-1 shad-3 radius-tiny ">
									<Icon style="display:block" inline={false} icon="mdi:info-circle" />
								</div>
								<div class="flex-main pad-t-1">{@html item?.secondary}</div>
							</div>
						{/if}
						<slot name="innerTabSlot" {item} {activeTabCode}>
							<div data-code={item.code} style="flex:1;overflow:hidden;position:relative;">
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
						</slot>
					</div>
				</slot>
			{/if}
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

.tabsNav {
  padding: 0.25rem 0;
  border-bottom: 1px solid var(--slotui-tabs-nav-border-color, var(--theme-color-primary-alpha-high));
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
.tabsNav[data-orientation=horizontal] {
  flex-direction: column;
}
.tabsNav .tabsRail {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
}
.tabsNav .tabsRail > div {
  padding: var(--box-density-preset-small);
  min-width: 48px;
  cursor: pointer;
}
.tabsNav .tabsRail > div.active {
  font-weight: bold;
}
.tabsNav .tabsContent {
  background-color: var(--theme-color-background);
  position: relative;
  width: 100%;
}
.tabsNav .tabsActiveCellContainer {
  top: auto;
  position: relative;
  min-height: 4px;
  transition: all 0.25s;
}

.tabSlot {
  border-radius: 6px;
  min-height: 4px;
  background-color: var(--theme-color-primary);
  width: 100%;
  position: absolute;
  transition: all 0.25s;
  z-index: 200;
}</style>
