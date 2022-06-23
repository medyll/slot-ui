<script lang="ts">
	import { autofocus } from '$lib/uses/autofocus/autofocus';
	import { fade, slide } from 'svelte/transition';
	import Button from '../button/Button.svelte';

	/** text displayed on confirm button */
	export let primary: string = 'confirm';
	/** icon displayed on the confirm button */
	export let icon: string = 'check-circle-outline';
	/** color of the icon displayed on the confirm button */
	export let iconColor: string = 'green';

	let initialRef: HTMLElement;
	let contentRef: HTMLElement;

	let step: string = 'initial';
	/** icon to display for back action */
	export let cancelIcon: string = 'chevron-left';

	function handleClickInitial() {
		step = 'confirm';
	}

	function handleClickCancel() {
		step = 'initial';
	}
</script>

{#if step === 'initial'}
	<span in:fade on:click={handleClickInitial} bind:this={initialRef}
		><slot name="initial"><Button primary="action" /></slot></span>
{/if}
{#if step === 'confirm'}
	<span in:fade bind:this={contentRef} class="contentSlot">
		<span on:click={handleClickCancel}
			><Button naked icon={cancelIcon} size="auto" title="cancel" /></span
		>
		<slot><Button {iconColor} {icon}  iconFamily="mdi" size="auto" {primary} focus /></slot>
	</span>
{/if}

<style lang="scss">
	/* .contentSlot {
		display: none;
	} */
</style>
