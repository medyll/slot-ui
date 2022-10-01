<svelte:options accessors={true} />

<script lang="ts">
	import Button from '../button/Button.svelte';
	import Icon from '../icon/Icon.svelte';
	export let parameters: Record<string, Record<string, { type?: string; values?: any[] }>> = {};
	export let componentArgs: any;
	export let component: any;
	export let multiple: Record<string, any>;

	let activeParams = { ...componentArgs };

	$: Object.keys(parameters).forEach((parameter) => {
		if (parameter?.type === 'boolean') parameters[parameter].values = [true, false];
	});
</script>

<div class="pad flex-v gap-small">
	<div class="flex-h  marg-b-2">
		<div class="pad-2 border-r flex-v flex-align-bottom">
			<Icon icon="cib:svelte" />
		</div>
		<div class="pad-2">
			{#if multiple}
				<div class="flex-h flex-align-middle flex-wrap gap-medium">
					{#each Object.keys(multiple) as tiple}
						{#each Object.keys(multiple[tiple]) as params}
							<div> 
								<slot activeParams={{...activeParams,[tiple]:params}} >
									<svelte:component   this={component} {componentArgs} {...multiple[tiple][params]} />
								</slot>
								<div class="pad text-center">{tiple} {params}</div>
							</div>
						{/each}
					{/each}
				</div>
			{:else}
				<slot {activeParams}>
					<svelte:component this={component} {componentArgs} />
				</slot>
			{/if}
		</div>
	</div>
	<div class="border-b" />
	<div class="flex-h  marg-t-2">
		<div class="pad-2 border-r">
			<Icon icon="clarity:command-line" />
		</div>
		<div class=" pad flex-h flex-wrap flex-align-middle gap-small">
			{#each Object.keys(parameters) as parameter}
				<div class="flex flex-align-middle gap-small w-mid-min">
					<div class="border-b w-medium-min text-bold  ">{parameter}</div>
					<div class="w-medium  ">{parameters?.[parameter]?.type}</div>
					<div />
					{#each parameters?.[parameter]?.values ?? [] as value}
						<Button
							naked
							showChip={activeParams[parameter] === value}
							on:click={() => {
								activeParams[parameter] = value;
							}}
						>
							{value}
						</Button>
					{/each}
					{#if parameters?.[parameter]?.type === 'object'}
						<svelte:self parameters={parameters?.[parameter]} />
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
