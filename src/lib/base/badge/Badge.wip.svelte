<script lang="ts">
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';

	import Badge from './Badge.svelte';

    let parameters: any = {
		isOpen: {
			type: 'boolean',
			values: [true, false]
		},
		flow: {
			type: 'flow-preset',
			values: ['absolute', 'fixed', 'relative']
		},
		isLoading: {
			type: 'boolean',
			values: [true, false]
		}
	};

    let componentArgs = {
        isOpen: true,
		isLoading: false,
		flow: 'relative'
	};
</script>

<ComponentDemo component="Badge">
	<div class="flex-v gap-medium" >
        <DemoPage title="Using slots"   component="Badge">
            <div class="h-medium v-medium  dsp-block-inline pos-rel">
                <Badge ceiling={12} value={12345}>b</Badge>
            </div>
        </DemoPage>
    </div>
</ComponentDemo>
