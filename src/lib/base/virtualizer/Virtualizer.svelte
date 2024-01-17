<script lang="ts">
	// from svelte-virtual-list ([demo](https://svelte.dev/repl/f78ddd84a1a540a9a40512df39ef751b))
	import { onMount, tick } from 'svelte';
	import { createEventForwarder } from '$lib/engine/eventForwarder.js';
	import { get_current_component, onDestroy } from 'svelte/internal';
	import { browser } from '$app/environment';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	export let style: string = '';
	/*  end slotUi exports*/

	// props
	export let data: any[] = [];
	export let height = '100%';
	export let itemHeight: number | undefined = undefined;

	let foo;

	export let start: number = 0;
	export let end: number = 0;

	// local state
	let height_map = [];
	let rows: NodeList;

	let viewport: HTMLElement;
	let contents: HTMLElement;
	let viewport_height = 0;
	let visible: any[];
	let mounted: boolean;

	let top = 0;
	let bottom = 0;
	let average_height: number;

	$: if (mounted) {
		visible = data.slice(start, end).map((data, i) => {
			return { index: i + start, data };
		});
	}

	// whenever `data` changes, invalidate the current heightmap
	$: if (mounted && rows) refresh(data, viewport_height, itemHeight, rows);

	$: scrollTop = viewport?.scrollTop;

	async function refresh(data: any, viewport_height: number, itemHeight: number, rows: NodeList) {
		//const { scrollTop } = viewport;

		await tick(); // wait until the DOM is up to date

		let content_height = top - scrollTop;
		let i = start;

		while (content_height < viewport_height + 10 && i < data.length) {
			let row = rows?.[i - start];

			if (!row) {
				end = i + 1;
				await tick(); // render the newly visible row
				row = rows?.[i - start];
			}

			const row_height = (height_map[i] = itemHeight || row?.getBoundingClientRect().height);
			content_height += row_height;
			i += 1;
		}

		// set end
		end = i; // triggers visible F

		const remaining = data.length - end;
		average_height = (top + content_height) / end;

		bottom = remaining * average_height;
		height_map.length = data.length;
	}

	// record scroll, set start value
	async function handle_scroll() {
		const { scrollTop } = viewport;

		const old_start = start;

		for (let v = 0; v < rows.length; v += 1) {
			height_map[start + v] = itemHeight || rows[v].offsetHeight;
		}

		let i = 0,
			y = 0;

		while (i < data.length) {
			const row_height = height_map[i] || average_height;
			if (y + row_height > scrollTop) {
				start = i;
				top = y;

				break;
			}

			y += row_height;
			i += 1;
		}

		while (i < data.length) {
			y += height_map[i] || average_height;
			i += 1;

			if (y > scrollTop + viewport_height) break;
		}

		end = i;

		const remaining = data.length - end;
		average_height = y / end;

		while (i < data.length) height_map[i++] = average_height;
		bottom = remaining * average_height;

		// prevent jumping if we scrolled up into unknown territory
		if (start < old_start) {
			await tick();

			let expected_height = 0;
			let actual_height = 0;

			for (let i = start; i < old_start; i += 1) {
				if (rows[i - start]) {
					expected_height += height_map[i];
					actual_height += itemHeight || rows[i - start].offsetHeight;
				}
			}

			const d = actual_height - expected_height;
			viewport.scrollTo(0, scrollTop + d);
		}

		// TODO if we overestimated the space these
		// rows would occupy we may need to add some
		// more. maybe we can just call handle_scroll again?
	}

	// trigger initial refresh
	onMount(async () => {
		mounted = true;
		await tick();
		rows = contents.querySelectorAll('*:not([data-header])');
		await tick();
		return () => {
			visible = [];
			mounted = false;
			data = [];
		};
	});

	onDestroy(() => {
		visible = [];
		mounted = false;
		data = [];
		handle_scroll = undefined;
	});
</script>

<viewport
	use:forwardEvents
	bind:offsetHeight={viewport_height}
	bind:this={viewport}
	on:scroll={handle_scroll}
	style="height: {height};{style}"
>
	<div bind:this={contents} style="padding-top: {top}px; padding-bottom: {bottom}px;">
		<div data-header style="position:sticky;top:0;z-index:10">
			<slot name="virtualizeHeaderSlot" />
		</div>
		{#if browser && visible !== undefined}
			{#each visible as row}
				<slot item={row?.data ?? {}}>Missing content</slot>
			{/each}
		{/if}
	</div>
</viewport>

<style>
	viewport {
		position: relative;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		display: block;
	}
</style>
