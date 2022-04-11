<script lang="ts">
	import Divider from '../divider/Divider.svelte';
	import type { ElementProps } from '../list/types';
	import {createEventForwarder} from '../../engine/engine';
	import {get_current_component} from 'svelte/internal';

	/*  common slotUi exports*/
	let className = '';
	export {className as class};
	export let element: HTMLDivElement | null = null;
	const forwardEvents                       = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let density: ElementProps['density'] = 'default';
</script>

<Divider />
<div use:forwardEvents bind:this={element} class="bottomBar density-{density} {className}">
	<slot>bottom bar</slot>
</div>

<style lang="scss">
	@import 'BottomBar';
</style>
