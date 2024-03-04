<script lang="ts">
	let className: string = '';
	export { className as class };
	export let data: any[] = [];
	export let naked = true;
	export let title: string = '';

	function cast(dataIn: any[]) {
		if (typeof data == 'object' && !Array.isArray(data)) {
			return Object.keys(dataIn);
		}

		return data;
	}
	function castValue(dataIn: any) {
		if (typeof data == 'object' && !Array.isArray(data)) {
			return data[dataIn];
		}

		return dataIn;
	}
</script>

{#if naked}
	<slot name="title">{title}</slot>
	{#each cast(data) ?? [] as item, idx}
		<slot item={castValue(item)} {idx} />
	{/each}
{:else}
	<slot name="title">{title}</slot>
	<div class={className}>
		{#each cast(data) ?? [] as item, idx}
			<slot item={castValue(item)} {idx} />
		{/each}
	</div>
{/if}
