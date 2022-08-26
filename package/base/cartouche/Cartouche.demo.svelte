<script>
	import Cartouche from './Cartouche.svelte';
	import Icon from '../icon/Icon.svelte';
	import Divider from '../divider/Divider.svelte';
	import Button from '../button/Button.svelte';
</script>

<div class="flex-v gap-large">
	<h5>{'<Cartouche />'}</h5>
	<cite><p>
		"Open up", they said. So we stacked<br /> G. Brahms, 1964
	</p></cite>
	<h5>Using slots</h5>
	<Cartouche isOpen={true} class="marg-tb-1">
		<span slot="primarySlot">This is a cartouche</span>
		<Icon slot="cartoucheIconSlot" fontSize="small" icon="circle" />
		<div class="pad">Cartouche content</div>
	</Cartouche>
    <h5>Stacked, using props</h5>
	<div>
		<Cartouche stacked={true} icon="user" primary="This is a stacked cartouche" secondary="with some secondary text">Cartouche content</Cartouche>
		<Cartouche stacked={true} primary="This is another cartouche">
			<Button size="medium" slot="cartoucheActionSlot">With button</Button>
			cdcdsds
		</Cartouche>
		<Cartouche primary="with icon" stacked={true}>
			<Icon fontSize="small" slot="cartoucheIconSlot" icon="user" />
		</Cartouche>
	</div>
    <h5>Nested cartouches</h5>
	<Cartouche primary="Can contain some others cartouches" class="marg-tb-1">
        <Icon fontSize="small" slot="cartoucheIconSlot" icon="info-circle" />
		<Cartouche stacked={true} primary="Inner cartouche">cdcdsds</Cartouche>
		<Cartouche stacked={true} primary="Inner cartouche">cdcdsds</Cartouche>
	</Cartouche>
</div>
