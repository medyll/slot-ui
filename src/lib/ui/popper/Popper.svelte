<svelte:options accessors={true} />

<script lang="ts">
	import { custom_event, type SvelteComponentDev } from 'svelte/internal';
	import { stickTo, type StickToPositionType } from '../../uses/stickTo/stickTo.js';
	import { clickAway } from '../../uses/clickAway/clickAway.js';
	import { popperList } from './actions.js';
	import type { PopperPositionType } from './types.js';
	import { fade } from 'svelte/transition';

	/** popper HTMLDivElement */
	export let element: HTMLElement | undefined = undefined;
	let className = '';
	export { className as class };
	let zIndex;

	export let code: string | undefined = undefined;
	export let parentNode: HTMLElement | undefined = undefined;
	export let component: SvelteComponentDev | undefined = undefined;
	export let componentProps: {} | undefined = {};
	export let position: StickToPositionType = 'BC';
	export let content: any | undefined = undefined;
	export let style: string | '' = '';


	let holderSlotRef: HTMLElement;
 
	/** The popper will be closed on clickAway*/
	export let autoClose: boolean = false;
	/** binding : The popper will be opened or is opened */
	export let isOpen: boolean = false;

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
		show: () => {
			console.log('show');
		},
		destroy: () => {
			console.log('destroy');
			popperList[code]?.$destroy();
		}
	};

	export const clickedAway = function () {
		const event = custom_event('clickAway', {}, { bubbles: true });
		parentNode?.dispatchEvent(event);
		popperList[code]?.$destroy();
		if (autoClose) {
			isOpen=false
		}
	};

	let siblings: HTMLCollection | any[] = [];

	$: siblings = Array.prototype.slice.call(element?.parentElement?.children ?? []) ?? [];

	$: zIndex = siblings?.reduce((prev, val) => {
		// @ts-ignore
		return val?.style?.zIndex >= prev ? val?.style?.zIndex + 1 : prev;
	}, 0);

	// if holderSlot, then make it the stickTo parentNode
	$: if ($$slots.holderSlot  && element && holderSlotRef) parentNode = holderSlotRef ?? document.body;
	// if no props parentNode, use element.parentNode
	$: if (!$$slots.holderSlot && !parentNode && element) parentNode = element?.parentElement ?? document.body;
 
</script>

{#if $$slots.holderSlot}
<div bind:this={holderSlotRef} style="position:relative">
	<slot name="holderSlot" />
</div>
{/if}
{#if ((isOpen && autoClose) || (!autoClose)) }
<div
	bind:this={element}
	class="popper {className}"
	on:popper:close={actions.destroy}
	use:clickAway={{ action: clickedAway }}
	use:stickTo={{ parentNode, position: position }}
	{style} 
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
{/if}
<style lang="scss">
	.popper {
		z-index: 10000;
		border-radius: var(--css-popper-radius, var(--radius-small));
		overflow: hidden;
		position: absolute;
		box-shadow: var(--box-shad-4);
		background-color: var(--theme-color-background-alpha-low);
		backdrop-filter: blur(10px);
		display: inline-block;
		width: auto;
		top: 0;

	}
</style>
