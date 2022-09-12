<script lang="ts">
	import Icon from '../icon/Icon.svelte';
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component } from 'svelte/internal';
	import type { ElementProps } from '$typings/index.js';
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper';
	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let icon: ElementProps['icon'];
	export let iconFamily: string = 'fa-solid';
	export let iconClassName: string = '';
	export let iconFontSize: ElementProps['sizeType'] = 'small';
	export let style: string = '';
	export let showShip: boolean = false;

	export let usePopperOpt: UsePopperProps = { disabled: true } as UsePopperProps;

	//$: if(!usePopperOpt.disabled) console.log({popperOpt: usePopperOpt})
	// 
	// $: if(Boolean(usePopperOpt.parentNode)) console.log('==>',usePopperOpt,Boolean(usePopperOpt.parentNode))

	$: if(element) usePopperOpt.parentNode = element
</script>

{#key element?.toString() }
{#if !usePopperOpt.disabled}
<!-- {@debug usePopperOpt} -->
{/if}

<button
	use:popper={usePopperOpt}
	data-iconButton
	bind:this={element}
	use:forwardEvents
	on:click
	{style}
	class={className}
>
	<span>
		<span class="icon">
			<Icon {icon} {iconFamily} class={iconClassName} fontSize={iconFontSize} />
		</span>
		<slot />
	</span>
	{#if showShip}
		<span class="chip" />
	{/if}
</button>
{/key}
<style lang="scss">
	@import 'IconButton';
</style>
