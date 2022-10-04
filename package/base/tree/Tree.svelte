<svelte:options accessors={true} />

<script>import { trans2Tree } from './tree.utils';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
import Icon from '../icon/Icon.svelte';
import { dataOp } from '../../engine/utils';
import Finder from '../../data/finder/Finder.svelte';
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
export let data = [];
export let paths = [];
export let pathField = 'path';
let finalPaths;
// private use
export let pathes = trans2Tree(paths, pathField);
// private use
export let level = 0;
// private use
export let selectedDataKeys = [];
/** exported data */
export let selectedData = [];
/** exported selected paths */
export let selectedPathes = [];
/** the split we use to build hierarchy */
export let splitter = '/';
let visibleChildChild = {};
export let selectedCategory = '';
$: finalPaths = trans2Tree(paths, pathField);
$: selectedData = selectedDataKeys.map((dataKey) => {
    return dataOp.filterListFirst(paths, dataKey, pathField);
});
$: selectedPathes = selectedDataKeys;
function handleCheck(dataObj, act) {
    if (act) {
        selectedDataKeys = [...selectedDataKeys, dataObj.path].filter((x) => x);
    }
    else {
        delete selectedDataKeys[selectedDataKeys?.indexOf(dataObj.path)];
        selectedDataKeys = [...selectedDataKeys].filter((x) => x);
    }
    // select all children down
    setChildrenState(dataObj.children, act);
    setParentState(dataObj, act);
}
function setParentState(dataObj, act) {
    const arrP = dataObj.path.split(splitter);
    arrP.forEach((path, index) => {
        let checkPath = arrP.slice(0, index).join(splitter);
        if (act) {
            selectedDataKeys = [...selectedDataKeys, checkPath].filter((x) => x);
        }
        else {
            delete selectedDataKeys[selectedDataKeys?.indexOf(checkPath)];
            selectedDataKeys = [...selectedDataKeys].filter((x) => x);
        }
    });
}
function setChildrenState(dataObj, act) {
    if (dataObj.length) {
        dataObj.forEach((treeItem) => {
            if (act) {
                selectedDataKeys = [...selectedDataKeys, treeItem.path].filter((x) => x);
            }
            else {
                delete selectedDataKeys[selectedDataKeys?.indexOf(treeItem.path)];
                selectedDataKeys = [...selectedDataKeys].filter((x) => x);
            }
            setChildrenState(treeItem.children, act);
        });
    }
}
function toggle(path, visibility) {
    visibleChildChild[path] = visibility ?? !visibleChildChild[path];
}
</script>

<div bind:this={element} class="treeRoot {className}" use:forwardEvents>
	<!-- {#if level === 0}
		<Finder />
	{/if} -->
	{#each pathes as pat, k}
		<div data-category={pat.path} class=" ">
			<div
				data-category-title={pat.path}
				data-selected={selectedCategory === pat.path}
				on:click={(event) => {
					selectedCategory = pat.path;
					toggle(pat.path);
				}}
				title={pat.path}
				style="--tree-level:{level * 2}rem"
				class="gap-tiny  cell"
			>
				<div class="cellArrow">
					{#if pat?.children?.length}
						<Icon icon="chevron-{visibleChildChild[pat.path] ? 'down' : 'right'}"   />
					{/if}
				</div>
				<div class="cellTitleGutter">
					<div>
						<input
							on:click={(event) => {
								event.stopPropagation();
								handleCheck(pat, event?.currentTarget?.checked);
							}}
							type="checkbox"
							style="display:block;border:1px solid red;"
							checked={Boolean(selectedDataKeys.includes(pat.path))}
						/>
					</div>
					<slot item={pat}><div>{pat.name}</div></slot>
				</div>
			</div>
			<div
				data-category-children={pat.path}
				style="display:{visibleChildChild[pat.path] ? '' : 'none'};"
			>
				{#if pat?.children?.length}
					<svelte:self
						level={level + 1}
						bind:selectedDataKeys
						bind:data
						bind:selectedCategory
						pathes={pat.children}
					/>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>.cell {
  border: 1px solid transparent;
  padding: 0.5rem;
  padding-left: var(--tree-level);
  border-radius: var(--radius-tiny);
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
}
.cell .cellArrow {
  width: 16px;
  text-align: center;
}
.cell .cellTitleGutter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.cell:hover {
  border: 1px solid var(--theme-color-foreground-alpha-high);
  background-color: var(--theme-color-paper);
}
.cell[data-selected=true] {
  border: 1px solid var(--theme-color-primary);
  background-color: var(--theme-color-primary-alpha-high);
}</style>
