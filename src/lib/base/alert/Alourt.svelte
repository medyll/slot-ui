<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte/internal';
	import Divider from '$lib/base/divider/Divider.svelte';
	import Button from '$lib/base/button/Button.svelte';

	export let isOpen: string = 'red';

	export let title = '提示';
</script>

{#if isOpen}
	<div>i am</div>
{/if}
