<script lang="ts">
	import type { Data } from '$types';
	import { custom_event, setContext } from 'svelte/internal';
	import { writable } from 'svelte/store';
	import type { RowType } from './types';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | undefined = undefined;

	export let data: any;

	const dataStore = writable<RowType>({data});
	setContext('dataListRow', dataStore);

	function handleClick(item: Data) {
		const event = custom_event('datalist:click', item, { bubbles: true });
		if (element) element.dispatchEvent(event);
	}

	function handleSelect(item: Data) {
		const event = custom_event('datalist:click', item, { bubbles: true });
		if (element) element.dispatchEvent(event);
	}

</script>

<div
	on:datalist:sort:clicked
	on:click={() => {
		if (data) handleClick(data);
		if (data) handleSelect(data);
	}}
	bind:this={element}
	class="dataListRow {className}"
	 
>
	<slot />
</div>
