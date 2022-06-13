<svelte:options accessors={true} />

<script lang="ts">
	import type { SvelteComponentDev } from 'svelte/internal';
	import { stickTo } from '../../uses/stickTo/stickTo';
	import { clickAway } from '../../uses/clickAway/clickAway';
	import { popperList } from './actions';
	import type { PopperPositionType } from './types';
	import Button from '$lib/base/button/Button.svelte';

	let thisRef: HTMLElement;
	let zIndex;

	export let code: string;
	export let parentNode: HTMLElement;
	export let component: SvelteComponentDev | undefined = undefined;
	export let componentProps: {} | undefined = {};
	export let position: PopperPositionType = 'B';
	export let content: any | undefined = undefined;

	export const toggle = function () {
		popperList[code].$destroy();
	};
	export const hide = function () {
		console.log('hide');
	};
	export const show = function () {
		console.log('show');
	};

	const actions = {
		destroy: () => {
			popperList[code]?.$destroy();
		}
	};
	/** @deprecated */
	export const destroy = function () {
		console.error('deprecated, use actions.destrtoy in caller');
		popperList[code]?.$destroy();
	};

	let siblings: HTMLCollection | any[] = [];

	$: siblings = Array.prototype.slice.call(thisRef?.parentElement?.children ?? []) ?? [];

	$: zIndex = siblings?.reduce((prev, val) => {
		// @ts-ignore
		return val?.style?.zIndex >= prev ? val?.style?.zIndex + 1 : prev;
	}, 0);
</script>

<div
	bind:this={thisRef}
	class="popper"
	on:popper:close={actions.destroy}
	use:clickAway={{ action: actions.destroy }}
	use:stickTo={{ parentNode, position: position }}
>
	<slot>
		{#if component}
			<svelte:component this={component} {...componentProps} />
		{/if}
		{#if content}
			{content}
		{/if}
	</slot>
</div>

<style lang="scss">
	.popper {
		z-index: 10000;
		border-radius: var(--css-popper-radius, var(--radius-small));
		overflow: hidden;
		position: absolute;
		box-shadow: var(--box-shad-4);
		background-color: var(--theme-color-background-alpha);
		backdrop-filter: blur(10px);
	}
</style>
