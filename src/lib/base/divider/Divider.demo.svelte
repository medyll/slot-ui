<script lang="ts">
	import type { ElementProps } from '$lib/types/index.js';
	import Divider from './Divider.svelte';
	type OptType = {
		density: ElementProps['density'][];
		expansion: ElementProps['expansion'][];
		direction: ['vertical', 'horizontal'];
		shadow: [false, true];
	};
	let attrs = {};

	// density
	// shadow
	// extension
	// direction
	const options: OptType & Record<string, any> = {
		density: ['none', 'tight', 'default', 'medium', 'kind'],
		expansion: ['full', 'padded', 'centered'],
		direction: ['vertical', 'horizontal'],
		shadow: [false, true]
	};

	/* demo */
	import ComponentExample from '$lib/demo/ComponentExample.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';
	import { defaultsArgsFromProps } from '../demoer/demoer.utils.js';
	/* demo */

	let parametersSlot: any = {
		density: {
			type: 'density-preset',
			values: ['none', 'tight', 'default', 'medium', 'kind']
		},
		expansion: {
			type: 'expansion-preset',
			values: ['full', 'padded', 'centered']
		},
		direction: {
			type: 'direction-preset',
			values: ['horizontal','vertical']
		},
		shadow: {
			type: 'boolean',
			values: [false, true]
		}
	};

	let componentArgsSlot = {
		density: defaultsArgsFromProps('density', parametersSlot),
		expansion: defaultsArgsFromProps('expansion', parametersSlot),
		direction: defaultsArgsFromProps('direction', parametersSlot),
		shadow: defaultsArgsFromProps('shadow', parametersSlot)
	};

	let codeSlot = `
	<Divider />`;
</script>

<ComponentExample
	component="Divider"
	cite="What is separating before from after is not a time nor a place : it's only a component <br /> B. Franklin,
1854"
>
	<div class=" flex-v gap-small">
		<DemoPage title="Using slots" component="Divider" code={codeSlot}>
			<Demoer parameters={parametersSlot} componentArgs={componentArgsSlot} let:activeParams>
				<div class="pad">
					<div class="pad">What is before</div>
					<Divider {...activeParams} />
					<div class="pad">And what is after</div>
				</div>
			</Demoer>
		</DemoPage>
	</div>
</ComponentExample>
