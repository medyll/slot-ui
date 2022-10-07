<script lang="ts">
	/* demo */
	import ComponentExample from '$lib/demo/ComponentExample.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';
	import { defaultsArgsFromProps } from '$lib/base/demoer/demoer.utils.js';
	import Icon from '$lib/base/icon/Icon.svelte';
	/* demo */

	import Input from '$lib/base/input/Input.svelte';
	import type { ElementProps } from '$lib/types/index.js';

	type ParameterType = {
		sizes: ElementProps['sizeType'][];
		inputHeight: ElementProps['inputHeight'][];
	}; 

	let parametersSlot: any = {
		size: {
			type: 'size-preset',
			values: ['medium', 'tiny', 'small', 'large']
		},
	};

	let componentArgsSlot = {
		value: 'input value',
		size: defaultsArgsFromProps('size', parametersSlot), 
	};

	let parametersProps: any = {
		icon: {
			type: 'icon',
			values: ['search', undefined]
		},
		endIcon: {
			type: 'endIcon',
			values: ['search', undefined]
		},
		height: {
			type: 'size-preset',
			values: ['small','tiny', 'small',  'large']
		},
		...parametersSlot, 
	};

	let componentArgsProps = {
		...componentArgsSlot
	};

	let codeSlot = `
	<Input >
		<Icon slot="startInputSlot" icon="close" />
		<Icon slot="endInputSlot" icon="close" />
	</Input>`;
	let codeSlotProps = `
	<Input icon={icon} endIcon={icon} />`;
</script>

<ComponentExample component="Input">
	<div class="flex-v gap-large">
		<DemoPage title="Using slots" component="Input" code={codeSlot}>
			<Demoer parameters={parametersSlot} componentArgs={componentArgsSlot} let:activeParams>
				<div class="pad flex-h flex-align-middle flex-wrap">
					<div class="pad-1">
						<Input {...activeParams}>
							<Icon slot="startInputSlot" icon="close" /> 
						</Input>
					</div>
					<div class="pad-1">
						<Input {...activeParams} /> 
					</div>
					<div class="pad-1">
						<Input {...activeParams}>
							<Icon slot="endInputSlot" icon="close" />
						</Input>
					</div>
				</div>
			</Demoer>
		</DemoPage>
		<DemoPage title="Using props" component="Input" code={codeSlotProps}>
			<Demoer parameters={parametersProps} componentArgs={componentArgsProps} let:activeParams>
				<div class="pad flex-h">
					<div class="pad-1">
						<Input {...activeParams} />
					</div>
				</div>
			</Demoer>
		</DemoPage>
	</div>
</ComponentExample>
