<script lang="ts">
	import type { ColumnerStoreType } from './types';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const columner = writable<ColumnerStoreType>({});
	setContext('columner', columner);
</script>

<div class="columner">
	<slot />
	<div class="flex-main">
		<pre>{JSON.stringify($columner, null, ' ')}</pre>
	</div>
</div>

<style lang="scss">
	.columner {
		display: flex;
	}
</style>
