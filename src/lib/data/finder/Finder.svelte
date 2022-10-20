<svelte:options accessors={true}  />
<script lang="ts"> 
	import Button from '$lib/base/button/Button.svelte';
	import Input from '$lib/form/input/Input.svelte';
	import { dataOp } from '$lib/engine/utils.js';
	import type { UsePopperProps } from '$lib/ui/popper/usePopper.js';
	import Popper from '$lib/ui/popper/Popper.svelte';
	import Menu from '$lib/ui/menu/Menu.svelte';
	import MenuItem from '$lib/ui/menu/MenuItem.svelte';
	import { onMount } from 'svelte';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;

	/** initial data to look in */
	export let data: any = [];
	/** default field to be used, can be * */
	export let defaultField = '*';
	/** show the opener button for the choice of fields */
	export let showSortMenu: boolean = false;
	/** search mode : exact or partial match*/
	export let mode: 'exact' | 'partial' = 'partial';
	/** external bind use, to read filtered data */
	export let filteredData: any[] = data;

	let searchString: string;
	let container: HTMLDivElement;

	const doFind = <T = Record<string, any>>(list: T[], kw: string, field: string) => {
		let results: any[];
		// if kw empty
		if (!kw) {
			results = data;
		} else {
			results =
				mode === 'exact' ? dataOp.filterList(list, kw, field) : dataOp.searchList(list, kw, field); // filterList(list, kw, field);
		}
		return results;
	}; 

	let popperOpen: boolean;

	$: dataKeys = Object.keys(data[0] || {}).filter(r=>['string','number'].includes(typeof data?.[0]?.[r])).sort((a: string, b: string) => {
		return a > b ? 1 : a < b ? -1 : 0;
	});

	$: filteredData = (!searchString) ? data : doFind(data, searchString, defaultField);

	onMount(()=>{

		return ()=>{
			 
		} 
	})

</script>

<container
	bind:this={container}
	on:clickAway={() => {
		popperOpen = false;
	}}
>
	<Input
		bind:value={searchString}
		bind:element
		placeholder="find by {defaultField} {mode}"
		type="search"
		inputType="search"
		size="auto"
		class={className}
		{...$$restProps}
	/>
	{#if showSortMenu}
		<Button
			on:click={(event) => {
				event.preventDefault();
				popperOpen = !popperOpen;
			}}
			naked
			size="tiny"
			icon="chevron-{popperOpen ? 'up' : 'down'}"
			iconSize="small"
		/>
	{/if}
</container>
{#if popperOpen}
	<Popper code="ui" parentNode={container} position="BC" stickToHookWidth={true}>
		<Menu style="max-height:350px;overflow:auto;width:100%;" density="default">
			<MenuItem
				divider={true}
				text="strict"
				on:click={() => {
					if (mode === 'exact') {
						mode = 'partial';
					} else {
						mode = 'exact';
					}
				}}
			>
				<div slot="actionSlot" class="pad-r-1">
					<input type="checkbox" checked={mode === 'exact'} style="display:block;margin:0" />
				</div>
				strict
			</MenuItem>
			<MenuItem
				text="strict"
				on:click={() => {
					defaultField = '*';
				}}
			>
				<div slot="actionSlot" class="pad-r-1">
					{#if defaultField === '*'}
						<input type="checkbox" checked={defaultField === '*'} style="display:block;margin:0" />
					{/if}
				</div>
				{'*'}
			</MenuItem>
			{#each dataKeys as kk}
				<MenuItem
					text="strict"
					on:click={() => {
						defaultField = kk;
					}}
				>
					<div slot="actionSlot" class="pad-r-1">
						{#if defaultField === kk}
							<input type="checkbox" checked={defaultField === kk} style="display:block;margin:0" />
						{/if}
					</div>
					{kk}
				</MenuItem>
			{/each}
		</Menu>
	</Popper>
{/if}

<style global lang="scss">
	@import "../../styles/slotui-vars.scss";
	@import "../../styles/presets.scss";
	container {
		display: inline-flex;
		gap: 0.25rem;
	}
</style>
