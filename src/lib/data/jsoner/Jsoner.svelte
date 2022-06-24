<script lang="ts">
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component } from 'svelte/internal';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/
	export let data: any = [];

	export let mode: 'array' | 'object' | 'string';

	if (Array.isArray(data)) {
		mode = 'array';
	} else if (typeof data === 'object') {
		mode = 'object';
	} else if (typeof data === 'string') {
		mode = 'string';
	}
</script>

{#if data}
	{#if mode === 'array'}
		<div class="flex-h  w-large flex-wrap border-l">
			- {#each data as kdta, index}
				<div><svelte:self data={kdta} /></div>
			{/each}
		</div>
	{/if}

	{#if mode === 'object'}
		<div class="flex-v   gap-small">
			{#each Object.keys(data) as kdta}
				<div class="flex-v gap-small  flex-align-top">
					<div class="w-medium pad-1 border-b">- {kdta}</div>
					<div style="margin-left:4rem;"><svelte:self data={data[kdta]} /></div>
				</div>
			{/each}
		</div>
	{/if}

	{#if mode === 'string'}
		<div class="pad-1 ">{data}</div>
	{/if}
{/if}
