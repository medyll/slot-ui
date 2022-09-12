<script context="module">import Iconify from '@iconify/svelte';
const sizes = {
    tiny: 8,
    small: 16,
    medium: 24,
    default: 32,
    large: 48,
    big: 64,
};
</script>

<script>import { get_current_component } from 'svelte/internal';
import { onDestroy } from 'svelte';
import { browser } from '$app/environment';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let style = '';
/*  end slotUi exports*/
export let icon = 'question';
export let iconFamily = 'fa-solid';
export let fontSize = 'small';
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

<style global>:global(.rotate) {
  animation: spinner-frames 3s infinite linear;
}

@keyframes -global-spinner-frames {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}</style>
