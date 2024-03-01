<svelte:options accessors={true} />

<script lang="ts">
	import {
		custom_event,
		get_current_component,
		onMount,
		type SvelteComponentDev
	} from 'svelte/internal';
	import { stickTo, type StickToPositionType } from '$lib/uses/stickTo/stickTo.js';
	import { clickAway } from '$lib/uses/clickAway/clickAway.js';
	import { popperList } from '$lib/ui/popper/actions.js';
	import { createEventForwarder } from '$lib/engine/eventForwarder.js';

	/** popper HTMLDivElement */
	export let element: Element | undefined = undefined;
	let className = '';
	export { className as class };
	const forwardEvents = createEventForwarder(get_current_component());
	let zIndex;

	export let code: string | undefined = undefined;
	export let parentNode: HTMLElement | undefined = undefined;
	export let stickToHookWidth: boolean = false;
	export let component: SvelteComponentDev | undefined = undefined;
	export let componentProps: {} | undefined = {};
	export let position: StickToPositionType | undefined = 'BC';
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
		toggle: () => {
			console.log('toggle');
		},
		show: () => {
			console.log('show');
		},
		hide: () => {
			console.log('hide');
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
		if (autoClose) isOpen = false;
	};

	let mounted: boolean = false;
	onMount(() => {
		// who is the parent for stickTo ??
		if (parentNode) {
		} else if ($$slots.holderSlot || $$slots.popperHolder) {
			// if holderSlot, then make it the stickTo parentNode
			parentNode = holderSlotRef ?? document.body;
		} else {
			// if no props parentNode, use element.parentNode
			parentNode = element?.parentElement ?? document.body;
		}
		mounted = true;
	});

	export const useStickTo = (node) => {
		if (position) {
			stickTo(node, { parentNode, position: position, stickToHookWidth });
		}
	};

	const makeOnTop = () => {
		let max = Math.max(
			...Array.from(document.querySelectorAll('body *'), (el) =>
				parseFloat(window.getComputedStyle(el).zIndex)
			).filter((zIndex) => !Number.isNaN(zIndex)),
			0
		);

		return max + 1;
	};

	let siblings: HTMLCollection | any[] = [];

	$: siblings = Array.prototype.slice.call(element?.parentElement?.children ?? []) ?? [];

	$: zIndex = siblings?.reduce((prev, val) => {
		// @ts-ignore
		return val?.style?.zIndex >= prev ? val?.style?.zIndex + 1 : prev;
	}, 0);
</script>

{#if $$slots.popperHolder || $$slots.holderSlot}
	<div bind:this={holderSlotRef} style="position:relative;display:inline-block">
		<slot name="popperHolder"><slot name="holderSlot" /></slot>
	</div>
{/if}
{#if parentNode && ((isOpen && autoClose) || !autoClose)}
	<div
		bind:this={element}
		class="popper {className}"
		on:popper:close={actions.destroy}
		on:click
		use:clickAway={{ action: clickedAway }}
		use:stickTo={{ parentNode, position, stickToHookWidth }}
		use:forwardEvents
		{style}
		style:zIndex={makeOnTop()}
	>
		<slot>
			{#if mounted}
				{#if component}
					<!-- <svelte:component this={component} {...componentProps} /> -->
				{/if}
				{#if content}
					{content}
				{/if}
			{/if}
		</slot>
	</div>
{/if}

<style global lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
	.popper {
		border-radius: var(--css-popper-radius, var(--radius-tiny));
		overflow: hidden;
		position: fixed;
		box-shadow: var(--box-shad-4);
		background-color: var(--sld-color-background-alpha-mid);
		backdrop-filter: blur(30px);
		display: inline-block;
		top: 0;
		z-index: 30000;
		&::popover-open {
			border: 1px color red;
			margin: none !important;
			padding: none !important;
		}
	}

	.popper:popover-open {
		border: 1px color red;
		margin: none !important;
		padding: none !important;
	}
</style>
