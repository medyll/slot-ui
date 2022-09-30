<script>
	import Cartouche from '$lib/base/cartouche/Cartouche.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';
	import Divider from '$lib/base/divider/Divider.svelte';
	import Button from '../button/Button.svelte';
	import ComponentDemo from '$_components/ComponentExample.svelte';
</script>

<ComponentDemo
	component="Cartouche"
	cite='"Open up", they said. So we stacked<br /> G. Brahms, 1964'
>
<div class="flex-v gap-large" style="width:450px">
	
	<h5>Using slots</h5>
	<Cartouche isOpen={true} class="marg-tb-1" >
		<span slot="primarySlot">This is a cartouche</span>
		<Icon slot="cartoucheIconSlot" fontSize="small" icon="circle" />
		<div class="pad-2 border-t">Cartouche content</div>
	</Cartouche>
	<h5>Stacked, using props</h5>
	<div>
		<Cartouche
			stacked={true}
			icon="user"
			primary="This is a stacked cartouche"
			secondary="with some secondary text"><div class="pad-2 border-t">Cartouche content</div></Cartouche
		>
		<Cartouche stacked={true} primary="This is another cartouche">
			<Button size="medium" slot="cartoucheActionSlot">With button</Button>
			<div class="pad-2 border-t">Cartouche content</div>
		</Cartouche>
		<Cartouche primary="with icon" stacked={true}>
			<Icon fontSize="small" slot="cartoucheIconSlot" icon="user" />
		</Cartouche>
	</div>
	<h5>Nested cartouches</h5>
	<Cartouche  bordered={false}
	showTitleDivider={true} primary="Can contain some others cartouches" class="marg-tb-1">
		<Icon fontSize="small" slot="cartoucheIconSlot" icon="info-circle" />
		<div class="marg-l-4">
			
		<Cartouche   bordered={false} showTitleDivider={true} stacked={true} primary="Inner cartouche"><div class="pad-2 border-t">Cartouche content</div></Cartouche>
		<Cartouche   bordered={false} showTitleDivider={true} stacked={true} primary="Inner cartouche"><div class="pad-2 border-t">Cartouche content</div></Cartouche>
		</div>
	</Cartouche>
</div>
</ComponentDemo>
