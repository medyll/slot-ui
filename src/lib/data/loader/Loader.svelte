<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '$lib/base/icon/Icon.svelte';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	export let style: string = '';

	export let status: 'loading' | 'success' | 'error' | 'empty' | undefined;
	export let showSuccess: boolean = true;
	/** @deprecated */
	export let isLoading: boolean = false;
	/** @deprecated */
	export let isError: boolean = false;
	/** @deprecated */
	export let isEmpty: boolean = false;

	/** icon sources */
	export let loadingIcon: string = 'mdi:loading';
	export let errorIcon: string = 'mdi:alert-circle-outline';
	export let emptyIcon: string = 'mdi:database-search-outline';
	export let successIcon: string = 'clarity:success-standard-line';

	/** message to display */
	export let message: string | undefined = undefined;
	/** used if props.message   is omitted */
	export let messages: any = {
		loading: 'Loading',
		error: 'An error occurred',
		empty: 'Empty results',
		success: 'Success'
	};

	const msgType = isLoading ? 'loading' : isError ? 'error' : isEmpty ? 'empty' : '';

	$: finalMessage = message ?? messages?.[status] ?? messages?.[msgType];

	let timer: any;
	$: if (status === 'success') {
		if (!showSuccess) status = undefined;
		else {
			clearTimeout(timer);
			timer = setTimeout(() => {
				status = undefined;
			}, 1250);
		}
	} else {
		clearTimeout(timer);
	}
</script>

{#key status}
	{#if status || isLoading || isError || isEmpty}
		<div bind:this={element} transition:fade|global class="loaderRoot {className}" {style}>
			<div class="loaderBox">
				{#if status === 'loading' || isLoading}
					<slot name="loaderLoading">
						<Icon
							style="color:var(--sld-color-primary)"
							icon={loadingIcon}
							fontSize="medium"
							rotate
						/>
					</slot>
				{/if}
				{#if status === 'error' || isError}
					<slot name="loaderError">
						<Icon style="color:orange;" icon={errorIcon} fontSize="medium" />
					</slot>
				{/if}
				{#if showSuccess && status === 'success'}
					<slot name="loaderSuccess">
						<Icon style="color:green;" icon={successIcon} fontSize="medium" />
					</slot>
				{/if}
				{#if status === 'empty' || isEmpty}
					<slot name="loaderEmpty">
						<Icon icon={emptyIcon} fontSize="medium" />
					</slot>
				{/if}

				{#if Boolean(finalMessage)}
					<slot name="loaderMessage">
						<div class="message">{finalMessage}</div>
					</slot>
				{/if}
			</div>
		</div>
	{/if}
{/key}

<style lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
	.loaderRoot {
		position: absolute;
		top: 0;
		background-color: var(--sld-color-background-alpha-mid);
		height: 100%;
		min-width: 128px;
		max-width: 100%;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		left: 50%;
		transform: translate(-50%, 0);

		.loaderBox {
			box-shadow: var(--box-shad-1);
			border-radius: var(--radius-tiny);
			border: 1px solid var(--sld-color-foreground-alpha-high);
			padding: 1rem 0;
			min-width: 128px;
			width: 100%;
			margin: 1rem;
			text-align: center;
			background-color: var(--sld-color-background-alpha-mid);
			display: flex;
			flex-direction: column;
			align-items: center;

			.message {
				border-radius: var(--radius-small);
				border-bottom: 1px solid;
				border-color: var(--sld-color-primary);
				padding: var(--box-density-1) var(--box-density-2);
				display: inline-block;
				box-shadow: var(--box-shad-1);
			}
		}
	}
</style>
