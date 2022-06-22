<script lang="ts">
	import Icon from '../icon/Icon.svelte';

	export let isLoading: boolean = false;
	export let isError: boolean = false;
	export let isEmpty: boolean = false;

	export let message: string | undefined = undefined
</script>

<div
	class="root h-full w-full  pos-abs top-0 flex-h flex-align-middle-center radius-tiny gap-large"
>
	{#if isLoading}
		<Icon style="color:var(--theme-color-primary)" class="rotate" icon="spinner"  fontSize="big" />
		{Boolean(message) ? message :  "loading"}
	{/if}
	{#if isError}
		<Icon style="color:red" icon="spinner"  fontSize="big" />
		{Boolean(message) ? message :  "error"}
	{/if}
	{#if isEmpty}
		<Icon   iconFamily="mdi" icon="database-search-outline" fontSize="big" />
		{Boolean(message) ? message :  "no results"}
	{/if}
</div>

<style lang="scss">
	.root {
		background-color: var(--theme-color-foreground-alpha-high);
		backdrop-filter: blur(5px); 
	}
</style>
