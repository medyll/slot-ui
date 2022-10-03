<script lang="ts">
	import ComponentDemo from '$components/ComponentExample.svelte';
	import Button from '$lib/base/button/Button.svelte';
	import Alert from './Alert.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';

	let parameters: any = {
		isOpen: {
			type: 'boolean',
			values: [true, false]
		},
		level: {
			type: 'string',
			values: ['info', 'warning', 'alert', 'error', 'succes', 'discrete']
		}
	};

	let componentArgs = {
		level: 'info'
	};

	let componentArgs2 = {
		...componentArgs,
		text: 'Some informational message',
		message: 'Some informational message',
	};


let code1 = `
<Alert >
	Simple alert with a button
	<Button slot="topButtonSlot">button</Button>
</Alert>`
let code2 = `
<Alert />	`
</script>

<ComponentDemo
	component="Alert"
	cite="Then they were informeed, then they were messaged, then they were alerted. Br Jhons, 1752"
>
	<DemoPage title="Using slots" component="Alert" code={code1}>
		<Demoer {parameters} {componentArgs} let:activeParams>
			<div class="flex-h flex-wrap flex-align-middle gap-medium">
				<Alert {...activeParams}>Simple alert</Alert>
				<Alert {...activeParams}>
					Simple alert with a button
					<Button slot="topButtonSlot">button</Button>
				</Alert>
				<Alert
					{...activeParams}
					on:alert:closed={() => {
						alert('closed');
					}}
				>
					Alert with button close
					<div slot="messageSlot">description here here</div>
					<Button data-close slot="buttonZoneSlot">close</Button>
				</Alert>
			</div>
		</Demoer>
	</DemoPage>
	<DemoPage title="Using props" component="Alert" code={code2}>
		<Demoer {parameters} {componentArgs2} let:activeParams>
			<div class="flex-h flex-wrap gap-medium">
				<Alert {...activeParams} />				 
			</div>
		</Demoer>
	</DemoPage>
</ComponentDemo>
