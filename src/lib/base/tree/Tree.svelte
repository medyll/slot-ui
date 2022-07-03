<svelte:options accessors={true} />

<script lang="ts">
	import { trans2Tree } from './tree.utils';
	import type { PathDataType, TreeItemType } from './types';
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component } from 'svelte/internal';
	import Icon from '../icon/Icon.svelte';
	import type { Data } from '$types';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());

	export let paths: PathDataType[] = [];
	export let pathField: string = 'path';
	export let data: Data[] = [];

	let finalPaths: TreeItemType[];

	// private use
	export let pathes: TreeItemType[] = trans2Tree(paths, pathField);

	export let level: number = 0;

	function handleCheck(dataObj: TreeItemType) {
		console.log('', dataObj.data);
	}

	function toggle(path: string) {
		visibleChildChild[path] = !visibleChildChild[path];
	}

	let visibleChildChild: Record<string, boolean> = {};
	export let selectedCategory: string = '';

	finalPaths = trans2Tree(paths, pathField);
	//
	if (finalPaths.length) console.log({ finalPaths });
</script>

<div bind:this={element} class="treeRoot {className}" use:forwardEvents>
	<!-- {selectedCategory} -->
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
				class="pad-1 gap-tiny  cell w-full"
			>
				<div class="cellArrow">
					{#if pat?.children?.length}
						<Icon icon="chevron-{visibleChildChild[pat.path] ? 'down' : 'right'}" fontSize="tiny" />
					{/if}
				</div>
				<div class="cellTitleGutter">
					<div>
						<input
							on:click={(event) => {
								event.stopPropagation();
								handleCheck(pat);
							}}
							type="checkbox"
							style="display:block;"
						/>
					</div>
					<slot item={pat}><div>{pat.name} {level}</div></slot>
				</div>
			</div>
			<div
				data-category-children={pat.path}
				style="display:{visibleChildChild[pat.path] ? '' : 'none'};"
			>
				{#if pat?.children?.length}
					<svelte:self level={level + 1} bind:data bind:selectedCategory pathes={pat.children} />
				{/if}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.cell {
		border: 1px solid transparent;
		padding-left: var(--tree-level);
		border-radius: var(--radius-tiny);
		display: flex;
		align-items: center;
		cursor: pointer;
		.cellArrow {
			width: 16px;
			text-align: center;
		}
		.cellTitleGutter {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		&:hover {
			border: 1px solid var(--theme-color-foreground-alpha-high);
			background-color: var(--theme-color-paper);
		}
		&[data-selected='true'] {
			border: 1px solid var(--theme-color-primary);
			background-color: var(--theme-color-primary-alpha-high);
		}
	}

	.treeRoot {
		.notter {
			border: 1px solid var(--theme-border_color);
			border-radius: 6px;
			background-color: var(--theme-color-primary);
			padding: 0.125rem;
		}
	}
</style>
