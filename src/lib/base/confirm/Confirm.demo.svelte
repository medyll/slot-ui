<script lang="ts">
	import Button from '../button/Button.svelte';
	import Confirm from './Confirm.svelte';
</script>

<div class="flex-v gap-large theme-bg">
	<h5>{`<Confirm />`}</h5>
	<Confirm>
		<Button slot="initial">delete</Button>
		<Button type="submit" size="auto">confirm</Button>
	</Confirm>
</div>
