<svelte:options accessors={true} immutable={true} />

<script lang="ts">
	import type { IChromeArgs } from '$lib/ui/window/store.js';
	import { getAppWindowStore, windowsStore } from '$lib/ui/window/store.js';
	import { draggable } from '@neodrag/svelte';
	import { onDestroy, onMount } from 'svelte';
	import IconButton from '$lib/base/button/IconButton.svelte';
	import Button from '$lib/base/button/Button.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';

	/** Id of the component's instance */
	export let frameId = '';
	/** the title appears on the handle bar */
	export let title: string = '';
	/** the secondaryTitle appears below the title */
	export let secondaryTitle: string = '';
	/** the description appears somewhere */
	export let description: string = '';
	/** boolean to show the window */
	export let open: boolean = true;
	/** state of the window */
	export let minimized: boolean = false;
	export let maximized: boolean = true;
	/** is on top of others*/
	export let active: boolean = true;

	export let component: any = undefined;
	export let componentProps: any = undefined;
	export let contentHTML: any = undefined;

	/** actions triggered on click*/
	export let onClose: () => void = () => {};
	export let onCancel: () => void = () => {};
	export let onValidate: () => void = () => {};
	/** default opneing position */
	export let defaultPosition: {
		x: number;
		y: number;
	} = { x: 0, y: 0 };

	/** internal use */
	export let self = null;

	/** reference to the component's DOM container */
	let element;
	let activeFrame: string | number;
	let x: number = defaultPosition?.x ?? '100px';
	let y: number = defaultPosition?.y ?? '50px';

	let appWindowStore; 
	let position;

	$: appWindowStore = getAppWindowStore(frameId);

	if (!$appWindowStore) { 
		windowsStore.create({
			frameId,
			title,
			secondaryTitle,
			description,
			open,
			minimized,
			maximized,
			active,
			component,
			componentProps,
			contentHTML,
			onClose,
			onCancel,
			onValidate
		});
	}

	$: position = {
		position: $appWindowStore?.position ?? { x, y }
	};

	$: if (!$appWindowStore?.open) {
		if ($$props.self) $$props.self.$destroy();
	}

	windowsStore.activeFrame.subscribe((value: string | number) => {
		activeFrame = value;
	});

	const dragOptions = {
		handle: '.handle',
		defaultPosition: { x, y },
		onDragStart: (args: { offsetX: number; offsetY: number; domRect: DOMRect }) => {
			// updatePos(args);
			appWindowStore.makeOnTop();
		},
		onDrag: (args) => {},
		onDragEnd: (args: { offsetX: number; offsetY: number; domRect: DOMRect }) => {
			updatePos(args);
		}
	};

	onDestroy(() => {
		// console.log('destroyed !!!');
	});

	onMount(() => {
		if (element.parentNode !== document.body) document.body.appendChild(element);
	});

	function updatePos(args: any) {
		/* $appWindowStore.updatePos({
			x: args.offsetX,
			y: args.offsetY
		}); */
	}

	function handleClick(args: PointerEvent) {
		windowsStore.activeFrame.set(frameId); 
		appWindowStore.makeOnTop();
	}

	function handleClose(args: PointerEvent) {
		appWindowStore.remove();
		if ($$props.self) appWindowStore.remove();
	}
</script>
{#if $appWindowStore?.open}
<div
	bind:this={element}
	class="window shad-3"
	on:click={handleClick}
	style="z-index:{$appWindowStore?.zIndex}"
	use:draggable={{ ...dragOptions, ...position }}
>
	<div class="bar">
		<div class="pad-ii-2">
			<Icon fontSize="small" icon="linux" />
		</div>
		<div class="handle">{$appWindowStore?.title}</div>
		<div class="iconZone">
			<div>
				<Button naked icon="window-minimize" iconFontSize="small" />
			</div>
			<div>
				<Button naked icon="fa-solid:window-maximize" iconFontSize="small" />
			</div>
			<div>
				<Button naked icon="mdi:close" iconFontSize="small" on:click={handleClose} />
			</div>
		</div>
	</div>
	<div>
		<slot>
			{#key $appWindowStore?.component}
			{#if $appWindowStore?.component}
				<svelte:component this={$appWindowStore.component} {...$appWindowStore.componentProps} />
			{/if}
			{/key}
			{#if $appWindowStore?.contentHTML}
				{@html $appWindowStore?.contentHTML}
			{/if}
		</slot>
	</div>
	<div class="buttonZone">
		<Button naked on:click={handleClose}>Close</Button>
		<Button on:click={handleClose}>Validate</Button>
	</div>
</div>
{/if}
<style lang="scss">
	.window {
		display: block;
		position: absolute;
		border-radius: 6px;
		background-color: var(--theme-color-background);
		color: var(--theme-color-text);
		border: 1px solid rgba(255, 255, 255, 0.1);
		min-width: 250px;
		top: 0;
		left: 0;
		overflow: hidden;
		z-index: 70000;
		max-height: 100%;
		.bar {
			display: flex;
			align-items: center;
			text-align: center;
			background-color: #3c3f41;
			color: white;

			.handle {
				//padding: 0.75rem 0.5rem;
				flex: 1;
				cursor: pointer;
			}
		}

		.buttonZone {
			padding: 0.5rem;
			display: flex;
			justify-content: end;
			gap: var(--gap-small, 0.5rem);
		}
	}

	.iconZone {
		display: flex;
		// grid-gap: 0.5rem;

		> {
			color: red;
		}
	}
</style>
