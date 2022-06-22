<script lang="ts" context="module">
	import Iconify from '@iconify/svelte';

	import type { ElementProps } from 'src/types';
	export type SizeType = keyof typeof sizes;
	const sizes: Partial<Record<ElementProps['sizeType'], any>> = {
		tiny: 8,
		small: 16,
		medium: 24,
		default: 32,
		large: 48,
		big: 64, 
	} as const; 
</script>

<script lang="ts"> 
	import { get_current_component } from 'svelte/internal';
	import { onDestroy } from 'svelte';

	import { browser } from '$app/env';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let style: string = ''; 
	/*  end slotUi exports*/

	export let icon: string = 'question';
	export let iconFamily: string = 'fa-solid';
	export let fontSize: SizeType = 'small';
</script>

{#if browser}
	<Iconify
		style="font-size:{sizes[fontSize]}px;{style}"
		icon="{iconFamily}:{icon}"
		class={className}
		inline={false}
		{...$$restProps}
	/>
{/if}

<style global lang="scss"> 
	.rotate  {
		animation: spinner-frames 3s infinite linear;
	}
	@keyframes spinner-frames {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
