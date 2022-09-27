<script lang="ts">
	import 'iconify-icon';

	import type { ElementProps } from '$typings/index.js';
	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let style: string = '';
	/*  end slotUi exports*/

	export let icon: string = 'question';
	export let iconFamily: string = 'mdi'; // fa-solid // mdi
	export let fontSize: ElementProps['sizeType'] = 'small';

	export let rotate: boolean = false;
	export let color: string | undefined = undefined;

	const sizes: Record<ElementProps['sizeType'], number> = {
		tiny: 8,
		small: 16,
		medium: 24,
		default: 32,
		large: 48,
		big: 64,
		full: 0,
		auto: 0
	} as const;

	$: iconName = icon.includes(':') ? icon : `${iconFamily}:${icon}`;
</script>

<iconify-icon
	class={className}
	class:rotate
	style="display:block;font-size:{sizes[fontSize]}px;color:{color};{style}"
	on:click
	icon={iconName}
	{...$$restProps}
/>

<style global lang="scss">
	.rotate {
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
