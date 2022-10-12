<script lang="ts">
	import ComponentExample from '$lib/demo/ComponentExample.svelte';
	import Column from './Column.svelte';
	import Columner from './Columner.svelte';
</script>
todo
<ComponentExample component="Column" cite="What else, cells ? We are columns <br /> D. Viesas, 1964">
	<Columner style="height:350px">
		<Column style="width:150px">1</Column>
		<Column style="width:150px">2</Column>
		<Column style="width:150px">2</Column>
		<Column  style="width:150px;right:0" >3</Column>
	</Columner>
</ComponentExample>
