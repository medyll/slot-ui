<script lang="ts">
	import Icon from '../icon/Icon.svelte';

	export let isLoading: boolean = false;
</script>

{#if isLoading}
	<div class="root h-full w-full theme-bg-paper pos-abs top-0 flex-h flex-align-middle-center">
		<Icon style="color:blue" class="fa fa-rotate" icon="spinner" />
	</div>
{/if}

<style lang="scss">
	.root {
		background-color: var(--theme-color-foreground-alpha);
		backdrop-filter: blur(5px);
	}
</style>
