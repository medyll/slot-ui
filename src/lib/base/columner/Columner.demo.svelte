<script lang="ts">
	import Column from './Column.svelte';
	import Columner from './Columner.svelte';
</script>

<div class="flex-v gap-large">
	<h5>{'<Columner />'}</h5>
	<cite><p>
		What else, cells ? We are columns <br /> D. Viesas, 1964
	</p></cite>
	<Columner style="height:350px">
		<Column>1</Column>
		<Column>2</Column>
		<Column>3</Column>
	</Columner>
</div>
