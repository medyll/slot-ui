<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Box from '$lib/base/box/Box.svelte';
	import { toastStore } from './store.js';
	import { onMount } from 'svelte';
	import Toaster from './Toaster.svelte';

	export let toastId: any = crypto.randomUUID() as string;
	/** Toast will safe close after delay */
	export let autoClose: boolean = false;
	/** Default delay in milliseconds before auto closing  */
	export let autoCloseDelay: number = 5000;
	export let component: SvelteComponent | undefined = undefined;
	export let componentProps: any | undefined = undefined;
	export let toasterId: any = 'defaultToasterRoot';
	export let element: HTMLDivElement;

	let isOpen: boolean = true;
	// ensure is in store, not to show twice
	if (!$toastStore[toastId]) {
		$toastStore[toastId] = {
			toastId,
			autoClose,
			autoCloseDelay,
			component,
			componentProps
		};
	}

	onMount(() => {
		// check parentNode toasterId
		if (!document.body.querySelector('[data-toasterId=' + toasterId + ']')) {
			let a = new Toaster({
				target: document.body,
				props: { toasterId }
			});

			console.log(a);
		}

		document.body
			.querySelector('[data-toasterId="' + toasterId + '"]')
			.appendChild(document.body.querySelector('[data-toastId="' + toastId + '"]'));

		if (autoClose) {
			setTimeout(() => {
				isOpen = false;
			}, autoCloseDelay ?? 5000);
		}
	});
</script>

<Box bind:element style="width:auto;" data-toastId={toastId} {isOpen} {...$$restProps}>
	<slot />
</Box>

<style lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
</style>
