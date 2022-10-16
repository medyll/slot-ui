<script lang="ts">
	import type { ColumnerStoreType } from './types.js';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const columner = writable<ColumnerStoreType>({});
	setContext('columner', columner);
</script>

<div class="columner"  {...$$restProps}>
	<slot />
	<!-- <div class="flex-main">
		<pre>{JSON.stringify($columner, null, ' ')}</pre>
	</div> -->
</div>

<style lang="scss">
	@import "../../styles/slotui-vars.css";
	@import "../../styles/presets.scss";
	.columner {
		display: flex;
		height: 100%; 
		position: relative;
	}
</style>
