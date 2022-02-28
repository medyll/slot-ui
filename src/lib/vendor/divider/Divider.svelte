<script lang="ts">
	import type { ElementProps } from '../list/types';
    import {createEventForwarder} from '$lib/engine/engine';
    import {get_current_component} from 'svelte/internal';

    /*  common slotUi exports*/
    let className = '';
    export {className as class};
    export let element: HTMLDivElement | null = null;
    const forwardEvents                       = createEventForwarder(get_current_component());
    /*  end slotUi exports*/

	export let density: ElementProps['density'] = 'default';
	export let direction: 'vertical' | 'horizontal' = 'horizontal';
	export let extension: ElementProps['expansion'] = 'full';

	let extensionClass = {
		full: 'marg-tb-1 ',
		padded: 'marg-tb-1 marg-ii-2',
		centered: 'marg-tb-1 marg-ii-4'
	};
</script>

<hr use:forwardEvents bind:this={element} class="{extensionClass[extension]} {className}" />

<style lang="scss">
  @import './Divider.scss';
</style>
