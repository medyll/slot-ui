<script lang="ts">
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component } from 'svelte/internal';
	import type { ElementProps } from '$lib/types/index.js';
	import Button from "./Button.svelte";
    /** @restProps {Button} */
	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let icon: ElementProps['icon'];
	export let iconFontSize: ElementProps['sizeType'] = 'small';
	export let style: string = '';
    export let ratio: string = '1/1';
</script>

<Button {ratio}  {iconFontSize}   {icon} {...$$restProps} {style} class={className} />

