<svelte:options accessors />

<script lang="ts">
	//
	import type { Data } from '$lib/index.js';

	export let name: string | undefined = undefined;
	export let checked: boolean = false;
	export let disabled: boolean = false;

	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;
	export let style: string = '';

	export let metaData: Data = {};
	export let onChange: (val: boolean, metaData: Data) => void = (
		val: boolean,
		metaData: Data
	) => {};

	let hiddenRef: HTMLInputElement;
</script>

<input bind:this={hiddenRef} {name} id={name} value={checked} type="hidden" />
<label bind:this={element} for="_{name}" class="switch {className}" {style}>
	<slot name="label" />
	<div class="switchGutter">
		<input
			on:change={(event) => {
				if (hiddenRef) hiddenRef.value = event.currentTarget.checked;
				onChange(event.currentTarget.checked, metaData);
			}}
			id="_{name}"
			{checked}
			{disabled}
			type="checkbox"
		/>
		<div class="switchHandle"><slot /></div>
	</div>
</label>
..

<style lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';

	@import './switch.scss';
</style>
