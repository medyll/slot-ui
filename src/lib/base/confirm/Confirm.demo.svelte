<script lang="ts">
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import Button from '../button/Button.svelte';
	import Confirm from './Confirm.svelte';
</script>

<ComponentDemo
	component="Confirm"
	cite="Leaded by a proud walk, nothing can stop nobody to win the step ahead, should we confirm ?
<br />
V.Hugo 1850"
>
	<Confirm primary="confirm deletion">
		<Button slot="initial">delete</Button>
		<Button focus type="submit" size="auto">confirm</Button>
	</Confirm>
</ComponentDemo>
