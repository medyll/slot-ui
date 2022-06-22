<script lang="ts">
	import Divider from '$lib/base/divider/Divider.svelte';
	import { fade } from 'svelte/transition';
	import Icon from '../icon/Icon.svelte';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	export let style: string = '';

	export let isLoading: boolean = false;
	export let isError: boolean = false;
	export let isEmpty: boolean = false;

	/** icon sources */
	export let iconisLoading: string = 'spinner';
	export let iconisError: string = 'alert-circle-outline';
	export let iconisEmpty: string = 'database-search-outline';

	/** message to display */
	export let message: string | undefined = undefined;
	/** used if message props is omitted */
	export let messages: any = {
		isLoading: 'loading',
		isError: 'an error occured',
		isEmpty: 'empty results'
	};

	const msgType = isLoading ? 'isLoading' : isError ? 'isError' : isEmpty ? 'isEmpty' : '';

	const finalMessage = message ?? messages?.[msgType];
</script>

{#if isLoading || isError || isEmpty}
	<div bind:this={element} transition:fade class="root {className}" style="{style}">
		<div class="loaderBox">
			{#if isLoading}
				<Icon
					style="color:var(--theme-color-primary)"
					class="rotate"
					icon={iconisLoading}
					fontSize="big"
				/>
			{/if}
			{#if isError}
				<Icon style="color:orange;" iconFamily="mdi" icon={iconisError} fontSize="big" />
			{/if}
			{#if isEmpty}
				<Icon iconFamily="mdi" icon={iconisEmpty} fontSize="big" />
			{/if}
			<Divider shadow />
			<div class="message">{finalMessage}</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.root {
		position: absolute;
		top: 0;
		background-color: var(--theme-color-background-alpha);
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.loaderBox {
			box-shadow: var(--box-shad-5);
			border-radius: var(--radius-tiny);
			border: 1px solid var(--theme-color-foreground-alpha-high);
			padding: 2rem 0;
			min-width: 256px;
			margin: 1rem;
			text-align: center;
			background-color: var(--theme-color-background-alpha);
			.message {
				background-color: var(--theme-color-paper);
				padding: var(--box-density-1) var(--box-density-2);
				display: inline-block;
				box-shadow: var(--box-shad-1);
			}
		}
	}
</style>
