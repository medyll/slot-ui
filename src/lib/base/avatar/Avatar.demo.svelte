<script lang="ts">
	import ComponentExample from '$lib/demo/ComponentExample.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';
	import Icon from '../icon/Icon.svelte';
	import Avatar from './Avatar.svelte';

	let parametersSlot: any = {  
		size: {
			type: 'string',
			values: ['tiny','small','medium','large']
		}, 
	};

    let parametersProps: any = { 
		icon: {
			type: 'icon',
			values: ['icon-park-outline:avatar','carbon:phone-ip']
		},
		size: {
			type: 'string',
			values: ['tiny','small','medium','large']
		},
		iconSize: {
			type: 'size preset',
			values: ['tiny','small','medium','default','large']
		}
	};

	let componentArgs = { 
		icon: 'icon-park-outline:avatar',
        size: 'small',
        iconSize: 'default',
	};

    let code1 = `
<Avatar>
	<Icon icon={activeParams?.icon} />
</Avatar>`

        
    let code2 = `
	<Avatar icon={icon} />`

</script>

<ComponentExample component="Avatar" cite="If it's not you, then it's the other you, <br /> Emma Avatar you, 1652">
<div class="flex-v gap-large"  >
	<DemoPage title="Using slots" component="Rating" code={code1}>
        <Demoer parameters={parametersSlot} {componentArgs} let:activeParams>
            <Avatar {...activeParams}><Icon icon={activeParams?.icon} /></Avatar>
        </Demoer>		
	</DemoPage>
    <DemoPage title="Without slots"  code={code2} component="Rating">
        <Demoer parameters={parametersProps} {componentArgs} let:activeParams>
            <Avatar {...activeParams}  icon={activeParams?.icon} />
        </Demoer>		
	</DemoPage>
</div>
</ComponentExample>
