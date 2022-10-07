<script lang="ts">
	import ComponentExample from '$lib/demo/ComponentExample.svelte';
	import Column from './Column.svelte';
	import Columner from './Columner.svelte';
</script>

<ComponentExample component="Column" cite="What else, cells ? We are columns <br /> D. Viesas, 1964">
	<Columner style="height:350px">
		<Column>1</Column>
		<Column>2</Column>
		<Column>3</Column>
	</Columner>
</ComponentExample>
