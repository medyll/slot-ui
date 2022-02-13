<script context="module" lang="ts">
	import type { ElementProps } from '../list/types';
</script>

<script lang="ts">
	export let density: ElementProps['density'];
	export let direction: 'vertical' | 'horizontal' = 'horizontal';
	export let extension: ElementProps['expansion'];
</script>

<hr />

<style>
	hr {
		margin: 0 8px;
		border: none;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		background-color: rgba(255, 255, 255, 0.1);
		display: block;
	}
</style>
