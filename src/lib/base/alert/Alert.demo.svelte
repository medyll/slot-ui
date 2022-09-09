<script lang="ts">
	import Button from '$lib/base/button/Button.svelte';
	import Alert from './Alert.svelte';
</script>

<Alert level="success" message="Message as props" />

<Alert level="info">
	Simple alert with button
	<Button slot="topButtonSlot">button</Button>
</Alert>
<Alert level="warning" message="message here">Simple alert</Alert>
<Alert level="alert" message="message here">Simple <br />alert</Alert>
<Alert level="discrete" message="message here">Simple</Alert>
<Alert
	level="error"
	on:alert:closed={() => {
		alert('closed');
	}}
	>Simple alerte with message
	<Button data-close slot="buttonZoneSlot">button close</Button>
	<div slot="messageSlot">message here</div>
</Alert>
<Alert message="message here">
	alert red
	<div slot="messageSlot">description here here</div>
	<Button data-close slot="buttonZoneSlot">buttddd on</Button>
</Alert>
