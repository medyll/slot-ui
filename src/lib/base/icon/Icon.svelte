<script lang="ts">
	import 'iconify-icon';

	import type { ElementProps } from '$lib/types/index.js';
  import { uiPresets } from '$lib/engine/presets.js';
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

	const sizes: Record<ElementProps['sizeType'], number> = uiPresets.iconSize  ;

	$: iconName = icon.includes(':') ? icon : `${iconFamily}:${icon}`;
</script>

<iconify-icon
	class={className}
	class:rotate
	style="display:block;font-size:{sizes[fontSize]};color:{color};{style}"
	on:click
	icon={iconName}
	{...$$restProps}
/>

<style global lang="scss">
	@import "../../styles/slotui-vars.css";
	@import "../../styles/presets.scss";
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
