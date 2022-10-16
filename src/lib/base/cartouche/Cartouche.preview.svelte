<script>
	import Cartouche from '$lib/base/cartouche/Cartouche.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';
	import Divider from '$lib/base/divider/Divider.svelte';
	import Button from '$lib/base/button/Button.svelte';
	import ComponentExample from '$lib/demo/ComponentExample.svelte';
</script>
 
	<div>
		<Cartouche
			stacked={true}
			icon="user"
			primary="This is a stacked cartouche"
			secondary="with some secondary text">Cartouche content</Cartouche
		>
		<Cartouche stacked={true} primary="This is another cartouche">
			<Button size="medium" slot="cartoucheButtons">With button</Button>
			cdcdsds
		</Cartouche>
		<Cartouche primary="with icon" stacked={true}>
			<Icon fontSize="small" slot="cartoucheIcon" icon="user" />
		</Cartouche>
	</div>  
