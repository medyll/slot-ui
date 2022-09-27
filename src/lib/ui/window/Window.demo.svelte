<script lang="ts">
	import { openWindow } from './window.actions.js';
	import ComponentDemo from '$components/ComponentExample.svelte';
	import Button from '$lib/base/button/Button.svelte';
	import Debug from '$lib/base/debug/Debug.svelte';
	import Window from './Window.svelte';
</script>

<ComponentDemo
	component="Window"
	cite="Claiming they were not doors, made what they are today : windows <br /> Ch XX, 1320"
>
	<div class="flex-v gap-large">
		<h5>Window slotted</h5>
		<div>
			<Button>Open the Window with some slotted content</Button>
			<Window title="slotted window" frameId="slotted" open={true}>
				<div class="pad-4 align-center">some slotted content</div>
			</Window>
		</div>
		<h5>Window with html content as props</h5>
		<div>
			<Button
				on:click={() => {
					openWindow('html', {
						// component: Debug,
						componentProps: { some: 'props', someother: 'deprops' },
						contentHTML: '<div class="pad-4 align-center">some html content</div>'
					});
				}}
			>
				Window with html content
			</Button>
		</div>
		<h5>Window with component as props</h5>
		<div>
			<Button
				on:click={() => {
					openWindow('component', {
						component: Debug,
						componentProps: { some: 'props', someother: 'deprops' }
					});
				}}
			>
				Window with html content
			</Button>
		</div>
	</div>
</ComponentDemo>
