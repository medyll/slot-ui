<script lang="ts">
import ComponentDemo from '$_components/ComponentExample.svelte';
import type { ElementProps } from '$typings/index.js';
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

	function changeAttr(attr: any) {
		attrs = { ...attrs, ...attr };
	}
</script>

<ComponentDemo component='Divider'
cite="What is separating before from after is not a time nor a place : it's a component <br /> B. Franklin,
1854"
>
<div class=" flex-v gap-small">
	{#each Object.keys(options) as option}
		<h5 class="pad">{option}</h5>
		<div class=" flex-h flex-wrap gap-small">
			{#each options[option] as optionVal}
				{@const inlineObj = { [option]: optionVal }}
				<div class="w-large pos-rel  text-center">
					<div class="pad">{option} : {optionVal}</div>
					<div class="position:relative;" class:flex-h={optionVal === 'vertical'}  class:flex-align-middle={optionVal === 'vertical'}>
						<div> 
							What is before<br />
							in fact
						</div>
						<Divider {...inlineObj} />
						<div>could be after <br /> also ?</div>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>
</ComponentDemo>
