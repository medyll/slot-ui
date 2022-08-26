<script lang="ts">
	import Box from './Box.svelte';
	import Icon from '../icon/Icon.svelte';
	import Divider from '../divider/Divider.svelte';
	import Button from '../button/Button.svelte';
</script>

<div class="flex-v gap-large">
	<h5>{'<Box />'}</h5>
	<cite
		><p>
			Boxes, essentially, contain other boxes. That's the meaning we'll found if open them<br /> B. Franklin,
			1854
		</p></cite>
	<Box class="marg">
		<span slot="titleSlot">Title of the box</span>
		Content of the box
	</Box>
	<Divider />
	<Box class="marg" onClose="cdss">
		<Icon fontSize="small" icon="clock" slot="iconSlot" />
		<span slot="titleSlot">Title of the box</span>
		Content of the box
	</Box>
	<Divider />
	<Box hasMenu={true} onClose="cd">
		<Icon fontSize="small" icon="faClock" slot="iconSlot" />
		<span slot="titleSlot">Title of the box</span>
		<div slot="buttonZoneSlot">
			<Button>button</Button>
			<Button>another button</Button>
		</div>
		Content of the boxs
		<br />
		with a button
	</Box>
</div>
