<svelte:options accessors={true} />

<script lang="ts">
	import Button from '../button/Button.svelte';
	import Icon from '../icon/Icon.svelte';
	export let parameters: Record<string, Record<string, any>> = {};
	export let componentArgs: any;
	export let component: any;

	let activeParams = { ...componentArgs };
</script>

<div class="pad flex-v gap-small">
	<div class="flex-h  marg-b-2">
		<div class="pad-2 border-r flex-v flex-align-bottom">
			<Icon icon="cib:svelte" />
		</div>
		<div class="pad-2">
			<slot {activeParams}>
				<svelte:component this={component} {componentArgs} />
			</slot>
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
					<div class="w-small  ">{parameters?.[parameter]?.type}</div>
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
