<script>import { onMount } from 'svelte';
import { elem } from '../../engine/elem';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
export let items = [];
export let activeTabCode = '';
let navElementRef;
let activeCellElementRef;
let boundingClientRect;
const handleClick = (tabValue) => (event) => {
    activeTabCode = tabValue;
    const node = elem(navElementRef).find(`[data-code=${activeTabCode}]`);
    if (node) {
        boundingClientRect = node.getBoundingClientRect();
        activeCellElementRef.style.left = (boundingClientRect.left - activeCellElementRef.parentElement.offsetLeft) + 'px';
        activeCellElementRef.style.width = (boundingClientRect.width) + 'px';
        // activeCellElementRef.style.top   = (boundingClientRect.top - activeCellElementRef.parentElement.offsetTop) + 'px';
        // activeCellElementRef.style.marginLeft = (boundingClientRect.width) / 2 + 'px';
    }
};
onMount(() => {
    handleClick(activeTabCode)();
});
</script>
<div class="tabsRoot {className}">
    <nav class="tabsNav flex-h flex-align-middle">
        <ul bind:this={navElementRef} class="flex-main">
            {#each items as item }
                <li data-code={item.code} on:click={handleClick(item.code,this)}
                    class={activeTabCode === item.code ? 'active' : ''}>{item.label}
                </li>
            {/each}
        </ul>
        <div>
            <slot name="tabsTitleSlot"></slot>
        </div>
        <div>
            <slot name="tabsButtonSlot"></slot>
        </div>
    </nav>
    <div bind:this={activeCellElementRef} class="tabsActiveCellContainer">
        <div class="tabSlot"></div>
    </div>
    <div class="tabsContent">
        {#each items as item}
            {#if activeTabCode === item.code}
                <svelte:component this={item.component} {...item.componentProps ?? {}}/>
            {/if}
        {/each}
    </div>
</div>
<style>.tabsRoot {
  position: relative;
}
.tabsRoot ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.tabsRoot ul li {
  padding: 0.5rem;
  min-width: 48px;
  cursor: pointer;
}
.tabsRoot ul li.active {
  font-weight: bold;
}
.tabsRoot .tabsNav {
  padding: 0.25rem 0;
  gap: 1rem;
  border-bottom: 1px solid var(--theme-border_color);
}
.tabsRoot .tabsContent {
  border: 1px solid var(--theme-border_color);
  border-top: 1px solid transparent;
  border-radius: 3px;
  padding: 0.5rem;
  background-color: var(--theme-color-background);
  min-height: 96px;
}
.tabsRoot .tabsActiveCellContainer {
  position: absolute;
  height: 4px;
  transition: all 0.25s;
}
.tabsRoot .tabsActiveCellContainer .tabSlot {
  border-radius: 6px;
  height: 4px;
  background-color: var(--theme-color-primary);
  width: 100%;
}</style>
