<script lang="ts">
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';
	import Icon from '../icon/Icon.svelte';
	import Avatar from './Avatar.svelte';

    let parameters: any = { 
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
		scored: 2,
		icon: 'icon-park-outline:avatar',
        size: 'small',
        iconSize: 'default',
	};

    let code1 = `<Avatar {...activeParams}><Icon icon={activeParams?.icon} /></Avatar>`

        
    let code2 = `<Avatar {...activeParams}  icon={activeParams?.icon} />`

</script>

<ComponentDemo component="Avatar" cite="If it's not you, then it's the other you, <br /> Emma Avatar you, 1652">
	<DemoPage title="Using slots" component="Rating">
        <Demoer {parameters} {componentArgs} code={code1} let:activeParams>
            <Avatar {...activeParams}><Icon icon={activeParams?.icon} /></Avatar>
        </Demoer>		
	</DemoPage>
    <DemoPage title="Without slots"  code={code2} component="Rating">
        <Demoer {parameters} {componentArgs} let:activeParams>
            <Avatar {...activeParams}  icon={activeParams?.icon} />
        </Demoer>		
	</DemoPage>
</ComponentDemo>
