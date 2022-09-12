<script lang="ts">
	import Box from './Box.svelte';
	import Icon from '../icon/Icon.svelte';
	import Divider from '../divider/Divider.svelte';
	import Button from '../button/Button.svelte';
	import ComponentDemo from '$components/ComponentExample.svelte';
</script>

<ComponentDemo
	component="Box"
	cite="Boxes, essentially, contain other boxes. That's the meaning we'll found if open them<br /> B. Franklin,1854"
>
	<Box class="marg">
		<span slot="titleSlot">Title of the box</span>
		Content of the box
	</Box>
	<br />
	<Box class="marg" onClose="cdss">
		<Icon fontSize="small" icon="clock" slot="iconSlot" />
		<span slot="titleSlot">Title of the box</span>
		Content of the box
	</Box>
	<br />
	<Box hasMenu={true} onClose="cd">
		<Icon fontSize="small" icon="faClock" slot="iconSlot" />
		<span slot="titleSlot">Title of the box</span>
		<div slot="buttonZoneSlot">
			<Button>button</Button>
			<Button>another button</Button>
		</div>
		Content of the box
		<br />
		with a button
	</Box>
</ComponentDemo>
