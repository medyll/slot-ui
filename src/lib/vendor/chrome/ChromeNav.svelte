<script lang="ts">
	import { getContext } from 'svelte';
	let name = getContext('name');

	/*  common slotUi exports*/
	let className: string = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	/*  end slotUi exports*/
</script>
