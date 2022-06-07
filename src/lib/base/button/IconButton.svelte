
<script lang="ts">
	import Icon from '../icon/Icon.svelte';
	import type { ElementProps } from '../../../types';
	import {createEventForwarder} from '../../engine/engine';
	import {get_current_component} from 'svelte/internal';
	/*  common slotUi exports*/
	let className = '';
	export {className as class};
	export let element: HTMLButtonElement | null = null;
	const forwardEvents                          = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let icon: ElementProps['icon'];
	export let iconFamily: string = 'fa-solid';
	export let iconClassName: string = '';
	export let style: string = '';
	export let showShip: boolean = false;
	export let iconFontSize: ElementProps['sizeType'] = 'medium';


</script>
<button data-iconButton bind:this={element} use:forwardEvents on:click {style} class={className}>
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

<style lang="scss">
	@import 'IconButton';
</style>
