<script lang="ts">
	import type { ElementProps } from '$typings/index.js';

	import Input from '$lib/base/input/Input.svelte';
	type ParameterType = {
		sizes: ElementProps['sizeType'][];
		inputHeight: ElementProps['inputHeight'][];
	};

	let parameters: ParameterType = {
		sizes: ['tiny', 'small', 'medium', 'large'],
		inputHeight: ['tiny', 'small', 'old', 'large']
	};
</script>

<div class="flex-v gap-large">
	<h5>sized with inputs</h5>
	<div class="flex-h flex-wrap gap-small">
		{#each parameters.sizes as size}
			<div class="flex-v gap-small">
				<div>{size}</div>
				<div><Input value={size} {size}>{size}</Input></div>
			</div>
		{/each}
	</div>
	<h5>sized height inputs</h5>
	<div class="flex-h flex-wrap gap-small">
		{#each parameters.inputHeight as height}
			<div class="flex-v gap-small">
				<div>height {height}</div>
				<div><Input icon="search" value="value" {height}>...</Input></div>
			</div>
		{/each}
	</div>
	<h5>start icon or slot</h5>
	<div class="flex-h flex-wrap gap-small">
		<div><Input icon="user" value="value">...</Input></div>
		<div><Input icon="search" value="value">...</Input></div>
	</div>
	<h5>end icon or slot</h5>
	<div class="flex-h flex-wrap gap-small">
		<div><Input endIcon="user" value="value">...</Input></div>
		<div><Input endIcon="search" value="value" /></div>
	</div>
</div>
