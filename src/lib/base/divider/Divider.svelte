<script lang="ts">
	import { createEventForwarder } from '$lib/engine/eventForwarder.js'; 
	import { get_current_component } from 'svelte/internal';
	import type { ElementProps } from '$types/index.js';

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component()); 

	/** margins applied to divider */
	export let density: ElementProps['density'] = 'default';
	/** default direction of the divider */
	export let direction: 'vertical' | 'horizontal' = 'horizontal';
	/** expansion of the divider */
	export let expansion: ElementProps['expansion'] = 'full';
	/** give shadow to divider */
	export let shadow = false;
	/** give color to divider */
	export let color: string | undefined = undefined;

	let extensionClass = {
		horizontal: {
			full: '',
			padded: 'marg-ii-12',
			centered: 'marg-ii-6'
		},
		vertical: {
			full: '',
			padded: 'marg-ii-12',
			centered: 'marg-ii-6'
		}
	};
	
	let addStyle: string = '';

	$: shadowClass = shadow ? 'shad-3' : '';

	$: if(color) addStyle += `--slotui-divider-color:${color};`

	// set height od divider when direction === vertical in a flex env
	$: if((direction ==='vertical') && (element?.nextElementSibling ?? element?.previousElementSibling) ){
			let maxHeight = (element?.previousElementSibling ?? element?.nextElementSibling)?.getBoundingClientRect()?.height
			
			addStyle += `height:calc(${maxHeight}px - ${getDensity(density)});`;
	}

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

	switch (direction) {
		case 'horizontal':
			 addStyle += `margin-top:${getDensity(density)};margin-bottom:${getDensity(density)};`;
			break;
		case 'vertical':
			 addStyle += `margin-left:${getDensity(density)};margin-right:${getDensity(density)};`;
			break;
	}
</script>

<hr
	bind:this={element}
	class="{extensionClass[direction][expansion]} {className} {shadowClass}"
	class:vertical={direction === 'vertical'}
	style={addStyle}
	use:forwardEvents 
/>


<style lang="scss">
	@import 'Divider';
</style>
