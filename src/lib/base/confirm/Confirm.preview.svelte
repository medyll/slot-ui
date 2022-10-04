<script lang="ts">
	import Button from '../button/Button.svelte';
	import Confirm from './Confirm.svelte';
</script>

<div>
	<Confirm primary="confirm deletion">
		<Button slot="initial">delete</Button>
		<Button focus type="submit" size="auto">confirm</Button>
	</Confirm>
</div>
