<svelte:options accessors={true} />

<script lang="ts">
	import Button from '$lib/base/button/Button.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';
	import Switch from '$lib/form/switch/Switch.svelte';
	import type { DemoerParameters } from './types.js';

	export let title: string | undefined = undefined;
	export let parameters: Record<string, Record<string, DemoerParameters>> = {};
	export let componentArgs: Record<string, any> | undefined = {};
	export let component: any | undefined = undefined;
	export let multiple: Record<string, any> | undefined = {};

	let activeParams = { ...componentArgs };
</script>

{#if title}
	<div class="pad">{title}</div>
{/if}

<div class="pad flex-v gap-small">
	<div class="flex-h marg-b-2">
		<div class="pad-2 border-r flex-v flex-align-bottom">
			<Icon icon="cib:svelte" />
		</div>
		<div class="pad-2">
			{#if multiple}
				<div class="flex-h flex-align-middle flex-wrap gap-medium">
					{#each Object.keys(multiple) as tiple}
						{#each Object.keys(multiple[tiple]) as params}
							<div>
								<slot
									activeParams={{
										...activeParams,
										...multiple[tiple][params]
									}}
								>
									<svelte:component this={component} {componentArgs} {...multiple[tiple][params]} />
								</slot>
								<div class="pad-2 text-center">{tiple} {params}</div>
							</div>
							<div class="border-r pad-tb-4" />
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
	<div class="flex-h marg-t-2">
		<div class="pad-2 border-r">
			<Icon icon="clarity:command-line" />
		</div>
		<div class=" pad flex-h flex-wrap flex-align-middle gap-small">
			<table style="width:100%;table-layout:auto;border-spacing: 0.5rem">
				<tbody>
					{#each Object.keys(parameters) as parameter}
						<tr>
							<td class="w-medium-min text-bold">{parameter}</td>
							<td>{parameters?.[parameter]?.type}</td>
							<td>
								<div class="flex flex-align-middle gap-small w-mid-min">
									{#if parameters?.[parameter]?.type === 'boolean'}
										<div>
											<Switch
												name={crypto.randomUUID()}
												checked={activeParams[parameter]}
												on:change={(args) => {
													activeParams[parameter] = args.currentTarget.checked;
												}}
											/>
										</div>
									{:else}
										{#each parameters?.[parameter]?.values ?? [] as value}
											{@const finalValue = value === undefined ? 'unset' : value}
											<Button
												class="w-small-min"
												naked
												showChip={activeParams[parameter] === value}
												on:click={() => {
													activeParams[parameter] = value;
												}}
											>
												{finalValue}
											</Button>
											<div class="border-r pad-tb-1" />
										{/each}
									{/if}
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
