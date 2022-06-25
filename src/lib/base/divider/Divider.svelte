<script lang="ts">
	import { createEventForwarder } from '../../engine/engine';
	import { get_current_component } from 'svelte/internal';
	import type { ElementProps } from '../../../types';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	/** margins applied to divider */
	export let density: ElementProps['density'] = 'default';
	/** default direction of the divider */
	export let direction: 'vertical' | 'horizontal' = 'horizontal';
	/** extension of the divider */
	export let extension: ElementProps['expansion'] = 'full';
	/** give shadow to divider */
	export let shadow = false;

	let extensionClass = {
		full: 'marg-tb-1 ',
		padded: 'marg-tb-1 marg-ii-2',
		centered: 'marg-tb-1 marg-ii-4'
	};

	$: shadowClass = shadow ? 'shad-3' : '';

	function getDensity(density: ElementProps['density']) {
		const denses: Record<ElementProps['density'], any> = {
			none: '0',
			tight: '0.25rem',
			default: '0.5rem',
			medium: '1rem',
			kind: '1.5rem'
		};

		return denses[density];
	}

	let addStyle: string = '';
	switch (direction) {
		case 'horizontal':
			addStyle = `margin:${getDensity(density)} 0`;
			break;
		case 'vertical':
			addStyle = `margin:0 ${getDensity(density)}`;
			break;
	}
</script>

<hr
	bind:this={element}
	class="{extensionClass[extension]} {className} {shadowClass}"
	class:vertical={direction === 'vertical'}
	style={addStyle}
	use:forwardEvents
/>

<style lang="scss">
	@import 'Divider';
</style>
