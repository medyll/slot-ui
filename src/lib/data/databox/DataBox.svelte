<script lang="ts">
	export let loading: boolean = false;
	export let error: boolean = false;

	let display = !(loading ?? error);
</script>

<div class="dataBox">
	{#if loading}
		<div class="loading" />
	{/if}
	{#if error}
		<div class="error" />
	{/if}
	{#if display}
		<slot />
	{/if}
</div>

<style lang="scss">
	.dataBox {
		position: relative;
		.loading {
			position: relative;
		}
		.error {
			position: relative;
		}
	}
</style>
