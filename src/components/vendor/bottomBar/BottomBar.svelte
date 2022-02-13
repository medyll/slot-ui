<script lang="ts">
	import Divider from '../divider/Divider.svelte';
import type { ElementProps } from '../list/types';

	export let density: ElementProps['density'] = 'default';
</script>

<Divider />
<div class="bottomBar density-{density}">
	<slot>bottom bar</slot>
</div>

<style lang="scss">
	.bottomBar.density-tight {
		padding: 0.5rem 0;
		margin: 0.125rem 0;
	}

	.bottomBar.density-default {
		padding: 1rem 0;
		margin: 0.25rem 0;
	}

	.bottomBar.density-kind {
		padding: 1.5rem 0;
		margin: 0.5rem 0;
	}
</style>
