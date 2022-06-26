<script lang="ts">
	import Button from '../button/Button.svelte';
	import Confirm from './Confirm.svelte';
</script>

<div class="flex-v gap-large theme-bg">
	<h5>{`<Confirm />`}</h5>
	<div>
		<cite>
			Leaded by a proud walk, nothing can stop nobody to win the step ahead, should we confirm ?
			<br />
			V.Hugo 1850
		</cite>
	</div>
	<Confirm primary="confirm deletion">
		<Button slot="initial">delete</Button>
		<Button focus type="submit" size="auto">confirm</Button>
	</Confirm>
</div>
