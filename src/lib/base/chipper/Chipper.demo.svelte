<script lang="ts">
	import Chipper from './Chipper.svelte';
	/* demo */
	import ComponentDemo from '$components/ComponentExample.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';
	/* demo */

	let parametersSlot: any = {
		position: {
			type: 'position',
			values: ['top', 'bottom', 'left', 'right']
		},
		showChip: {
			type: 'boolean',
			values: [true, false]
		}
	};

	let parametersProps: any = {
		title: {
			type: 'string',
			values: ['A smart title on a smart box', 'second title']
		},
		content: {
			type: 'string',
			values: ['Some content as text / html', 'second content']
		},
		bottomZone: {
			type: 'string',
			values: ['bottomZone as text / html', 'second bottomZone']
		},
		icon: {
			type: 'icon',
			values: ['mdi:window', 'mdi:user', undefined]
		},
		...parametersSlot
	};

	let componentArgsSlot = {
		showChip: true,
		position: 'bottom'
	};

	let componentArgsProps = {
		...componentArgsSlot
	};

	let codeSlot = `
	<Chipper>
		<div class="pad-4">some content</div> 
		<div slot="chipSlot"   class="pad-tiny theme-bg-primary radius-small"></div>
	</Chipper>`;

	let codeProps = `
	<Chipper >
		<div class="pad-4">some content</div>
	</Chipper>`;
</script>

<ComponentDemo component="Chipper">
	<DemoPage title="Using slots" component="Chipper" code={codeSlot}>
		<Demoer 
			parameters={parametersSlot}
			componentArgs={componentArgsSlot}
			let:activeParams
		>
			<Chipper {...activeParams}>
				<div class="pad-2">some content</div> 
                <div slot="chipSlot"   class="pad-tiny theme-bg-primary radius-small"></div>
			</Chipper>
		</Demoer>
	</DemoPage>
	<DemoPage title="Without slots" component="Chipper" code={codeProps}>
		<Demoer 
			parameters={parametersSlot}
			componentArgs={componentArgsProps}
			let:activeParams
		>
			<Chipper {...activeParams}>
				<div class="pad-2">some content</div>
			</Chipper>
		</Demoer>
	</DemoPage>
</ComponentDemo>
