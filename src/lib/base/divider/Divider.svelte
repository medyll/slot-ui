<script lang="ts">
	/** extends button */
	import type { ElementProps } from '$lib/types/index.js';
	import { uiPresets } from '$lib/engine/presets.js';

	let className: string | undefined = undefined;
	/**  className off the root component  */
	export { className as class };
	/**  css style off the root component  */
	export let style: string | undefined = undefined;
	/** element root HTMLDivElement props  */
	export let element: HTMLDivElement | null = null;

	/** margins applied to divider 
	 @type {'none' | 'tight' | 'default' | 'medium' | 'kind'}
	*/
	export let density: ElementProps['density'] = 'default';
	/** default direction of the divider 
	@type {'vertical' | 'horizontal'} */
	export let direction: 'vertical' | 'horizontal' = 'horizontal';
	/** expansion of the divider
	@type {'full' | 'padded' | 'centered'}
	 */
	export let expansion: ElementProps['expansion'] = 'full';
	/** give shadow to divider */
	export let shadow: boolean = false;
	/** give color to divider */
	export let color: string | null = '';

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

	let addStyle: string = style ?? '';

	$: shadowClass = shadow ? 'shad-3' : '';

	$: if (color) addStyle += `--slotui-divider-color:${color};`;

	// set height od divider when direction === vertical in a flex env
	$: if (
		direction === 'vertical' &&
		(element?.nextElementSibling ?? element?.previousElementSibling)
	) {
		let maxHeight = (
			element?.previousElementSibling ?? element?.nextElementSibling
		)?.getBoundingClientRect()?.height;

		addStyle += `height:calc(${maxHeight}px - ${getDensity(density)});`;
	}

	function getDensity(density: ElementProps['density']) {
		return uiPresets.density?.[density];
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
/>

<style lang="scss">
	@import 'Divider';
</style>
