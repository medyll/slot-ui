<script lang="ts">
	import ComponentDemo from '$lib/_components/ComponentExample.svelte';
	import Column from './Column.svelte';
	import Columner from './Columner.svelte';
</script>

<ComponentDemo component="Column" cite="What else, cells ? We are columns <br /> D. Viesas, 1964">
	<Columner style="height:350px">
		<Column>1</Column>
		<Column>2</Column>
		<Column>3</Column>
	</Columner>
</ComponentDemo>
