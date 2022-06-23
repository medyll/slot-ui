<script lang="ts">
	import { autofocus } from '$lib/uses/autofocus/autofocus';
	import { fade, slide } from 'svelte/transition';
	import Button from '../button/Button.svelte';

	/** text displayed on confirm button */
	export let primaryInitial: string = 'action';
	/** icon displayed on the confirm button */
	export let iconInitial: string = '';
	/** color of the icon displayed on the confirm button */
	export let iconColorInitial: string = 'green';

	/** text displayed on confirm button */
	export let primary: string = 'confirm';
	/** icon displayed on the confirm button */
	export let icon: string = 'check-circle-outline';
	/** color of the icon displayed on the confirm button */
	export let iconColor: string = 'green';

	/** action initiated on confirmation*/
	export let action: () => void = () => {};
	let initialRef: HTMLElement;
	let contentRef: HTMLElement;

	let step: string = 'initial';
	/** icon to display for back action */
	export let cancelIcon: string = 'chevron-left';

	function handleClickInitial(event: any) {
		event.preventDefault();
		event.stopPropagation();
		step = 'confirm';
	}

	function handleClickCancel(event: any) {
		event.preventDefault();
		event.stopPropagation();
		step = 'initial';
	}
</script>

{#if step === 'initial'}
	<span in:fade on:click={handleClickInitial} bind:this={initialRef}>
		<slot name="initial"
			><Button
				naked
				iconColor={iconColorInitial}
				icon={iconInitial}
				primary={primaryInitial}
			/></slot
		>
	</span>
{/if}
{#if step === 'confirm'}
	<span in:fade bind:this={contentRef} class="contentSlot">
		<span on:click={handleClickCancel}>
			<Button naked icon={cancelIcon} size="auto" title="cancel" />
		</span>
		<slot>
			<Button on:click={action} {iconColor} {icon} iconFamily="mdi" size="auto" {primary} focus />
		</slot>
	</span>
{/if}
